// 函数类型
// 在 JavaScript 函数是非常重要的，在 TypeScript 也是如此。同样的，函数也有自己的类型标注格式
// 参数
// 返回值

function fn3(x: number, y: number): number {
  return x + y;
}

let v: number = fn3(1, 2);