class Form {
    #fields;
    #submitted;


    constructor() {

    this.#fields = [];
    this.#submitted = Boolean;
        


    }
    get fields() {

        return this.#fields;
    }



    get submitted() {

        return this.#submitted;
    }


    set submitted(submitted) {

        this.#submitted = submitted;
    }


    addField(field) {
        
        this.#fields.push(field)

    }

    submit() {
        let truc = JSON.stringify(this);
        
     sessionStorage.setItem("form", "truc");
    }

    validate() {
        let count = 0;
        let button = document.querySelector("button")
              for (let i = 0 ; i < this.fields.length;i++){
              
                  
               this.fields[i].validate()
               
                  
              }
              
              
              
              for(let i = 0 ; i < this.fields.length; i ++){
                  
                this.fields[i].element.getAttribute("class")
                if(    this.fields[i].element.getAttribute("class")==="ok"){
                    
                    count++
                }
              }
              
              console.log(count)
              if(count === 5 ){
                  
                  button.classList.remove("disabled")
                  button.removeAttribute("disabled")
                  
                  
              }else if (button.classList !== "disabled"){
                  
                   button.classList.add("disabled")
                    button.setAttribute("disabled")
              }
          }
         
    

    toJSON() {
        let json ={
            data: [];
        }
        for (let i = 0 ; i < this.fields.length; i++){
            
            json.data.push(.serialize(this.fields[i]))
            
        }
    }


}


export { Form };