// 未知类型
// unknow，3.0 版本中新增，属于安全版的 any，但是与 any 不同的是：
// unknow 仅能赋值给 unknow、any
// unknow 没有任何属性和方法


// let c1: any = '菜了吗';

// let b2: number = 1;

// b2.toFixed(1);

// b2 = c1;

// b2.toFixed(1);


let c1: unknown = '菜了吗';

let b2: number = 1;

b2.toFixed(1);

// b2 = c1;

b2.toFixed(1);



