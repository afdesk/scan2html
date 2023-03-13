const {exec} = require('child_process');
const fs = require('fs');
const path = require("path");

const TEMP_FOLDER_PATH = path.join(__dirname, 'temp');
const PROJECT_ROOT_PATH = path.join(__dirname, '..');
const SCRIPT_PATH = path.join(PROJECT_ROOT_PATH, 'scan2html');
const TEMP_SCRIPT_PATH = path.join(TEMP_FOLDER_PATH, 'scan2html');

const prepareTestEnvironment = () => {
	//create temp folder if not exist
	if (!fs.existsSync(TEMP_FOLDER_PATH)) {
		fs.mkdirSync(TEMP_FOLDER_PATH);
	}
	//copy scan2html file to temp folder
	fs.copyFileSync(SCRIPT_PATH, path.join(TEMP_FOLDER_PATH, 'scan2html'));

	exec(`yarn build --dist ${TEMP_FOLDER_PATH}`, (err) => {
		if (err) {
			console.error('Failed to initialize test environment', err)
			throw err;
		}
	})
}
const cleanup = () => {
	// remove temp folder
	fs.rmSync(TEMP_FOLDER_PATH, {recursive: true, force: true});
}
console.log('PROJECT_ROOT_PATH', PROJECT_ROOT_PATH)
const handleScan = (filePath, done) => (error) => {
	if (error) {
		done(error)
	}
	const isFileCreated = fs.existsSync(filePath)
	if (isFileCreated) {
		done()
	} else {
		done(new Error('file was not created'))
	}
}
describe('run scan2html with different options', function () {
	before(prepareTestEnvironment);
	after(cleanup);
	it('test image', function (done) {
		const imageTestName = 'alpine:3.14.1'
		const imageTestOutput = 'image_test_alpine.html'
		const filePath = path.join(TEMP_FOLDER_PATH, imageTestOutput)
		exec(`${TEMP_SCRIPT_PATH} image ${imageTestName} ./test/temp/${imageTestOutput}`, handleScan(filePath, done));
	});
	it('test fs', function (done) {
		const fsScanDir = path.join(__dirname, '..')
		const fsTestOutput = 'fs_test_scan2html.html'
		const filePath = path.join(TEMP_FOLDER_PATH, fsTestOutput)
		exec(`${TEMP_SCRIPT_PATH} fs ${fsScanDir} ./test/temp/${fsTestOutput}`, handleScan(filePath, done));
	});
	// it('test k8s', function (done) {
	// 	const k8sTestOutput = 'k8s_test_scan2html.html'
	// 	const filePath = path.join(TEMP_FOLDER_PATH, k8sTestOutput)
	// 	exec(`${TEMP_SCRIPT_PATH k8s --report all cluster ./test/temp/${k8sTestOutput}`, handleScan(filePath, done));
	// });
	it('test rootfs', function (done) {
		const rootfsTestOutput = 'rootfs_test_scan2html.html'
		const filePath = path.join(TEMP_FOLDER_PATH, rootfsTestOutput)
		exec(`${TEMP_SCRIPT_PATH} rootfs ${PROJECT_ROOT_PATH} ./test/temp/${rootfsTestOutput}`, handleScan(filePath, done));
	});
})
