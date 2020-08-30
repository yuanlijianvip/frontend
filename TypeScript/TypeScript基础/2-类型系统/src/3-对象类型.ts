let e: Object = {};
let arr: Array<number> = [1, 2, 3];
let d1: Date = new Date();


// let user: {username: string, age: number} = {
//   username: 'zs',
//   age: 20
// }

//接口
// interface Person {
//   username: string;
//   age: number
// }

// let user: Person = {
//   username: 'zs',
//   age: 20
// }

// let user1: Person = {
//   username: 'ls',
//   age: 21
// }


//类的具体使用
// class Person {
//   constructor(public username: string, public age: number) {

//   }
// }

// let user: Person = new Person('zs', 20);


interface AjaxOptions {
  url: string,
  method: string;
}

function ajax(options: AjaxOptions) {}

ajax({
  url: '',
  method: 'get'
});