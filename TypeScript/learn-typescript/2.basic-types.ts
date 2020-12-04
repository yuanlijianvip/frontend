let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111

let firstName: string = 'hhh'
let message: string = `Hello, ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

//undefined null 所有类型的子类型
let num: number = undefined
let num1: number = null


let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

//联合类型
let numberOrString: number | string = 23
numberOrString = 'abc'
// numberOrString = true

let arrOfNumbers: number[] = [1,2,3]
arrOfNumbers.push(5)
// arrOfNumbers.push('str')

//类数组
// function test() {
//   console.log(arguments);
//   let arr: any[] = arguments;
// }

// 元组 Tuple
let user: [string, number] = ['str', 1]
// user = ['str1', 2, true]





