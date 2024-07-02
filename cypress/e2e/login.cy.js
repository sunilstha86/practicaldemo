//import { Searchpage } from "../../pageobject/AllUser/Search"
import * as Loginpage from "../../pageobject/Login/Loginobj"
import * as Searchpage from "../../pageobject/AllUser/Search"
import * as Logout from "../../pageobject/LogOut/Logout"
import * as ReportedPhotos from"../../pageobject/ReportedPhoto/ReportedPhoto"
import * as ReportedUser from"../../pageobject/ReportedUser/ReportedUser"
import * as Transaction from"../../pageobject/Transactions/Transactions"

describe("Wolo Automation ",()=>{
    beforeEach(()=>{
        const email =Cypress.env("useremail")
        const password=Cypress.env("userpassword")
       cy.session([email,password],()=>{
            Loginpage.visitUrl()
            Loginpage.login(email,password)
       })
        Loginpage.visitUrl()

        Loginpage.visitDashboard()

    })


    it("Searching user on the all user", () => {

        Searchpage.Searchtext()
    })

    // it("Next Module", () => {

    //     Searchpage.nextModule()
    // })

    it("Download csv file of User list",() =>{
        Searchpage.downloadUserlist()
        cy.readFile('cypress/downloads/wolo-users-5_31_2023.csv').should('contains', 'jasmeen')

    })
    it("Filtering User list as all",() =>{
        Searchpage.filteroption()
        Searchpage.filterall()

    })
    it("Filtering User list as premium",() =>{
        Searchpage.filteroption()
        Searchpage.filterpremium()

    })
    it("Filtering User list as free",() =>{
        Searchpage.filteroption()
        Searchpage.filterfree()
    })
    //report photo
    it("Navigating to the Reported photo",() =>{
        ReportedPhotos.ReportedPhoto()
    })

    it('Searching user with username on list on the reported photo', function () {
        ReportedPhotos.ReportedPhoto()
        ReportedPhotos.searchimage()   
    })

   
    it('Ignore reported photo', function () {
        ReportedPhotos.ReportedPhoto() 
        cy.contains('pending').then(($pendingText) => {
            if ($pendingText.length > 0) {
              // Perform actions for the pending state
              ReportedPhotos.warn();
              ReportedPhotos.ignore();
              ReportedPhotos.remove();
              // Add additional actions as needed
            } else {
              cy.contains('warning').then(($warningText) => {
                if ($warningText.length > 0) {
                  // Perform actions for the warning state
                  ReportedPhotos.ignore();
                  ReportedPhotos.remove();
                  // Add additional actions as needed
                } else {
                  cy.contains('remove').then(($removeText) => {
                    if ($removeText.length > 0) {
                      // Perform actions for the remove state
                      ReportedPhotos.recover();
                      // Add additional actions as needed
                    }
                  });
                }
              });
            }
          });
        })





    //Report user
    it("Navigating to the Reported user",() =>{
        ReportedUser.ReportedUser()
    })

    it("Reported user ignored",() =>{
        ReportedUser.ReportedUser()
        ReportedUser.dotmenu()
        ReportedUser.userignore()
        ReportedUser.confirm()
    })
    it("Reported user recovered",() =>{
        ReportedUser.ReportedUser()
        ReportedUser.dotmenu()
        ReportedUser.userrecover()
        ReportedUser.confirm()
    })
    it("Reported user suspended",() =>{
        ReportedUser.ReportedUser()
        ReportedUser.dotmenu()
        ReportedUser.usersuspend()
        ReportedUser.confirm()
    })
    it("Reported user warned",() =>{
        ReportedUser.ReportedUser()
        ReportedUser.dotmenu()
        ReportedUser.userwarn()
        ReportedUser.confirm()
    })






    it("Navigating to the Transaction",() =>{
        Transaction.Transaction()
    })
     
    
    //logout 
    it("System logout",() =>{
        Logout.Logout()
    })
})