class ExtratoPage {
    selectorsList() {
        const selectors = {    
            extrato: "button:contains('Extrato')",
        };

        return selectors;
    }

    validarTransferenciaNoExtrato(valor) {
        cy.get(this.selectorsList().extrato).click({force:true});
        cy.contains('Transferência de Corrente para Alice Silva').should('be.visible');
        cy.contains(valor).should('be.visible');
    }    
}
export default ExtratoPage;