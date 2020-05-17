/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length
  if (len === 1) return true
  let zeroIndex = []
  for (let i = 0; i < len; i++) {
      if (nums[i] === 0) zeroIndex.unshift(i)
  }
  for (let startIndex of zeroIndex) {
      let canOver = false
      for (let dist = 1; startIndex - dist >= 0 && !canOver; dist++) {
          if (nums[startIndex - dist] > dist) canOver = true
          if (nums[startIndex - dist] === dist && startIndex == len - 1) canOver = true
      }
      if (!canOver) return false
  }
  return true
};