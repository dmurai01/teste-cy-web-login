describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Login com credenciais válidas deve ir para área de Boas Vindas', () => {
    cy.loginComCredenciaisValidas()

    cy.contains('h1', 'Bem-vindo!').should('be.visible')
  })
})