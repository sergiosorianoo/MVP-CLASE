//clase User
class User {
    id;
    #name;
    #age;
    complete;

    //contructor user
    constructor({ id, age, name, complete }) {
        this.id = id || this.uuidv4();
        this.name = name;
        this.age = age;
        this.complete = complete ?? false;
    }

    //getter y setter name
    get name(){
        return this.#name;
    }
    set name(value){
        this.#name = value;
    }

    //getter y setter age
    get age() {
        return this.#age;
    }
    set age(value) {
        if(value < 0 ){
            throw new Error('Error: invalid age');
        }
        this.#age = value;
    }

    uuidv4

    toJSON(){
        return{
            id: this.id,
            name:this.name,
            age:this.age,
            complete:this.complete,
        }
    }

}

