describe('Atualizar Senha', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.acessarPaginaCadastro()
    });

    it('Atualizar senha com novo usuário e enviar credenciais corretas deve receber mensagem de sucesso', () => {
        cy.atualizarSenha('123456', '', '654321')
        cy.get('#updatePasswordMessage').should('have.text', 'Cadastro atualizado com sucesso.')
    });

    it('Atualizar senha com novo usuário e enviar senha atual incorreta deve receber mensagem de erro', () => {
        cy.atualizarSenha('654321', '', '654321')
        cy.get('#updatePasswordMessage').should('have.text', 'Senha atual incorreta.')
    });

    it('Atualizar nome com novo usuário enviando senha atual correta deve receber mensagem de sucesso e visualizar a alteração na tela de Boas-Vindas', () => {
        cy.atualizarSenha('123456', 'Nome Alterado', '12345678')
        cy.get('#updatePasswordMessage').should('have.text', 'Cadastro atualizado com sucesso.')
        cy.wait(1000)
        cy.get('[href="users.html"]').click()
        cy.get('#userInfo').should('contain', 'Nome Alterado')
    });

    // it.only('Atualizar senha com usuário que recuperou uma senha e enviar credenciais corretas deve receber mensagem de sucesso', () => {
    //     cy.acessarPaginaCadastro()
    //     cy.cadastroComCredenciaisValidas().then((email) => {
    //         cy.wait(2000)
    //         for (let i = 0; i < 3; i++) {
    //             cy.loginRecebendoParametros(email, 'errado')
    //         }
    //         cy.get('[href="recover.html"]').click()
    //         cy.recuperarSenha(email).then((novaSenha) => {
    //             cy.log(novaSenha)
    //             cy.visit('/')
    //             cy.loginRecebendoParametros(email, novaSenha)
    //             // Adicione asserções aqui, se necessário
    //         })
    //     })
    // });


});