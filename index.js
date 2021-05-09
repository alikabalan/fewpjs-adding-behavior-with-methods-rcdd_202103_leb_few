// Your code here
class Cat{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    return `${this.name} says meow!`;
  }
}

class Dog{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    return `${this.name} says woof!`;
  }
}

class Bird{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    if(this.name === "male"){
    console.log(`"It's me, ${this.name}!`);
  } else console.log(`${this.name} says squawk!`)
  }
}
