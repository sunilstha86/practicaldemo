function getUrl() {
    return Cypress.env("url");

}

export function visitUrl() {
    cy.visit(getUrl());
}
export function buttonlogin(){
    cy.get('[class="btn btn-primary btn-lg px-4 me-md-2"]').click().wait(1000)
}
export function email() {
    cy.get('[data-testid="login-email"]').type('jack12@yopmail.com')

}
export function email1() {
    cy.get('[data-testid="login-email"]').type('jack112s@yopmail.com')

}
export function email2() {
    cy.get('[data-testid="login-email"]').type('jack11as@yopmail.com')

}
export function email3() {
    cy.get('[data-testid="login-email"]').type('jack12@yopmail.com')

}
export function password() {

    cy.get('[data-testid="login-password"]').type('hellossworld')


}
export function password1() {

    cy.get('[data-testid="login-password"]').type('hessloworld')


}
export function password2() {

    cy.get('[data-testid="login-password"]').type('helloworld')


}
export function password3() {

    cy.get('[data-testid="login-password"]').type('helloworld')


}

export function signin() {
    cy.get('[data-testid="login-submit"]').click(0).wait(1000);

}

