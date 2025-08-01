describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Login com credenciais válidas deve ir para área de Boas Vindas', () => {
    cy.loginComCredenciaisValidas()
    cy.contains('h2', 'Seus dados').should('be.visible')
  })

  it('Tentativa de login sem preencher email deve aparecer mensagem de erro e o foco ir para o input de email', () => {
    cy.loginRecebendoParametros('', '123456')
    cy.get('label[for="email"]').should('have.class', 'active');
  })

  it('Tentativa de login sem preencher senha deve aparecer mensagem de erro e o foco ir para o input de senha', () => {
    cy.loginRecebendoParametros('teste@teste.com', '')
    cy.get('label[for="password"]').should('have.class', 'active');
  })

  it('Login com credenciais inválidas deve retornar mensagem de erro', () => {
    cy.loginComCredenciaisInvalidas()
    cy.contains('#loginMessage', 'Credenciais inválidas.').should('be.visible')
  });

  it('Realizar 3 tentativas de login com senha incorreta, bloqueia usuário', () => {
    cy.get('[href="register.html"]').click()
    cy.cadastroComCredenciaisValidas().then((email) => {
      cy.wait(2000)
      for (let i = 0; i < 3; i++) {
        cy.loginRecebendoParametros(email, 'errado')
      }
      cy.loginRecebendoParametros(email, '123456')

    })
    cy.contains('#loginMessage', 'Usuário bloqueado por excesso de tentativas inválidas.').should('be.visible')

  });
})