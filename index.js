// Your code here
class Cat{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    console.log(`${name} says meow!`);
  }
}

class Dog{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    console.log(`${name} says Woof!`);
  }
}

class Bird{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    if(this.name === "male"){
    console.log(`"It's me, ${name}!`);
  } else console.log(`${name} says squawk!`)
  }
}
