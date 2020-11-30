//对对象的形状（shape）进行描述
//对类（class）进行抽象
//Duck Typing (鸭子类型)

interface Person {
  readonly id: number; // 只读属性
  name: string;
  age?: number; //可选属性
}

let xiaoming: Person = {
  id: 1,
  name: 'xiaoming',
  age: 20
}
// xiaoming.id = 111
