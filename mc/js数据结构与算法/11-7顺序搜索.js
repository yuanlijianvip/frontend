//顺序搜索

// 顺序搜索的思路
// 遍历数组
// 找到跟目标值相等的元素，就返回它的下标。
// 遍历结束后，如果没有搜索到目标值，就返回-1

// 顺序搜索的时间复杂度
// 遍历数组是一个循环操作
// 时间复杂度：O(n)

Array.prototype.sequentialSearch = function() {
  for (let i = 0; i < this.length; i+=1) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
}

const res = [1,2,3,4,5].sequentialSearch(3);