  import { Book } from './classes/Book.js';
  import { Users } from './classes/Users.js';
    import { BookManager } from './classes/BookManager.js';
        import { UserManager } from './classes/UserManager.js';
 
 
 
  window.addEventListener('DOMContentLoaded', (event) => {

let form2 = document.getElementById("form2")

 let truc = new UserManager()
 
truc.load()
// console.log(truc)
 let idBalise= document.getElementById("idIns")
    
    idBalise.addEventListener('keydown',function(event){
        
      
        
        setTimeout(function(){
      let id= document.getElementById("idIns").value
  let username= document.getElementById("unserIns")
  let email= document.getElementById("emailIns")
  

  let firstName= document.getElementById("firstNameIns")
  let secondName= document.getElementById("secondNameIns")
  let profil= document.getElementById("profilIns")
  
  
  console.log(truc.users[id])
  console.log(email)
  if(id === ""){
    
     username.value=""
  email.value=""
 
  firstName.value=""
  secondName.value= ""
  profil.value= ""
    
}else{
      username.value=truc.users[id].username
  email.value=truc.users[id].email
 
  firstName.value= truc.users[id].firstName
  secondName.value= truc.users[id].lastName
  profil.value= truc.users[id].profileImage
  console.log(id)

    
}


}, 10);
    })
    
    form2.addEventListener('submit', (event) => {
      
           event.preventDefault()
         let id= document.getElementById("idIns").value  
  let username= document.getElementById("unserIns").value
  let email= document.getElementById("emailIns").value

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
    // let id = truc.users.length
    
    
 
  // console.log(userrrr)
  
      truc.editUser(id, username,email,firstName,secondName,profil)
       console.log(truc)
      truc.save()
   
      
    });
    
  });