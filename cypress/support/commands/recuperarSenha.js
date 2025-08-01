Cypress.Commands.add('recuperarSenha', (email) => {
    if (email != '') {
        cy.get('#email').click().clear().type(email)
    } else {
        cy.get('#email').click().clear()
    }
    cy.contains('button', 'Recuperar').click()
})
