describe('check image content', () => {
	let reportFile;
	before(async () => {
		reportFile = await cy.task('prepareEnv', {
			args: 'image alpine:3.14.1',
			outputFileName: 'image_test_alpine_e2e.html'
		})
	})
	after(() => {
		cy.task('cleanup')
	})
	it('test filter', () => {
		cy.visit(reportFile)
		cy.get('input').should('exist')
	})
	it('test content', () => {
		cy.visit(reportFile)
		cy.get('table').should('be.visible');
	})
	it('test click', () => {
		cy.visit(reportFile)
		cy.get('.filterable .links').first().click();
		cy.get('.filterable .links a.link').first().should('be.visible');
	})
})