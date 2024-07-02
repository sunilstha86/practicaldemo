
// Navigating to the reported photo menu
export function ReportedPhoto() {
    cy.get(':nth-child(3) > :nth-child(2) > .MuiButtonBase-root').click().wait(3000)
   // cy.xpath(`//body/div[@id='root']/div[@class='MuiBox-root css-k008qs']/div[@class='MuiDrawer-root MuiDrawer-docked css-1h33pjc']/div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-1l8j5k8']/ul[@class='MuiList-root MuiList-padding css-1ontqvh']/li[3]/div[1]`).click().wait(3000);
}

export function searchimage() {
    cy.xpath(`//input[@placeholder='Search by email, username']`).type("sunil")
    cy.contains('sunil');  
    cy.wait(3000);
}
export function ignore() {
    cy.xpath(`//body/div[@id='root']/div/main/ul/div[1]/div[1]/button[1]`)
    .click().wait(3000);
}
export function warn() {
    cy.xpath(`//body/div[@id='root']/div[@class='MuiBox-root css-k008qs']/main[@class='MuiBox-root css-zxdg2z']/ul[@class='MuiImageList-root MuiImageList-standard css-66ew7n']/div[1]/div[1]/button[1]`)
    .click().wait(3000);
}
export function remove() {
    cy.xpath(`//body/div[@id='root']/div[@class='MuiBox-root css-k008qs']/main[@class='MuiBox-root css-zxdg2z']/ul[@class='MuiImageList-root MuiImageList-standard css-66ew7n']/div[1]/div[1]/button[1]`)
        .click().wait(3000);
}
export function recover() {
    cy.get(':nth-child(11) > .MuiBox-root > .MuiButtonBase-root')
        .click().wait(3000);
}

//cy.get(':nth-child(11) > .MuiBox-root > .MuiButtonBase-root')
export function confirm()
{
cy.xpath(`//button[normalize-space()='Confirm']`).click().wait(2000)
}