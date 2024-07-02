function getUrl() {
    return Cypress.env("url");

}

export function visitUrl() {
    cy.visit(getUrl());
}
// this click the signup button
export function signupbutton(){
    cy.get('[class="btn btn-outline-secondary btn-lg px-4"]').click()
}
//enter the email for registeration
export function email() {
    cy.get('[data-testid="register-email"]').type('jack12@yopmail.com')
}
export function email1() {
    cy.get('[data-testid="register-email"]').type('jack12@yopmail.com')
    
}
export function email2() {
    cy.get('[data-testid="register-email"]').type('jackd1@yopmail.com')

}


export function password() {

    cy.get('[data-testid="register-password"]').type('helloworld')
}
export function password1() {

    cy.get('[data-testid="register-password"]').type('hellossworld')


}
export function cpassword() {

    cy.get('[data-testid="register-confirm-password"]').type('helloworld')

}
export function cpassword1() {

    cy.get('[data-testid="register-confirm-password"]').type('hellossworld')

}
export function name()
{
    cy.get('[data-testid="register-name"]').type('sunilstha')
}
export function name1()
{
    cy.get('[data-testid="register-name"]').type('sunil')
}

export function signup() {
    cy.get('[data-testid="register-submit"]').click().wait(1000);

}

