   import { Book } from './classes/Book.js';
  import { Users } from './classes/Users.js';
    import { BookManager } from './classes/BookManager.js';
        import { UserManager } from './classes/UserManager.js';
 
  window.addEventListener('DOMContentLoaded', (event) => {
 
 let truc = new UserManager()
truc.load()
console.log(truc)
        
        truc.displayStorage()
      
  })