
class Person {
    constructor (name='anonymous', age=0){

        this.name=name;
        this.age=age;
    }
 getMessage(){ return     `He is ${this.name} and ${this.age} year(s) old..!!`};

};
class employee extends Person{
    
    constructor (name,age,grade='k'){
        super(name, age);
        this.grade=grade;
      
    }
    getMessage(){ return     `He is ${this.name} and ${this.age} year(s) old.. and grad ${this.grade}!!`};
}

let obj= new employee('sam',31,'2nd');
console.log(obj.getMessage())

