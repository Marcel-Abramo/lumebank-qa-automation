import userData from "../../fixtures/user-data.json";
import LoginPage from "../../pages/loginPage";
import TransferenciaPage from "../../pages/transferenciaPage";

const transferenciaPage = new TransferenciaPage();
const loginPage = new LoginPage();

    describe('Quando realizar transferência com saldo suficiente', () => {
        beforeEach(() => {
            cy.login(userData.userSuccess.username, userData.userSuccess.password);
            loginPage.validarLoginComSucesso();
        });
        
        it('CT-TRANSF-01 - Transferência realizada com sucesso', () => {
            transferenciaPage.acessarMenuTransferencias();

            let saldoInicial;

            transferenciaPage.obterSaldoAtual().then((saldo) => {
                saldoInicial = saldo;
            });

            transferenciaPage.realizarTransferencia(userData.transferenciaSuccess.email,userData.transferenciaSuccess.valor);
            transferenciaPage.validarTransferenciaComSucesso();

            transferenciaPage.obterSaldoAtual().then((saldoFinal) => {
                expect(saldoFinal).to.be.lessThan(saldoInicial);
            });
        }) 
    })

    describe('Quando realizar transferência com saldo insuficiente', () => {
        beforeEach(() => {
            cy.login(userData.userSuccess.username, userData.userSuccess.password);
            loginPage.validarLoginComSucesso();
        });

        it('CT-TRANSF-02 - Transferência não realizada', () => {
            transferenciaPage.acessarMenuTransferencias();
            transferenciaPage.realizarTransferencia(userData.transferenciaFail.email, userData.transferenciaFail.valor);
            transferenciaPage.validarTransferenciaComSaldoInsuficiente();
        }) 
    })