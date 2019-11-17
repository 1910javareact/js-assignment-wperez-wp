/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
let object = {
    name: 'Wilfred',
    age: 60
}
    console.log (object)

function Person(name, age) {
    this.name = name
    this.age = age
  } 
  let guy = new Person('Mack', 100);
    console.log("Mack " + guy.constructor);
  
  class Human {
    constructor(name, age){
      this.person = 'person'
      this.name = name
      this.age = age
    }
    sayName() {
        console.log('Hi, I am a ', this.person + '.')
      }
}
let p = new Human("Mack", 40);
p.sayName();
console.log('The age of this Human is ' + p.age)
console.log('The name of this person is ' + p.name);
