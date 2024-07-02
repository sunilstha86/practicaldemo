import * as Signupflow from "../../pageobject/Signup/Signupflow"

describe("Signup Test with different credentials ",()=>{
    beforeEach(()=>{
            Signupflow.visitUrl()
            Signupflow.signupbutton()
            
    })
it('Demo sign up page with valid email, password and invalid confirm passsword', function () {
    Signupflow.email()
    Signupflow.name()
    Signupflow.password()
    Signupflow.cpassword1()
    Signupflow.signup()
    cy.get('[class="invalid-feedback"]');
})

it('Demo signup with registered email', function () {
    Signupflow.email1()
    Signupflow.name1()
    Signupflow.password1()
    Signupflow.cpassword1()
    Signupflow.signup()
    // cy.get('[class="alert alert-success"]');
    cy.get('[data-testid="alert-message"]');
    
})
it('Demo signup with valid password,confirm password, name and email', function () {
    Signupflow.email2()
    Signupflow.name1()
    Signupflow.password1()
    Signupflow.cpassword1()
    Signupflow.signup()
    cy.get('[data-testid="alert-message"]');
  
    
})
})