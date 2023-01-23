import { Book } from './Book.js';
class BookManager {
    #books;


    constructor(books) {
        this.#books = [];
       

    }

    get books() {

        return this.#books;
    }
    set books(books) {

        this.#books = books;
    }


    findAllBooks(){
        
        console.log(this.books)
        console.log("find all books")
        return this.books
    }
    findBookById(id){
        let elem =[]
        for(let i = 0; i < this.books.length;i++){
            
            if(this.books[i].id=== id){
                //   console.log(`ceci est le livre no : ${i}`)
                 elem.push(this.books[i])
                //  console.log(elem)
              
              
               
            }
        }
           return elem
        
    }
    findBooksByTitle(title){
          let elem =[]
         for(let i = 0; i < this.books.length;i++){
            
            if(this.books[i].title=== title){
                elem.push(this.books[i])
                // console.log(`ceci est le livre no : ${i}`)
               
            }
        }
         return elem
    }
    findBooksByAuthor(author){
           let elem =[]
         for(let i = 0; i < this.books.length;i++){
            
            if(this.books[i].author=== author){
                elem.push(this.books[i])
                // console.log(`ceci est le livre no : ${i}`)
               
            }
        }
         return elem
    }
    findBooksByPublicationYear(year){
           let elem =[]
         for(let i = 0; i < this.books.length;i++){
            
            if(this.books[i].publicationDate=== publicationDate){
                elem.push(this.books[i])
                // console.log(`ceci est le livre no : ${i}`)
                
            }
        }
        return elem
    }
    createBook(book){
        
      
    this.books.push(book);
    
    console.log("livre creer")
    }
    deleteBook(bookId){
        let tab = []
        for(let i = 0 ; i < this.books.length;i++){
            if(this.books[i].id !== bookId){
                
                tab.push(this.books[i])
            }
        }
       this.books= tab
    }
    // remplace un objet par un autre
    editBook(book){
        for(let i = 0; i < this.books.length; i ++){
            if(this.books[i].id=== books.id){
                
                this.books[i]=book
            }
        }
    }
    save(){
         let stringBooks = JSON.stringify(this.#books);
        sessionStorage.setItem("books", stringBooks);

    }
    load(){
        
        let  parseBooks = JSON.parse(sessionStorage.getItem("books"));
        let bookTab= []
       
        for(let i = 0 ; i < parseBooks.length; i++) {
            
           let bookData = (JSON.parse(parseBooks[i]))
          
           let newBook = new Book (bookData.id, bookData.title, bookData.author, bookData.publicationDate, bookData.totalPages, bookData.excerpt, bookData.coverImage)
            this.books.push(newBook)
            
        }
        // console.log(this.#books )
            console.log(" load() executé")
       
    }

}

export { BookManager };