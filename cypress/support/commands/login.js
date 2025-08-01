Cypress.Commands.add('loginRecebendoParametros', (email, senha) => {
    if (email != '') {
        cy.get('#email').click().clear().type(email)
    } else {
        cy.get('#email').click().clear()
    }
    if (senha != '') {
        cy.get('#password').click().clear().type(senha)
    } else {
        cy.get('#password').click().clear()
    }
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginComCredenciaisValidas', () => {
    cy.acessarPaginaCadastro()
    cy.cadastroComCredenciaisValidas().then((email) => {
        cy.wait(2000)
        cy.get('#email').click().clear().type(email)
        cy.get('#password').click().clear().type('123456')
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