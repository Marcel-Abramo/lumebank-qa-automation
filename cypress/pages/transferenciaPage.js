class TransferenciaPage {
    selectorsList() {
        const selectors = {    
            transferenciaMenu: "button:contains('Transferências')",
            destinoTransferencia: "button:contains('Para Outro Usuário')", 
            selectConta: ".border-brand-500:contains('Conta Corrente')",
            emailDestinatario: "[type='email']",
            valorTransferencia: "[type='number']", 
            confirmar: "[type='submit']",     
            extrato: "button:contains('Extrato')",
            valorDebitado: ".text-red-600",
            mensagemSucesso: ".text-green-700"
        };

        return selectors;
    }

    realizarTransferencia(email, valor) {
        cy.get(this.selectorsList().destinoTransferencia).click({force:true});
        cy.get(this.selectorsList().selectConta).click({force:true});
        cy.get(this.selectorsList().emailDestinatario).type(email);
        cy.get(this.selectorsList().valorTransferencia).type(valor);
        cy.get(this.selectorsList().confirmar).click({force:true}); 
    }

    validarTransferenciaComSucesso() {
        cy.get(this.selectorsList().mensagemSucesso).should('be.visible').and('contain', 'Transferência realizada com sucesso!');
        cy.contains('Saldo insuficiente.').should('not.exist');
    }   

    validarTransferenciaComSaldoInsuficiente() {
        cy.contains('Saldo insuficiente.').should('be.visible');
    }    
    
    acessarMenuTransferencias() {
        cy.get(this.selectorsList().transferenciaMenu).click({force:true});
    }

    obterSaldoAtual() {
        return cy.get('.border-brand-500 > .text-xs').invoke('text').then((textoSaldo) => {
            const saldo = parseFloat(
                textoSaldo.replace(/[^\d,]/g, '').replace(',', '.')
            );
            return saldo;
        });
    }
}
export default TransferenciaPage;