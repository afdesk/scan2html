const SeverityNames = ["UNKNOWN", "LOW", "MEDIUM", "HIGH", "CRITICAL"];

function reverseDeps(libs) {
  const reversed = {};
  for (const lib of libs) {
    if (!lib.DependsOn) continue;
    for (const dependOn of lib.DependsOn) {
      if (!reversed[dependOn]) {
        reversed[dependOn] = [lib.ID];
      } else {
        reversed[dependOn].push(lib.ID);
      }
    }
  }

  for (const k in reversed) {
    reversed[k] = [...new Set(reversed[k])];
  }
  return reversed;
}

function summarize(severityCount) {
  let total = 0;

  const summaries = SeverityNames.map((severity) => {
    const count = severityCount[severity] ?? 0;
    const r = `${severity}: ${count}`;
    total += count;
    return r;
  });

  return [total, summaries];
}

class Node {
  value = "";
  nodes = [];

  constructor(value = "") {
    this.value = value;
  }

  addBranch(value) {
    const branch = new Node(value);
    this.nodes.push(branch);
    return branch;
  }

  findDeepestNodes(depth = 0) {
    if (!this.nodes || this.nodes.length === 0) {
      return [{ node: this, depth }];
    }
    const deepestNodes = this.nodes
      .map((childNode) => childNode.findDeepestNodes(depth + 1))
      .reduce((acc, curr) => acc.concat(curr), []);

    const maxDepth = deepestNodes.reduce(
      (max, { depth }) => Math.max(max, depth),
      depth
    );

    return deepestNodes.filter(({ depth }) => depth === maxDepth);
  }
}

/**
 *
 * @param topItem: Node
 * @param pkgID
 * @param parentMap
 * @param seen
 */
function addParents(topItem, pkgID, parentMap, seen) {
  seen[pkgID] = true;
  const parents = parentMap[pkgID] || [];
  for (const parent of parents) {
    if (seen[parent]) return;
    const branch = topItem.addBranch(parent);
    addParents(branch, parent, parentMap, seen);
  }
}

function buildDependencyTree(result) {
  const parents = reverseDeps(result.Packages);
  if (Object.keys(parents).length === 0) {
    return;
  }
  let pkgSeverityCount = {};
  for (let vuln of result.Vulnerabilities) {
    let cnts = pkgSeverityCount[vuln.PkgID] || {};
    cnts[vuln.Severity] = (cnts[vuln.Severity] || 0) + 1;
    pkgSeverityCount[vuln.PkgID] = cnts;
  }
  const root = new Node(result.Target);
  const seen = new Set();
  for (const vuln of result.Vulnerabilities) {
    if (seen.has(vuln.PkgID)) continue;

    const summaries = summarize(pkgSeverityCount[vuln.PkgID]);
    const topLvlID = vuln.PkgID + " (" + summaries.join(", ") + ")";
    seen.add(vuln.PkgID);

    const branch = root.addBranch(topLvlID);
    addParents(branch, vuln.PkgID, parents, {});
  }
  return root;
}

function fillDependencyTree(result) {
  const dependencyTreeRoot = dependencyTreeRootTemplate.content.cloneNode(true);
  const dependencyTreeRootContainer = dependencyTreeRoot.querySelector(".tree");
  const dependencyTreeRootTitle = dependencyTreeRoot.querySelector(
    ".dependency-tree__title"
  );
  dependencyTreeRootTitle.textContent = result.Target;
  const dependencyTree = buildDependencyTree(result);
  if (!dependencyTree) return [];
  const dependencyTreeTop = buildDependencyTreeDOM(dependencyTree); // nodes, where depth === 1

  const dependencyTreeTopNodes = dependencyTreeTop.map((top) => {
    const deepest = top.node.findDeepestNodes();
    if (deepest[0].depth > 2) {
      // collapse
      const topNodeContainer = top.nodeDOM.querySelector(
        ".dependency-tree-node__container"
      );
      const collapseContainer = topNodeContainer.children.item(2);
      const originalContainer = topNodeContainer.children.item(1);
      originalContainer.classList.add("hidden");
      const dotsContainer = dependencyTreeNodeTemplate.content.cloneNode(true);
      const dotsTitle = dotsContainer.querySelector(
        ".dependency-tree-node__title"
      );
      const dotsChildren = dotsContainer.querySelector(
        ".dependency-tree-node__children"
      );
      dotsTitle.textContent = "...";
      dotsTitle.classList.add("dependency-tree-node__dots");
      const deepestDOMNodes = deepest.map((deep) => {
        const deepestNode = dependencyTreeNodeTemplate.content.cloneNode(true);
        const t = deepestNode.querySelector(".dependency-tree-node__title");
        t.textContent = deep.node.value;
        return deepestNode;
      });
      dotsChildren.append(...deepestDOMNodes);
      collapseContainer.append(dotsContainer);
    }
    return top.nodeDOM;
  });
  const topContent = dependencyTreeNodeTemplate.content.cloneNode(true);
  const topContentChildren = topContent.querySelector('.dependency-tree-node__children.original');
  topContentChildren.append(...dependencyTreeTopNodes)
  dependencyTreeRootContainer.append(topContent);
  return dependencyTreeRoot;
}

function buildDependencyTreeDOM(topNode, recursionDepth = 0) {
  recursionDepth++;
  return topNode.nodes.map((node) => {
    const dependencyTreeNode =
      dependencyTreeNodeTemplate.content.cloneNode(true);
    const dependencyTreeTitle = dependencyTreeNode.querySelector(
      ".dependency-tree-node__title"
    );
    const dependencyTreeContent = dependencyTreeNode.querySelector(
      ".dependency-tree-node__children.original"
    );
    dependencyTreeTitle.textContent = node.value;
    dependencyTreeContent.append(
      ...buildDependencyTreeDOM(node, recursionDepth)
    );
    if (recursionDepth === 1) {
      // required for collapsing elements
      return { node, nodeDOM: dependencyTreeNode };
    } else {
      return dependencyTreeNode;
    }
  });
}
