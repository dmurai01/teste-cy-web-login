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
Cypress.Commands.add('loginComCredenciaisDinamico', () => {
    cy.readFile('cypress/fixtures/credenciaisdinamicas.json').then(credenciaisdinamicas => {
          cy.visit('/')
            cy.get('#email').type(credenciaisdinamicas.atualizarsenha.email)
            cy.get('#password').type(credenciaisdinamicas.atualizarsenha.senhaAtual)
            cy.contains('button', 'Entrar').click()
            cy.contains(credenciaisdinamicas.atualizarsenha.email).should('be.visible')
    })
})
Cypress.Commands.add('loginComNovaSenha', (novoNome, novaSenha) => {
    cy.readFile('cypress/fixtures/credenciaisdinamicas.json').then(credenciais => {
            cy.get('#email').type(credenciais.atualizarsenha.email)
            cy.get('#password').type(novaSenha)
            cy.contains('button', 'Entrar').click()
            cy.contains(credenciais.atualizarsenha.email).should('be.visible')
            cy.contains(novoNome).should('be.visible')
    })
})