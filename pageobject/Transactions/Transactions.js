
// Navigating to the Transaction menu
export function Transaction(){
    cy.xpath(`//div[@class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected css-1fhsqa2']`).click().wait(3000);
}