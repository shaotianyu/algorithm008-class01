// 方法1
var trap = function(height) {
  let max = 0
  let maxIndex = 0
  for (let i = 0; i < height.length; i++) {
      if (height[i] > max) {
          max = height[i]
          maxIndex = i
      }
  }
  let sum = 0
  sum += getLetfSum(0, maxIndex, height)
  sum += getRightSum(height.length - 1, maxIndex, height)
  return sum
};

function getLetfSum (index, maxIndex, height) {
  let count = 0
  let max = height[index]
  for (let current = 1; current < maxIndex; current++) {
      if (height[current] >= max) {
          max = height[current]
      } else {
          count += max - height[current]
      }
  }
  return count
}

function getRightSum (index, maxIndex, height) {
  let count = 0
  let max = height[index]
  for (let current = index; current > maxIndex; current--) {
      if (height[current] >= max) {
          max = height[current]
      } else {
          count += max - height[current]
      }
  }
  return count
}