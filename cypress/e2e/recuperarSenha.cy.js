describe('Recuperar Senha', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[href="recover.html"]').click()
    });

    it('Recuperar Senha ao enviar email existente deve receber a mensagem de sucesso "Senha redefinida com sucesso."', () => {
        cy.recuperarSenhaSucesso()
        cy.contains('#recoverMessage', 'Senha redefinida com sucesso.').should('be.visible')
    });

    it('Recuperar Senha ao enviar email não existente deve receber a mensagem de erro "Usuário não encontrado."', () => {
        cy.recuperarSenha('dd@dd.com')
        cy.contains('#recoverMessage', 'Usuário não encontrado.').should('be.visible')
    });

    it('Recuperar Senha sem preencher email deve aparecer mensagem de erro e o foco ir para o input de email', () => {
        cy.recuperarSenha('')
        cy.get('label[for="email"]').should('have.class', 'active');
    })
});