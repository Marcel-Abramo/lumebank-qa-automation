import userData from "../../fixtures/user-data.json";
import LoginPage from "../../pages/loginPage";

const loginPage = new LoginPage();

  describe('Quando logar com credenciais válidas', () => {

    it('CT-LOGIN-001 - Login deve ser realizado com sucesso', () => {
      loginPage.visitarPaginaLogin();
      loginPage.realizarLogin(userData.userSuccess.username, userData.userSuccess.password);
      loginPage.validarLoginComSucesso();
    })
  })

  describe('Quando logar com credenciais inválidas', () => {

    it('CT-LOGIN-002 - Login deve falhar', () => {
      loginPage.visitarPaginaLogin();
      loginPage.realizarLogin(userData.userFail.username, userData.userFail.password);
      loginPage.validarFalhaNoLogin();
    })
  })
