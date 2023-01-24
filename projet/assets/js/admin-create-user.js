  import { Book } from './classes/Book.js';
  import { Users } from './classes/Users.js';
    import { BookManager } from './classes/BookManager.js';
        import { UserManager } from './classes/UserManager.js';
 
 
 
  window.addEventListener('DOMContentLoaded', (event) => {
let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")

 let truc = new UserManager()
truc.load()
// console.log(truc)

    
    
    
    form2.addEventListener('submit', (event) => {
      
           event.preventDefault()
           
  let username= document.getElementById("unserIns").value
  let email= document.getElementById("emailIns").value
  let password1= document.getElementById("passIns1").value
  let password2= document.getElementById("passIns2").value
  let firstName= document.getElementById("firstNameIns").value
  let secondName= document.getElementById("secondNameIns").value
  let profil= document.getElementById("profilIns").value

    
      // console.log(username)
      // console.log(email)
      // console.log(password1)
      // console.log(password2)
      // console.log(firstName)
      // console.log(secondName)
      // console.log(profil)
    let id = truc.users.length
    
    
   let userrrr = new Users(id, username,email,password1,firstName,secondName,profil)
  // console.log(userrrr)
  
      truc.createUser(userrrr)
      
      truc.save()
   
      // console.log(truc)
    });
    
  });