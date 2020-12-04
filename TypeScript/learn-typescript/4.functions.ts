// function add(x: number, y:number, z?:number): number {
//   if (typeof  z === 'number') {
//     return x + y + z
//   } else {
//     return x + y
//   }
// }
//函数声明
// function add(x: number, y:number, z:number = 10): number {
//   if (typeof  z === 'number') {
//     return x + y + z
//   } else {
//     return x + y
//   }
// }

// let result = add(2, 3)

//函数表达式
const add = function(x: number, y:number, z:number = 10): number {
  if (typeof  z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// => 声明函数返回值类型
const add2: (x: number, y: number, z?:number) => number = add

//类型推断
let str = 'str'
// str = 123

