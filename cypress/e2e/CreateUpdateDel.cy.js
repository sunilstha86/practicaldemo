import * as LoginTest from "../../pageobject/Login/LoginTest"
import * as CreateUpdDelete from"../../pageobject/CreateUpdDelete/Createupdatedelete"
import * as Logout from "../../pageobject/LogOut/Logout"
describe("Creating the notes, Editing the notes and Deleting the notes ",()=>{
    beforeEach(()=>{
            LoginTest.visitUrl()
            LoginTest.buttonlogin()
            LoginTest.email3()
            LoginTest.password3()
            LoginTest.signin()
            
    })

    //creating the note
    it('Creating a new note', function () {
        CreateUpdDelete.addnote()
        CreateUpdDelete.choosecategory()
        CreateUpdDelete.completed()
        CreateUpdDelete.title()
        CreateUpdDelete.description()
        CreateUpdDelete.create()
    })
//Editing the note

    it('Editing a note ',function(){
        CreateUpdDelete.edit()
        CreateUpdDelete.editcategory()
        CreateUpdDelete.edittitle()
        CreateUpdDelete.editdescription()
        CreateUpdDelete.save()
})
//Deleting the note
it('Deleting a note ',function(){
    CreateUpdDelete.Delete()

})

it('Logout from system ',function(){
    Logout.Logout()

})

})