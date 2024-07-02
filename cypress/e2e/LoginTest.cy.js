import * as LoginTest from "../../pageobject/Login/LoginTest"

describe("Login Test with different credentials ",()=>{
    beforeEach(()=>{
            LoginTest.visitUrl()
            LoginTest.buttonlogin()
            
    })
it('Demo Loginpage with valid email and invalid password', function () {
    LoginTest.email()
    LoginTest.password()
    LoginTest.signin()
    cy.get('[data-testid="alert-message"]');
})

it('Demo Loginpage with invalid password and invalid email', function () {
    LoginTest.email1()
    LoginTest.password1()
    LoginTest.signin()
    cy.get('[data-testid="alert-message"]');
    
})
it('Demo Loginpage with invalid email and valid password', function () {
    LoginTest.email2()
    LoginTest.password2()
    LoginTest.signin()
    cy.get('[data-testid="alert-message"]');
    
})
it('Demo Loginpage with valid credential', function () {
    LoginTest.email3()
    LoginTest.password3()
    LoginTest.signin()
    //cy.contains('[data-testid="home"]');
    cy.get('[data-testid="profile"]');
   
})
})