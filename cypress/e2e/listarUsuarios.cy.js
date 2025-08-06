describe('Lista de usuários', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Acessar a lista de usuários pelo link "Visualizar usuários" na tela de Login', () => {
    cy.get('[href="users.html"]').click()

    cy.contains('#usersTable', 'ID').should('be.visible')
  })

  it('Acessar a lista de usuários pela URL /users.html', () => {
    cy.visit('/users.html')

    cy.contains('#usersTable', 'ID').should('be.visible')
  })


})