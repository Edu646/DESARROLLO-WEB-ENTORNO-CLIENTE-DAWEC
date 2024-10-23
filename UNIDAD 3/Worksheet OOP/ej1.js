class person {
    constructor(name, age){
        this.age = age
        this.name = name
        this.stomach = [];
    }

     eat(string){
        if(this.stomach.length < 10){
            this.stomach.push(string);
        }else{
            console.log("Tamaño lleno")
        }
    }
    
     pop(){
        this.stomach = [];
    }
     toString(){
        console.log(this.name + "," + this.age)
    }
}


