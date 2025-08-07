Cypress.Commands.add('atualizarSenha', (senhaAtual, novoNome, novaSenha) => {
    cy.cadastroComCredenciaisValidas().then((email) => {
        cy.wait(2000)
        cy.loginRecebendoParametros(email, '123456')

        cy.get('#linkAlterarSenha').click()
        cy.get('#senhaAtual').click().clear().type(senhaAtual)
        if (novoNome != "") {
            cy.get('#novoNome').click().clear().type(novoNome)
        } else {
            cy.get('#novoNome').click()
        }
        if (novaSenha != '') {
            cy.get('#novaSenha').click().clear().type(novaSenha)
        } else {
            cy.get('#novaSenha').click().clear()
        }
        cy.contains('button', 'Alterar Senha').click()
    })
})

Cypress.Commands.add('atualizarSenhaSemNovoCadastro', (senhaAtual, novoNome, novaSenha) => {
    cy.get('#senhaAtual').click().clear().type(senhaAtual)
    if (novoNome != "") {
        cy.get('#novoNome').click().clear().type(novoNome)
    } else {
        cy.get('#novoNome').click()
    }
    if (novaSenha != '') {
        cy.get('#novaSenha').click().clear().type(novaSenha)
    } else {
        cy.get('#novaSenha').click().clear()
    }
    cy.contains('button', 'Alterar Senha').click()
})
Cypress.Commands.add('atualizarSenhaDinamico', (novoNome, novaSenha) => {
    
    cy.fixture('credenciaisdinamicas').then((credenciaisdinamicas) => {
        cy.get('#linkAlterarSenha').click()
            cy.get('#senhaAtual').type(credenciaisdinamicas.atualizarsenha.senhaAtual)
            cy.get('#novoNome').clear().type(novoNome)
            cy.get('#novaSenha').type(novaSenha)
            cy.get('.btn').click()
    })
})