//类型别名
// type dir = 'left' | 'top' | 'right' | 'bottom';
// function setPosition(ele: Element, direction: dir) {
//     //
// }

// let box = document.querySelector('div');
// if (box) {
//     setPosition(box, 'left');
//     setPosition(box, 'a');
// }


// 使用类型别名定义函数类型
// 这里需要注意一下，如果使用 type 来定义函数类型，和接口有点不太相同
// type callback = (a: string) => string; 
// let fn: callback = function(a) {}; 
// 或者直接 
// let fn: (a: string) => string = function(a) {}


// interface 与 type 的区别
// interface
// 只能描述 object / class / function 的类型
// 同名 interface 自动合并，利于扩展
// type
// 不能重名
// 能描述所有数据