// 方法1
var maxArea = function(height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
      for (let j = i + 1; j < height.length; j++) {
          const currentArea = (j - i) * Math.min(height[i], height[j]);
          maxArea = Math.max(currentArea, maxArea);
      }
  }
  return maxArea
};
// 2
var maxArea = function(height) {
  let maxHeight = 0
  for (let i = 0, j = height.length - 1; i < j;) {
      const min = height[i] < height[j] ? height[i++] : height[j--]
      const currentArea = (j - i + 1) * min
      maxHeight = Math.max(currentArea, maxHeight)
  }
  return maxHeight
};

// 3
var maxArea = function(height) {
  let maxArea = 0
  let i = 0
  let j = height.length - 1
  let min
  let currentArea
  while (i < j) {
      min = height[i] < height[j] ? height[i++] : height[j--]
      currentArea = (j - i + 1) * min
      maxArea = Math.max(currentArea, maxArea)
  }
  return maxArea
};