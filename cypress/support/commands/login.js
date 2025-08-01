Cypress.Commands.add('loginRecebendoParametros', (email, senha) => {
    cy.get('#email').click().clear().type(email)
    cy.get('#password').click().clear().type(senha)

    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#email').click().clear().type(credenciais.valida.email)
        cy.get('#password').click().clear().type(credenciais.valida.senha)
    })

    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#email').click().clear().type(credenciais.invalida.email)
        cy.get('#password').click().clear().type(credenciais.invalida.senha)
    })

    cy.contains('button', 'Entrar').click()
})