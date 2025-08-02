describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[href="register.html"]').click()
    });

    it('Cadastro com credenciais válidas', () => {
        cy.cadastroComCredenciaisValidas()
    })

    it('Tentar cadastrar sem nome deve aparecer mensagem de erro e o foco ir para input de nome', () => {
        cy.cadastroComParametros('', 'teste@teste.com', '123456')
        cy.get('label[for="nome"]').should('have.class', 'active');
    });

    it('Tentar cadastrar sem email deve aparecer mensagem de erro e o foco ir para input de email', () => {
        cy.cadastroComParametros('Teste', '', '123456')
        cy.get('label[for="email"]').should('have.class', 'active');
    });

    it('Tentar cadastrar sem senha deve aparecer mensagem de erro e o foco ir para input de senha', () => {
        cy.cadastroComParametros('Teste', 'teste@teste.com', '')
        cy.get('label[for="senha"]').should('have.class', 'active');
    });

    it('Tentar cadastrar já existente deve aparecer a mensagem de erro "Email já cadastrado."', () => {
        cy.cadastroComCredenciaisValidas().then((email) => {
            cy.wait(2000)
            cy.get('[href="register.html"]').click()
            cy.cadastroComParametros('Teste', email, '123456')
            cy.get('#registerMessage').should('have.text', 'Email já cadastrado.')
        })
    });
});