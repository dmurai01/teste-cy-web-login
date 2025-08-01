Cypress.Commands.add('acessarPaginaCadastro', () => {
    cy.visit('/')
    cy.get('[href="register.html"]').click()
})

