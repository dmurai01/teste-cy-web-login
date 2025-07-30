Cypress.Commands.add('loginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#email').click().type(credenciais.valida.email)
        cy.get('#password').click().type(credenciais.valida.senha)
    })

    cy.contains('button', 'Entrar').click()
})