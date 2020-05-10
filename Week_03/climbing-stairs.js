// 斐波那契数
var climbStairs = function(n) {
  if (n === 1) return 1
 let first = 1
 let second = 2
 for (let i = 3; i <= n; i++) {
     let third = first + second
     first = second
     second = third
 }
 return second
};

// 暴力法
var climbStairs = function(n) {
  return climb(0, n)
};

function climb (index, n) {
  if (index === n) {
      return 1
  }
  if (index > n) {
      return 0
  }
  return climb(index + 1, n) + climb(index + 2, n)
}

// 记忆化递归
var climbStairs = function(n) {
  let store = []
  return climb(0, n)
  function climb (index, n) {
      if (index > n) {
          return 0
      }
      if (index === n) {
          return 1
      }
      if (store[index]) {
          return store[index]
      }
      store[index] = climb(index + 1, n) + climb(index + 2, n)
      return store[index]
  } 
};


// 动态规划
var climbStairs = function(n) {
  let arr = [1,1];
  for(let i = 2;i<=n;i++){
      arr[i] = arr[i-1]+arr[i-2];
  }
  return arr[n];
};
