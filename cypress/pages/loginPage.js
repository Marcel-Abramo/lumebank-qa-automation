class LoginPage {
    selectorsList() {
        const selectors = {    
            emailField: "[type='email']",
            senhaField: "[type='password']",
            entrarButton1: "button:contains('Entrar')",
            entrarButton2: "[type='submit']",
            checkLogin: "button:contains('Dashboard')",
            checkLogin2: "button:contains('Sair')",  
        };

        return selectors;
    }

    visitarPaginaLogin() {
        cy.visit("https://lumebank-414408088991.us-west1.run.app/");
    }

    realizarLogin(username, password) {
        cy.get(this.selectorsList().emailField).type(username);
        cy.get(this.selectorsList().senhaField).type(password);
        cy.get(this.selectorsList().entrarButton2).click({force:true});
    }

    validarLoginComSucesso() {
        cy.get(this.selectorsList().checkLogin).should('have.text', "Dashboard");
        cy.get(this.selectorsList().checkLogin2).should('have.text', "Sair");
        cy.contains('LumeBank').should('be.visible');
        cy.contains('Dashboard').should('be.visible');
    }

    validarFalhaNoLogin() {
        cy.contains('Credenciais inválidas.').should('be.visible');
        cy.contains('Dashboard').should('not.exist');
        cy.get('body').should('not.contain', 'Dashboard');
    }
}
export default LoginPage;