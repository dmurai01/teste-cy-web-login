import { faker } from '@faker-js/faker/locale/pt_BR'

Cypress.Commands.add('removerAcentos', (texto) => {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
})

Cypress.Commands.add('cadastroComCredenciaisValidas', () => {
    const nome = faker.person.firstName()
    const sobrenome = faker.person.lastName()
    const nomeCompleto = `${nome} ${sobrenome}`
    const nomeSemAcento = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const sobrenomeSemAcento = sobrenome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const email = `${nomeSemAcento}.${sobrenomeSemAcento}@teste.com`


    cy.get('#nome').click().type(nomeCompleto)
    cy.get('#email').click().type(email)
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Cadastrar').click()

    cy.get('#registerMessage').should('have.text', 'Cadastro realizado com sucesso!')
    return cy.wrap(email)
})

Cypress.Commands.add('cadastroComParametros', (nome, email, senha) => {
    if (nome != '') {
        cy.get('#nome').click().type(nome)
    } else {
        cy.get('#nome').click()
    }
    if (email != '') {
        cy.get('#email').click().type(email)
    } else {
        cy.get('#email').click()
    }
    if (senha != '') {
        cy.get('#senha').click().type(senha)
    } else {
        cy.get('#senha').click()
    }
    cy.contains('button', 'Cadastrar').click()
})

