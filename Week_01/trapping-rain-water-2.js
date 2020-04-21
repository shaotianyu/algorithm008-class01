var trap = function(height) {
    let sum = 0
    const max_left = []
    const max_right = []
    for (let i = 1; i < height.length; i++) {
        max_left[i] = Math.max(max_left[i - 1] || 0, height[i - 1])
    }
    for (let i = height.length - 2; i >= 0; i--) {
        max_right[i] = Math.max(max_right[i + 1] || 0, height[i + 1])
    }
    for (let i = 1; i < height.length - 1; i++) {
        let min = Math.min(max_left[i], max_right[i])
        if (height[i] < min) {
            sum += min - height[i]
        }
    }
    return sum
};