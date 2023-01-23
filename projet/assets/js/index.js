  import { Book } from './classes/Book.js';
  import { Users } from './classes/Users.js';
    import { BookManager } from './classes/BookManager.js';
        import { UserManager } from './classes/UserManager.js';
 

  window.addEventListener('DOMContentLoaded', (event) => {
let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")

 let truc = new UserManager()

    form1.addEventListener('submit', (event) => {
         event.preventDefault()
         
         
   let email= document.getElementById("emailCo").value
  let password= document.getElementById("passCo").value
   
      console.log(event.target)
     
      
      truc.login(email,password)
      
    });
    
    
    
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
  console.log(userrrr)
  
      truc.createUser(userrrr)
      
   
      console.log(truc)
    });

  // let booksTab=[];
  // let usersTab=[];


  //       let book0 = new Book(0,"Eragon","Jea Dujardin",1990,200,"ceci est résumé", 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christopher_Paolini%2C_Eragon_1.jpg')
  //     let book1 = new Book(1,"Eragon2","Jea Dujardin",1992,250,"ceci est résumé couurt ", 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christopher_Paolini%2C_Eragon_1.jpg')
  //     let book2 = new Book(2,"Eragon3","Jea Dujardin",2000,1000,"ceci est résumé rapide", 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christopher_Paolini%2C_Eragon_1.jpg')
    

  //       let user0 = new Users(0,"vicous", "vicous@free.fr", "Victor","Oustiakine" ,'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg')
  //         let user1 = new Users(1,"max", "sb@free.fr", "max","maxxxx" ,'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg')
  //         let user2 = new Users(2,"Anth", "anthony@free.fr", "anthony","couarmier" ,'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg')

  // let truc = new BookManager()
  
  //   truc.load()
  //   // truc.findAllBooks()
  //   truc.findBookById(2)
  //   // truc.createBook("")
  //   console.log(truc.findBooksByTitle("Eragon"), `le livre avec pour titre Eragon`)
     
  //   let leCapital = new Book(4,"Eragon4","Jea Dujardin",2000,1000,"ceci est résumé rapide", 'https://upload.wikimedia.org/wikipedia/commons/8/83/Christopher_Paolini%2C_Eragon_1.jpg')
  //   console.log(leCapital)
  //   truc.createBook(leCapital)
    
  //   // truc.deleteBook(3)
  //   truc.save()
  //   console.log(truc)
     
     
     
     
  // console.log(truc.findBookById(0) , "ceci est le livre 0")
    
    
  //         booksTab.push(book0);
  //     booksTab.push(book1);
  //     booksTab.push(book2);
     
  //   usersTab.push(user0);
  //     usersTab.push(user1);
  //     usersTab.push(user2);
     
     
     



     
  //     sessionStorage.setItem("books", JSON.stringify(booksTab));
  //     sessionStorage.setItem("user", JSON.stringify(usersTab));
    
    
    //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    
    //   let recupTabUser =[]
    //   let recupTabBooks =[]
       
       
    //  let recup = JSON.parse(sessionStorage.getItem("books"))
    //  console.log(recup)
    
   
    //   for(let i = 0 ; i < recup.length;i++){
           
    //       recupTabBooks.push(JSON.parse(recup[i]))
    //   }
       
    //   console.log(recupTabBooks)
       
       
    //  let recup2 = JSON.parse(sessionStorage.getItem("user"))
    // //  console.log(recup)
     
     
   
    //   for(let i = 0 ; i < recup.length;i++){
           
    //       recupTabUser.push(JSON.parse(recup2[i]))
    //   }
       
    //   console.log(recupTabUser)
       
    //   for(let i = 0 ; i < recupTabUser.length;i++){
           
           
    //       let truc= new Users(recupTabUser[i].id,recupTabUser[i].username,
    //      recupTabUser[i].email,recupTabUser[i].password,recupTabUser[i].firstName,recupTabUser[i].lastName,recupTabUser[i].profileImage)
         
    //       console.log(truc)
    //   }
       
    //   for(let i = 0 ; i < recupTabBooks.length;i++){
           
           
    //       let truc= new Book(recupTabBooks[i].id,recupTabBooks[i].title,
    //      recupTabBooks[i].author,recupTabBooks[i].publicationDate,recupTabBooks[i].totalPages,recupTabBooks[i].excerpt,recupTabBooks[i].coverImage)
         
    //       console.log(truc)
    //   }
    
    
    
  });
  
 