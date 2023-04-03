function fillSecrets(result) {
	const secretResults = secretResultsTemplate.content.cloneNode(true);
	const secretsContainer = secretResults.querySelector(
		".secret-results__content"
	);
	const secretsContainerTitle = secretResults.querySelector(
		".secret-results__title"
	);
	const secretResultsTitleTarget = secretsContainerTitle.querySelector(
		".secret-results__title-target"
	);
	secretResultsTitleTarget.textContent = result.Target;
	const secretResultsTitleClass = secretsContainerTitle.querySelector(
		".secret-results__title-class"
	);
	secretResultsTitleClass.textContent = `(${result.Class})`;
	// Secrets field is not empty
	const secrets = result.Secrets.map((secret) => {
		const secretNode = secretTemplate.content.cloneNode(true);
		const secretTitle = secretNode.querySelector(".secret__title");
		const secretHead = secretNode.querySelector(".secret__head");
		const secretSrc = secretNode.querySelector(".secret__src");
		const secretCode = secretNode.querySelector(".secret__code");
		/*HEAD*/
		const secretSeverity = secretHead.querySelector(".secret__severity");
		secretSeverity.classList.toggle(`severity-${secret.Severity}`);
		secretSeverity.textContent = secret.Severity;
		const secretType = secretHead.querySelector(".secret__type");
		secretType.textContent = `${secret.Category} (${secret.RuleID})`;
		/*HEAD*/
		/*TITLE*/
		secretTitle.textContent = secret.Title;
		/*TITLE*/
		/*SRC*/
		const secretSrcFile = secretSrc.querySelector(".secret__src-file");
		secretSrcFile.textContent = result.Target;
		const secretSrcLines = secretSrc.querySelector(".secret__src-lines");
		secretSrcLines.textContent =
			secret.StartLine === secret.EndLine
				? secret.StartLine
				: `${secret.StartLine} - ${secret.EndLine}`;
		/*SRC*/
		const lines = secret.Code.Lines.map((line) => {
			const secretCodeLine = secretCodeLineTemplate.content.cloneNode(true);
			const secretLine = secretCodeLine.querySelector(".secret__line");
			const secretLineNumber = secretLine.querySelector(".secret__line-number");
			secretLineNumber.textContent = line.Number.toString();
			const secretLineCode = secretLine.querySelector(".secret__line-code pre");
			secretLineCode.textContent = line.Content;
			if (line.IsCause) {
				secretLine.classList.toggle("secret__line-cause");
			}
			return secretCodeLine;
		});
		secretCode.append(...lines);
		return secretNode;
	});
	secretsContainer.append(...secrets);
	return secretResults;
}