describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it.only('Cadastro com credenciais válidas', () => {
        cy.get('[href="register.html"]').click()

        cy.cadastroComCredenciaisValidas()


        //cy.contains('h1', 'Bem-vindo!').should('be.visible')
    })
});