const {exec} = require('child_process');
const fs = require('fs');
const path = require("path");

const TEMP_FOLDER_PATH = path.join(__dirname, '..', 'temp');
const PROJECT_ROOT_PATH = path.join(__dirname, '..', '..');
const SCRIPT_PATH = path.join(PROJECT_ROOT_PATH, 'scan2html');
const TEMP_SCRIPT_PATH = path.join(TEMP_FOLDER_PATH, 'scan2html');

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
const executeCommand = (command) => new Promise((res, rej) => {
	exec(command, (err) => {
		if (err) {
			console.error('Failed to ' + command, err);
			return rej(err);
		}
		return res();
	})
})
const copy = (from, to) => new Promise((res, rej) => {
	fs.copyFile(from, to, (err) => {
		if (err) {
			return rej(err)
		}
		return res();
	});
})
/*
 reportParams: {
 	args: string, // trivy sca2nhtml image alpine report.html -> image alpine
 	outputFileName: string, // trivy sca2nhtml image alpine report.html -> report.html
 }
 */
const prepareTestEnvironment = (reportParams) => async () => {
	//create temp folder if not exist
	if (!fs.existsSync(TEMP_FOLDER_PATH)) {
		fs.mkdirSync(TEMP_FOLDER_PATH);
	}
	await copy(SCRIPT_PATH, path.join(TEMP_FOLDER_PATH, 'scan2html'))

	await executeCommand(`yarn build --dist ${TEMP_FOLDER_PATH}`)
	if (reportParams) {
		const filePath = path.join(TEMP_FOLDER_PATH, reportParams.outputFileName);
		await executeCommand(`${TEMP_SCRIPT_PATH} ${reportParams.args} ${filePath}`);
	}
}
const cleanup = () => {
	// remove temp folder
	fs.rmSync(TEMP_FOLDER_PATH, {recursive: true, force: true});
}

module.exports = {
	TEMP_FOLDER_PATH,
	PROJECT_ROOT_PATH,
	SCRIPT_PATH,
	TEMP_SCRIPT_PATH,
	prepareTestEnvironment,
	cleanup,
	handleScan
}