describe('check fa content', () => {
	let reportFile;
	before(async () => {
		reportFile = await cy.task('prepareEnv', {
			args: `fs .`,
			outputFileName: 'fs_test_e2e.html'
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
		cy.get('input').should('be.visible');
	})
	it('test click', () => {
		cy.visit(reportFile)
		cy.get('.filterable .links').first().click();
		cy.get('.filterable .links a.link').first().should('be.visible');
	})
	it('test secret exists', () => {
		cy.visit(reportFile)
		cy.get('.secret-results').first().should('exist');
	})
	it('test secret cause exist everywhere', () => {
		cy.visit(reportFile)
		cy.get('.secret-results').each((it) => {
			cy.wrap(it)
				.find('.secret__line-cause')
				.should('exist')
		})
	})
	it('test secret has title everywhere', () => {
		cy.visit(reportFile)
		cy.get('.secret-results').each((it) => {
			cy.wrap(it)
				.find('.secret-results__title')
				.should('exist')
		})
	})
	it('test secret has head everywhere', () => {
		cy.visit(reportFile)
		cy.get('.secret-results').each((it) => {
			cy.wrap(it)
				.find('.secret__head')
				.should('exist')
		})
	})
	it('test secret has title block everywhere', () => {
		cy.visit(reportFile)
		cy.get('.secret-results').each((it) => {
			cy.wrap(it)
				.find('.secret__title')
				.should('exist')
		})
	})
	it('test secret has source everywhere', () => {
		cy.visit(reportFile)
		cy.get('.secret-results').each((it) => {
			cy.wrap(it)
				.find('.secret__src')
				.should('exist')
		})
	})
})