// clicking on the add note button.
export function addnote(){
    cy.get('[data-testid="add-new-note"]').click()
}


// this parts belongs to create the new note where it choose random from the given value
export function choosecategory(){
    const options = ['Home', 'Work','Personal'];
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    cy.get('[data-testid="note-category"]').select(randomChoice)
}

export function completed(){
cy.get('[data-testid="note-completed"]').click()
}


export function title(){

    cy.get('[data-testid="note-title"]').type("Hello tester")
    
    }


export function description(){

    cy.get('[data-testid="note-description"]').type("Hello this is for cypress automation")
        }
// this part belongs to editing the note

export function edit()
{
    cy.get(':nth-child(2) > [data-testid="note-card"] > .card-footer > div > [data-testid="note-edit"]').click()
}

export function editcategory(){
const options = ['Home', 'Work','Personal'];
const randomChoice = options[Math.floor(Math.random() * options.length)];
cy.get('[data-testid="note-category"]').select(randomChoice)
}
export function edittitle(){

    cy.get('[data-testid="note-title"]').type("Hello tester!!!!!!")
    
    }
    export function editdescription(){

        cy.get('[data-testid="note-description"]').type("Hello,this code is for cypress automation")
            }
            
export function save() {

cy.get('[data-testid="note-submit"]').click().wait(1000)
            
}
// this part is for deleting the note
export function Delete() {
cy.get(':nth-child(2) > [data-testid="note-card"] > .card-footer > div > [data-testid="note-delete"]').click()
cy.get('[data-testid="note-delete-confirm"]').click()
}


export function create() {

    cy.get('[data-testid="note-submit"]').click().wait(1000)

}

