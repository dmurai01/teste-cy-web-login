Cypress.Commands.add('recuperarSenha', (email) => {
    if (email != '') {
        cy.get('#email').click().clear().type(email)
    } else {
        cy.get('#email').click().clear()
    }
    cy.contains('button', 'Recuperar').click()
})

Cypress.Commands.add('recuperarSenhaSucesso', () => {
    cy.acessarPaginaCadastro()
    cy.cadastroComCredenciaisValidas().then((email) => {
        cy.wait(2000)
        cy.get('[href="recover.html"]').click()
        cy.recuperarSenha(email)
    })
})