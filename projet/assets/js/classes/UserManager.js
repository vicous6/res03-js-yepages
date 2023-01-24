  import { Users } from './Users.js';

class UserManager {
    #users;


    constructor(users) {
        this.#users = [];
       

    }

    get users() {

        return this.#users;
    }
    set users(users) {

        this.#users = users;
    }

createUser(user){
       let state = 0
   let password2= document.getElementById("passIns2").value
   
   
        for(let i = 0  ; i < this.users.length; i ++){
            
            if(user.email===this.users[i].email){
                alert ("nom de compte deja utilisé")
                state = 1
            }
        }
        if( user.password !== password2){
           state = 1
        }
        
        
        if(user.username === "" || user.password === ""|| user.email === ""|| user.password === ""|| user.firstName === ""|| user.secondName === ""|| user.profileImage === ""){
            console.log("un des champs est vide")
            
        }else
        if(state === 0){
             this.#users.push(user)
                 console.log(user)
        }else{
            alert ("ca va pas quelque part")
        }
        
    }

    deleteUser(userId){
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].id === userId) {
                this.#users.remove(users[i]);
            }
    }}

    editUser(id, username,email,firstName,secondName,profil){
        
        
      this.users[id].username=username
      this.users[id].email=email
      this.users[id].firstName=firstName
      this.users[id].lastName=secondName
      this.users[id].profileImage=profil
   
    }

    save(){
        let stringUsers = JSON.stringify(this.#users);
        localStorage.setItem("thisUsers", stringUsers);
    }

    load() {
        let  parseUsers = JSON.parse(localStorage.getItem("thisUsers"));
        
        if(parseUsers!== null){
            for (let i = 0; i < parseUsers.length; i++) {
        let parseData = JSON.parse(parseUsers[i]);
        let newUser = new Users(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
        this.#users.push(newUser);
    }
        }
        
        
        
    }
    
    displayStorage(){
        
        
        for(let i = 0; i < this.#users.length; i++) {
            let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let adminTable = document.getElementById("admin-table")
        
        td1.textContent = this.#users[i].id;
        td2.textContent = this.#users[i].username;
        td3.textContent = this.#users[i].email;
        td4.textContent = this.#users[i].firstName;
        td5.textContent = this.#users[i].lastName;


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        adminTable.appendChild(tr);
        }
    }
    
    login(username, password){
        let state =0
        for (let i = 0 ; i < this.users.length; i ++){
            
            if(this.users[i].email===username&& this.users[i].password===password){
                
                console.log("connexion OK")
               state = 1
            }
        }
 
        if(username === "" || password === ""){
            console.log("un des champs est vide")
        }else
        if(state=== 0){
        console.log("il y a une erreur")
        }
    }

}

export { UserManager };