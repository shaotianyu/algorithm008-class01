// 双指针 left_max和right_max肯定是越来越大, 对于左边来说，left_max是可信的，所以当left_max < right_max
// 时，以左边值为参考可以计算此时left能放多少水，反之右边也是
var trap = function(height) {
    let sum = 0
    let left = 0
    let right = height.length - 1
    let left_max = 0
    let right_max = 0
    while (left <= right) {
        if (left_max < right_max) {
            left_max = Math.max(height[left], left_max)
            sum += Math.max(left_max - height[left], 0)
            left++
        } else {
            right_max = Math.max(height[right], right_max)
            sum += Math.max(right_max - height[right], 0)
            right--
        }
    }
    return sum
};

var trap = function(height) {
    let sum = 0
    let left = 0
    let right = height.length - 1
    let left_max = 0
    let right_max = 0
    while (left <= right) {
        if (left_max < right_max) {
            if (height[left] > left_max) {
                left_max = height[left]
            } else {
                sum += left_max - height[left]
            }
            left++
        } else {
            if (height[right] > right_max) {
                right_max = height[right]
            } else {
                sum += right_max - height[right]
            }
            right--
        }
    }
    return sum
};