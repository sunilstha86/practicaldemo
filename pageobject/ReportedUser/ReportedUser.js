
// Navigating to the reported user menu
export function ReportedUser(){
    cy.xpath(`//body/div[@id='root']/div[@class='MuiBox-root css-k008qs']/div[@class='MuiDrawer-root MuiDrawer-docked css-1h33pjc']/div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-1l8j5k8']/ul[@class='MuiList-root MuiList-padding css-1ontqvh']/li[3]/div[1]`).click().wait(3000);
}
export function searchreporteduser() {
    cy.xpath(`//input[@placeholder='Search by email, username']`).type("sunil")
    cy.contains('sunil');  
    cy.wait(3000);

}
export function dotmenu() {
  //  cy.get('.MuiList-root > .MuiButtonBase-root').click().wait(2000)
    
    cy.xpath(`//body[1]/div[1]/div[1]/main[1]/div[3]/table[1]/tbody[1]/tr[5]/td[7]/div[1]/button[1]`).click().wait(2000)

}
export function userrecover() {
    cy.xpath(`//li[@role='menuitem']`).click().wait(2000)

}
export function userignore() {
    cy.xpath(`//li[normalize-space()='Ignore Report']`).click().wait(2000)

}
export function userwarn() {
    cy.xpath(`//li[normalize-space()='Warn User']`).click().wait(2000)
}
export function usersuspend() {
    cy.xpath(`//li[normalize-space()='Suspend User']`).click().wait(2000)
        .click().wait(3000);
}

export function confirm()
{
cy.xpath(`//button[normalize-space()='Confirm']`).click().wait(2000)
}