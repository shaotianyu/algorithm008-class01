var jump = function (nums) {
  let farthestPos = 0 
  let endOfCanReach = 0 
  let steps = 0 
  for (let i = 0; i < nums.length - 1; i++) {
    farthestPos = Math.max(farthestPos, i + nums[i])
    if (i === endOfCanReach) { 
      endOfCanReach = farthestPos
      steps++
    }
    // 一旦新的可抵达区间已经包含了num数组的末尾，则直接break退出循环
    if (endOfCanReach >= nums.length - 1) { 
      break
    }
  }
  return steps
};