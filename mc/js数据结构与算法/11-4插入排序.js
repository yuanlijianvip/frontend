// 插入排序

// 插入排序的思路
// 从第二个数开始往前比
// 比它大就往后排
// 以此类推进行到最后一个数

// 插入排序的时间复杂度
// 两个嵌套循环
// 时间复杂度 O(n^2)

// 小型数组性能好于冒泡排序和选择排序

Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i+=1) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j-1];
      } else {
        break;
      }
      j -= 1;
    }
    this[j] = temp;
  }
};

const arr = [5,4,3,2,1];
arr.insertionSort();