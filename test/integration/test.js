const {exec} = require('child_process');
const path = require("path");
const {
	PROJECT_ROOT_PATH,
	handleScan,
	prepareTestEnvironment,
	cleanup,
	TEMP_SCRIPT_PATH,
	TEMP_FOLDER_PATH
} = require("../common");

describe('run scan2html with different options', function () {
	before(prepareTestEnvironment());
	after(cleanup);
	it('test image', function (done) {
		const imageTestName = 'alpine:3.14.1'
		const imageTestOutput = 'image_test_alpine.html'
		const filePath = path.join(TEMP_FOLDER_PATH, imageTestOutput)
		exec(`${TEMP_SCRIPT_PATH} image ${imageTestName} ${filePath}`, handleScan(filePath, done));
	});
	it('test fs', function (done) {
		const fsScanDir = path.join(__dirname, '..')
		const fsTestOutput = 'fs_test_scan2html.html'
		const filePath = path.join(TEMP_FOLDER_PATH, fsTestOutput)
		exec(`${TEMP_SCRIPT_PATH} fs ${fsScanDir} ${filePath}`, handleScan(filePath, done));
	});
	// it('test k8s', function (done) {
	// 	const k8sTestOutput = 'k8s_test_scan2html.html'
	// 	const filePath = path.join(TEMP_FOLDER_PATH, k8sTestOutput)
	// 	exec(`${TEMP_SCRIPT_PATH k8s --report all cluster ./test/temp/${k8sTestOutput}`, handleScan(filePath, done));
	// });
	it('test rootfs', function (done) {
		const rootfsTestOutput = 'rootfs_test_scan2html.html'
		const filePath = path.join(TEMP_FOLDER_PATH, rootfsTestOutput)
		exec(`${TEMP_SCRIPT_PATH} rootfs ${PROJECT_ROOT_PATH} ${filePath}`, handleScan(filePath, done));
	});
})
