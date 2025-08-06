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