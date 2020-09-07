// class Person {
//   constructor(public username:string){}
// }
// class Student extends Person {

// }
// interface Point {
//   [key: string]: Person;
//   [key: number]: Student;
// }


// interface Point {
  // x: number;
  // 只读属性
  // readonly y: number;
  // 可选属性
  // color?: number;
  //任意属性
  // [key: number]: number;
  // [key: string]: number;

// }

// let p1: Point = {
//   x: 100,
//   y: 100
// }


// 使用接口描述函数
// function fn1(x: number, y: number): number {
//   return x + y;
// }
// function fn2(x: number, y: number): number {
//   return x + y;
// }

// interface IFunc {
//   (x: number, y: number): number
// }
// let fn1: IFunc = function(a: number, b: number): number {
//   return a + b;
// }

// function todo(callback: IFunc) {
//   //...
//   let v = callback(1, 2);
//   //...
// }
// todo(function(a: number, b: number): number {
//   return a + b;
// })



// interface IEventFunc {
//   (e: MouseEvent): void
// }

// function on(el:HTMLElement, evname: string, callback: IEventFunc) {

// }

// let div = document.querySelector('div');
// if (div) {
//   on(div, 'click', function(e) {
//     e.clientX;
//   })
// }


//接口合并
interface Box {
  height: number;
  width: number;
  fn(a: string): string;
}

interface Box {
  scale: number;
  //方法重载
  fn(a: number): number;
}

let box: Box = {
  height: 5,
  width: 6,
  scale: 10,
  fn: function(a: any):any {
    return a;
  }
}

