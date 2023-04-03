const {defineConfig} = require("cypress");
const {prepareTestEnvironment, cleanup} = require("./test/common");
const path = require("path");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on) {
			on('task', {
				prepareEnv(reportParams) {
					const preparingPromise = prepareTestEnvironment(reportParams)();
					return preparingPromise.then(() => {
						return path.join('test', 'temp', reportParams.outputFileName);
					})
				},
				cleanup() {
					cleanup();
					return null;
				},
			})
		},
		downloadsFolder: 'test/cypress/downloads',
		screenshotsFolder: 'test/cypress/screenshots',
		specPattern: 'test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'test/cypress/support/e2e.{js,jsx,ts,tsx}',
		videosFolder: 'test/cypress/videos',
	},
});
