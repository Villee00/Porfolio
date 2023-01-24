describe('Should show default information', () => {
    beforeEach(() => {
        cy.intercept('https://api.github.com/users/Villee00/repos?sort=created&accept=application/vnd.github.v3+json', {
            fixture: 'github_data.json'
        })
        cy.visit('/')

    })
    it('Skills tag', () => {
        cy.get('#Skills').should('exist')
        cy.get('[data-testid="SkillsContainer"]').children().should('have.length', 5)
    })

    it('Should show recent projects with correct links', () => {
        cy.get('[data-testid="recentProjects"]').should('be.visible')
        cy.get('[data-testid="recentProjectCard"]').should('have.length', 2)
        cy.get('[data-testid="recentProjectCard"]').eq(0).contains('Portfolio')
    })

    it('Should show contacts with correct links', () => {
        cy.get('[data-testid="contactBox"]').should('have.length', 2)
        cy.get('[data-testid="footer"] > [data-testid="contactBox"]').children().should('have.length', 2).and('have.attr', 'href')
        cy.get('[data-testid="home"] > [data-testid="contactBox"]').children().should('have.length', 2).and('have.attr', 'href')
    })
})