import { faker } from '@faker-js/faker/locale/pt_BR'

Cypress.Commands.add('removerAcentos', (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
})

Cypress.Commands.add('cadastroComCredenciaisValidas', () => {
    const nome = faker.person.firstName()
    const sobrenome = faker.person.lastName()
    const nomeCompleto = `${nome} ${sobrenome}`
    const email = `${nome}.${sobrenome}@teste.com`


    cy.get('#nome').click().type(nomeCompleto)
    cy.get('#email').click().type(email)
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Cadastrar').click()

    cy.get('#registerMessage').should('have.text', 'Cadastro realizado com sucesso!')
})

