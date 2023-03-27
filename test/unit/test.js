const chai = require('chai');
const jsdom = require('jsdom');
const path = require("path");
const alpineDT = require("../resources/testData/alpineDT");
const alpineTreeRoot = require("../resources/testData/alpineTreeRoot");


const fsDT = require("../resources/testData/fsDT");
const fsTreeRoot = require("../resources/testData/fsTreeRoot");

const rootfsDT = require("../resources/testData/rootfsDT");
const rootfsTreeRoot = require("../resources/testData/rootfsTreeRoot");


const {
	executeCommand,
	prepareTestEnvironment,
	TEMP_FOLDER_PATH,
	TEMP_SCRIPT_PATH,
} = require("../common");
const {JSDOM} = jsdom;

describe('test tree root', function () {
	before(prepareTestEnvironment());
	// after(cleanup);
	it('image', async function () {
		const imageTestName = 'alpine:3.14.1'
		const imageTestOutput = 'image_test_alpine.html'
		const filePath = path.join(TEMP_FOLDER_PATH, imageTestOutput)
		await executeCommand(`${TEMP_SCRIPT_PATH} image ${imageTestName} --dependency-tree ${filePath}`)
		const dom = await JSDOM.fromFile(filePath, {runScripts: "dangerously", resources: 'usable'})
		const window = dom.window;
		const generatedRoot = window.buildDependencyTree(alpineDT.Results[0]);
		chai.expect(generatedRoot).to.deep.equal(alpineTreeRoot);
	});

	it('fs', async function () {
		const fsScanDir = path.join(__dirname, '..', 'resources', 'vulnSource');
		const fsTestOutput = 'fs_test_scan2html.html';
		const filePath = path.join(TEMP_FOLDER_PATH, fsTestOutput);
		await executeCommand(`${TEMP_SCRIPT_PATH} fs ${fsScanDir} --dependency-tree ${filePath}`);
		const dom = await JSDOM.fromFile(filePath, {runScripts: "dangerously", resources: 'usable'});
		const window = dom.window;
		const generatedRoot = window.buildDependencyTree(fsDT.Results[0]);
		chai.expect(generatedRoot).to.deep.equal(fsTreeRoot);
	});

	it('rootfs', async function () {
		const fsScanDir = path.join(__dirname, '..', 'resources', 'vulnSource')
		const rootfsTestOutput = 'rootfs_test_scan2html.html'
		const filePath = path.join(TEMP_FOLDER_PATH, rootfsTestOutput)
		await executeCommand(`${TEMP_SCRIPT_PATH} rootfs ${fsScanDir} --dependency-tree ${filePath}`)
		const dom = await JSDOM.fromFile(filePath, {runScripts: "dangerously", resources: 'usable'})
		const window = dom.window;
		const generatedRoot = window.buildDependencyTree(rootfsDT.Results[0]);
		chai.expect(generatedRoot).to.deep.equal(rootfsTreeRoot);
	});
});