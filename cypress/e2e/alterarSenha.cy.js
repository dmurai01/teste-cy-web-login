describe('Cadastro', () => {

    beforeEach(() => {
        cy.writeFile('cypress/fixtures/credenciais.json', {}) // limpa
        cy.visit('/')
        cy.cadastroComCredenciaisValidas()// espera o cadastro ser concluído
    });

    let novoNome = 'Teste alteração de senha Atualizado'
    let novaSenha = '123456789@'

    it('Cadastro e alteração de senha com usuário dinâmico', () => {
        cy.fixture('credenciais').then((credenciais) => {
            cy.visit('/')
            cy.get('#email').type(credenciais.email)
            cy.get('#password').type(credenciais.senha)
            cy.contains('button', 'Entrar').click()
            cy.contains(credenciais.email).should('be.visible')

            cy.get('#linkAlterarSenha').click()
            cy.get('#senhaAtual').type(credenciais.senha)
            cy.get('#novoNome').clear().type(novoNome)
            cy.get('#novaSenha').type(novaSenha)
            cy.get('.btn').click()
            cy.contains('Cadastro atualizado com sucesso').should('be.visible')
            cy.get('a').contains('Voltar ao Login').click()

            // Login com nova senha
            cy.get('#email').type(credenciais.email)
            cy.get('#password').type(novaSenha)
            cy.contains('button', 'Entrar').click()
            cy.contains(credenciais.email).should('be.visible')
            cy.contains(novoNome).should('be.visible')
        })
    })
    it('Ao informar a senha atual incorreta não deve ser possível alterar', () => {
        cy.fixture('credenciais').then((credenciais) => {
            cy.visit('/')
            cy.get('#email').type(credenciais.email)
            cy.get('#password').type(credenciais.novaSenha)
            cy.contains('button', 'Entrar').click()
            cy.contains(credenciais.email).should('be.visible')

            cy.get('#linkAlterarSenha').click()
            cy.get('#senhaAtual').type(credenciais.senha)
            cy.get('#novoNome').clear().type(novoNome)
            cy.get('.btn').click()
            cy.contains('Senha atual incorreta').should('be.visible')
        })
    })
    it('Ao não informar uma nova senha não deve ser possível alterar', () => {
        cy.fixture('credenciais').then((credenciais) => {
            cy.visit('/')
            cy.get('#email').type(credenciais.email)
            cy.get('#password').type(credenciais.novaSenha)
            cy.contains('button', 'Entrar').click()
            cy.contains(credenciais.email).should('be.visible')

            cy.get('#linkAlterarSenha').click()
            cy.get('#senhaAtual').type(credenciais.senha)
            cy.get('#novoNome').clear().type(novoNome)
            cy.get('.btn').click()
            cy.contains('Informe uma nova senha').should('be.visible')
        })
    })
    it('Ao não informar nenhum campo não deve ser possível alterar', () => {
        cy.fixture('credenciais').then((credenciais) => {
            cy.visit('/')
            cy.get('#email').type(credenciais.email)
            cy.get('#password').type(credenciais.novaSenha)
            cy.contains('button', 'Entrar').click()
            cy.contains(credenciais.email).should('be.visible')

            cy.get('#linkAlterarSenha').click()
            cy.get('#senhaAtual').clear()
            cy.get('#novoNome').clear()
            cy.get('.btn').click()
            cy.contains('Informe os valores obrigatórios').should('be.visible')
        })
    })
})
