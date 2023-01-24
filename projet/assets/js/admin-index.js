   import { Book } from './classes/Book.js';
  import { Users } from './classes/Users.js';
    import { BookManager } from './classes/BookManager.js';
        import { UserManager } from './classes/UserManager.js';
 
  window.addEventListener('DOMContentLoaded', (event) => {
 
 let truc = new UserManager()
truc.load()
console.log(truc)
        
        truc.displayStorage()
        
        
        let supr= document.getElementById("supr")
        let content = document.getElementById("supContent")
        supr.addEventListener('click',function(){
            
            
            console.log(parseInt(content.value))
             truc.deleteUser(parseInt(content.value))
             truc.save()
             console.log(truc)
              document.location.href="admin-users.html"; 
        })
      
  })