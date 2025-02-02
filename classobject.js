//class and object

class User{
    #age;
    #department;
    constructor(name,age,department)
    {
        this.name=name;
        this.#age=age;
        this.#department=department;
    }
    display()
    {
        console.log(this.name,this.#age,this.#department)
    }
    get age(){
        return "age : "+this.#age;
    }
    get department(){
        return "department : "+this.#department;
    }

    set department(department)
    {
        if(department=="IT")
        {
        this.#department="IT";
        }
        else{
            this.#department="RK";
        }
    }
    
}

let object1 =new User("ranjithkumar",23,"informationtechnology");
console.log(object1.age);
console.log(object1.department);