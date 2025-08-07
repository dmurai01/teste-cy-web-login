describe("Cadastro e alteração de senha", () => {
  beforeEach(() => {
    cy.writeFile("cypress/fixtures/credenciaisdinamicas.json", {});
    cy.visit("/");
    cy.cadastroComCredenciaisValidasDinamico();
    cy.loginComCredenciaisDinamico();
  });

  let novoNome = "Teste alteração de senha Atualizado";
  let novaSenha = "123456789@";

  it("Cadastro e alteração de senha com usuário dinâmico", () => {
    cy.atualizarSenhaDinamico(novoNome, novaSenha);

    cy.contains("Cadastro atualizado com sucesso").should("be.visible");
    cy.get("a").contains("Voltar ao Login").click();

    cy.loginComNovaSenha(novoNome, novaSenha);
  });
  it("Ao informar a senha atual incorreta não deve ser possível alterar", () => {
    cy.fixture("credenciaisdinamicas").then((credenciaisdinamicas) => {
      cy.get("#linkAlterarSenha").click();
      cy.get("#senhaAtual").type(credenciaisdinamicas.atualizarsenha.novaSenha);
      cy.get("#novoNome").clear().type(novoNome);
      cy.get(".btn").click();
      cy.contains("Senha atual incorreta.").should("be.visible");
    });
  });
  it("Ao não informar uma nova senha não deve ser possível alterar", () => {
    cy.fixture("credenciaisdinamicas").then((credenciaisdinamicas) => {
      cy.get("#linkAlterarSenha").click();
      cy.get("#senhaAtual").type(credenciaisdinamicas.atualizarsenha.senhaAtual);
      cy.get("#novoNome").clear().type(novoNome);
      cy.get(".btn").click();
      cy.contains("Nova senha é obrigatória").should("be.visible");
    }); // vai ter bug aqui, pois o campo nova senha não é obrigatório
  });
  it("Ao não informar nenhum campo não deve ser possível alterar", () => {
    cy.get("#linkAlterarSenha").click();
    cy.get("#senhaAtual").clear();
    cy.get("#novoNome").clear();
    cy.get(".btn").click();
    cy.get("#senhaAtual")
      .should("have.prop", "validationMessage")
      .and("eq", "Preencha este campo.");
  });
});
