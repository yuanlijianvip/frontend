// 无值类型
// 表示没有任何数据的类型，通常用于标注无返回值函数的返回值类型，函数默认标注类型为： void

function fn1():void { 
  // 没有 return 或者 return undefined 
  return undefined;
}

// 在 strictNullChecks 为 false 的情况下， undefined 和 null 都可以赋值给 void ，但是
// 当 strictNullChecks 为 true 的情况下，只有 undefined 才可以赋值给 void

