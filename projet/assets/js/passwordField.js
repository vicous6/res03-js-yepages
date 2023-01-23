import { Field } from './field.js';

class PasswordField extends Field{
    

constructor(element) {
    super(element)
    


}

 validate() {
     this.errors.pop()
            if (this.element.value  === ""){
                 this.element.classList.add("nok")
                 this.element.classList.remove("ok")
                 
                  this.errors.push(`Le champ ${this.name} ne peut pas être vide`)
                  
            }else if(this.element.value  !== "" && this.element.value.length < 5){
                this.element.classList.add("nok")
                this.element.classList.remove("ok")
                
                this.errors.push(`Le champ ${this.name} ne faire 5 valeur ou moins`)
            }else{
                
                this.element.classList.add("ok")
                this.element.classList.remove("nok")
            }
            console.log("methode")
    }


}


export { PasswordField };