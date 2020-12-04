class Animal {
  name: string;
  static categoies: string[] = ['mammal', 'bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`
  }
}

console.log(Animal.categoies);


const snake = new Animal('lily')
console.log(Animal.isAnimal(snake));

console.log(snake.run());

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run());
console.log(xiaobao.bark());

class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name);
  }
  run() {
    return 'Meow, ' + super.run()
  }
}

const maomao = new Cat('maomao')
console.log(maomao.run());


