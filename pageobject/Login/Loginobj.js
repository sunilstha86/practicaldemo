function getUrl() {
    return Cypress.env("url");
 
}

export function visitUrl(){
cy.visit(getUrl());
}

export function login(email,password){
cy.get('[data-testid="login-email-input"]').type(email)
cy.get('[data-testid="login-password-input"]').type(password)
cy.get('.MuiButtonBase-root').click().wait(2000);

}

export function getDashboardUrl(){
    return Cypress.env("dashboard")
}

export function visitDashboard(){
    cy.visit(getDashboardUrl())
}