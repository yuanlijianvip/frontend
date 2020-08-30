let a: null;
let b: undefined;

let c: number;
// c = null;
// c = undefined;

let d: number;
// d = null;
//实际运行有问题
// d.toFixed(1);

let ele = document.querySelector('div');
if (ele) {
  ele.style.display = 'none';
}