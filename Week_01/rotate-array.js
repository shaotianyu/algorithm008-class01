// 方法1
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k))
  return nums
};

// 方法2
var rotate = function(nums, k) {
  while(k--){
      nums.unshift(nums.pop())
  }
  return nums
};

// 方法3
// [1,2,3,4,5,6]
// [6,5,4,3,2,1]
// [4,5,6,3,2,1]
// [4,5,6,1,2,3]
function rotate (nums, k) {
  k = k % nums.length
  nums = getRotate(nums, 0, nums.length - 1)
  nums = getRotate(nums, 0, k - 1)
  nums = getRotate(nums, k, nums.length - 1)
  return nums
}

function getRotate (nums, start, end) {
  while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
  }
  return nums
}

// 方法4
function rotate (nums, k) {
  let count = 0
  let len = nums.length
  let start = 0
  while (count < len) {
      let current = start
      let prev = nums[start]
      let temp
      do {
        current = (current + k) % len
        temp = nums[current]
        nums[current] = prev
        prev = temp
        count++
      } while (current !== start) 
      start++
  }
  return nums
}
