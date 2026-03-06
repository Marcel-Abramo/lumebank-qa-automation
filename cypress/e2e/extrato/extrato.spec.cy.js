import userData from "../../fixtures/user-data.json";
import LoginPage from "../../pages/loginPage";
import ExtratoPage from "../../pages/extratoPage";
import TransferenciaPage from "../../pages/transferenciaPage";

const transferenciaPage = new TransferenciaPage();
const extratoPage = new ExtratoPage();
const loginPage = new LoginPage();

    describe('Quando realizar uma transferência válida', () => {
        beforeEach(() => {
            cy.login(userData.userSuccess.username, userData.userSuccess.password);
            loginPage.validarLoginComSucesso();
            transferenciaPage.acessarMenuTransferencias();
            transferenciaPage.realizarTransferencia(userData.transferenciaSuccess.email, userData.transferenciaSuccess.valor);
        });

        it('CT-EXTRATO-01 - Extrato de transação realizada deve ser exibido', () => {
            extratoPage.validarTransferenciaNoExtrato(userData.transferenciaSuccess.valor);
        }) 
    })