

//searching the user sunil shrestha
export function Searchtext(){
    //cy.visit("https://dev-admin.woloport.tech/dashboard")
    cy.xpath(`//input[@id=':r0:']`).type("sunil")
}

// Navigating to the next module
export function nextModule(){
    cy.xpath(`(//div[@role='button'])[2]`).click().wait(2000);
}
//Downloading the csv file 
export function downloadUserlist()
{
    cy.get(`.css-f2hq0u > .MuiButtonBase-root`).click().wait(2000);
}
//Clicking on the filter options
export function filteroption()
{
cy.xpath(`//div[@id='demo-simple-select']`).click().wait(2000);
}

//Clicking on the filter all option
export function filterall()
{
    cy.get(`[data-value="all"]`).click().wait(2000);
}
//Clicking on the filter premium option
export function filterpremium()
{
    cy.get(`[data-value="premium"`).click().wait(2000);
}

//Clicking on the filter free option
export function filterfree()
{
    cy.get(`[data-value="free"]`).click().wait(2000);
}