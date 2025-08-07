# TESTE-CY-WEB-LOGIN

## Objetivo
Este projeto demonstra como automatizar testes de aplicações web utilizando [Cypress](https://www.cypress.io/) com JavaScript. O objetivo é validar os principais fluxos da aplicação WEB-LOGIN, garantindo a qualidade e o correto funcionamento das funcionalidades de cadastro, login, recuperação e atualização de senha, além da listagem de usuários.

## Componentes do Projeto
- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Organização dos comandos reutilizáveis para facilitar a escrita e manutenção dos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados dos testes em formato HTML.
- **Faker**: Geração de dados aleatórios para os testes.

## Pré-requisitos
- Node.js instalado
- Clonar e executar as aplicações:
  - [API-LOGIN](https://github.com/dmurai01/api-login) rodando em `localhost:3000`
  - [WEB-LOGIN](https://github.com/dmurai01/web-login) rodando em `localhost:4000`

## Instalação
1. Clone este repositório:
   ```sh
   git clone https://github.com/dmurai01/teste-cy-web-login.git
   cd teste-cy-web-login
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução dos Testes
1. Certifique-se de que a API e a aplicação web estejam rodando nas portas corretas.
2. Execute o Cypress em modo interativo:
   ```sh
   npx cypress open
   ```
   Ou execute em modo headless (com geração de relatório):
   ```sh
   npx cypress run
   ```

3. Após a execução, o relatório estará disponível em `cypress/reports/html/index.html`.

## Estrutura dos Testes
Os testes estão organizados na pasta [`cypress/e2e`](cypress/e2e):

- [`cadastro.cy.js`](cypress/e2e/cadastro.cy.js): Testes de cadastro de usuário.
- [`login.cy.js`](cypress/e2e/login.cy.js): Testes de login, bloqueio e autenticação.
- [`recuperarSenha.cy.js`](cypress/e2e/recuperarSenha.cy.js): Testes de recuperação de senha.
- [`atualizarSenha.cy.js`](cypress/e2e/atualizarSenha.cy.js): Testes de atualização de senha e nome.
- [`listarUsuarios.cy.js`](cypress/e2e/listarUsuarios.cy.js): Testes de listagem de usuários.

## Custom Commands
Os comandos customizados estão organizados em [`cypress/support/commands`](cypress/support/commands):

- [`common.js`](cypress/support/commands/common.js):  
  - `cy.acessarPaginaCadastro()`: Navega para a página de cadastro.

- [`cadastro.js`](cypress/support/commands/cadastro.js):  
  - `cy.cadastroComCredenciaisValidas()`: Realiza cadastro com dados válidos e retorna o email.
  - `cy.cadastroComParametros(nome, email, senha)`: Realiza cadastro com parâmetros customizados.
  - `cy.removerAcentos(texto)`: Remove acentos de um texto.

- [`login.js`](cypress/support/commands/login.js):  
  - `cy.loginRecebendoParametros(email, senha)`: Realiza login com email e senha informados.
  - `cy.loginComCredenciaisValidas()`: Realiza login com credenciais válidas.
  - `cy.loginComCredenciaisInvalidas()`: Realiza login com credenciais inválidas.

- [`recuperarSenha.js`](cypress/support/commands/recuperarSenha.js):  
  - `cy.recuperarSenha(email)`: Realiza o fluxo de recuperação de senha.
  - `cy.recuperarSenhaSucesso()`: Realiza recuperação de senha para um usuário válido.

- [`atualizarSenha.js`](cypress/support/commands/atualizarSenha.js):  
  - `cy.atualizarSenha(senhaAtual, novoNome, novaSenha)`: Atualiza senha e/ou nome de usuário recém-cadastrado.
  - `cy.atualizarSenhaSemNovoCadastro(senhaAtual, novoNome, novaSenha)`: Atualiza senha/nome sem novo cadastro.

## Relatórios
Os relatórios de execução dos testes são gerados automaticamente em [`cypress/reports/html/index.html`](cypress/reports/html/index.html) utilizando o cypress-mochawesome-reporter.

---

M2.0 - Grupo 11 - Anderson Wagner, Daniela Murai