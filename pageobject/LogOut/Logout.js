
// Logging off from the system
export function Logout(){
    cy.get('[data-testid="logout"]').click().wait(3000);
}