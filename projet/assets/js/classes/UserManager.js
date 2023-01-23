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
       
        for(let i = 0  ; i < this.users.length; i ++){
            
            if(user===this.users[i].email){
                alert ("nom de compte deja utilisé")
                state = 1
            }
        }
        
        if(state=== 0){
             this.#users.push(user);
        }
        
    }

    deleteUser(userId){
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].id === userId) {
                this.#users.remove(users[i]);
            }
    }}

    editUser(user){
        newUserTab = [];
        for(let i = 0; i< this.#users; i++) {
            if(this.#users[i].id !== user.id) {
                newUserTab.push(this.#users[i]);
            }

            this.#users = newUserTab;
        }
    }

    save(){
        let stringUsers = JSON.stringify(this.#users);
        sessionStorage.setItem("thisUsers", stringUsers);
    }

    load() {
        let  parseUsers = JSON.parse(sessionStorage.getItem("thisUsers"));
        for (let i = 0; i < parseUsers.length; i++) {
        let parseData = JSON.parse(parseUsers[i]);
        let newUser = new User(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
        this.#users.push(newUser);
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
        if(state=== 0){
        console.log("il y a une erreur")
        }
    }

}

export { UserManager };