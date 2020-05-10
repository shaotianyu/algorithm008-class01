// 迭代，执行栈
var maxDepth = function(root) {
  let depth = 0
  if (!root) return depth
  const stack = [
      {
          node: root,
          deep: 1
      }
  ]
  while (stack.length) {
      let current = stack.pop()
      let currentNode = current.node
      if (currentNode) {
          let currentDepth = current.deep
          depth = Math.max(depth, currentDepth)
          if (currentNode.left) {
              stack.push({
                  node: currentNode.left,
                  deep: currentDepth + 1
              })
          }
          if (currentNode.right) {
              stack.push({
                  node: currentNode.right,
                  deep: currentDepth + 1
              })
          }
      }
  }
  return depth
};

// 队列，逐层累加
var maxDepth = function(root) {
  let depth = 0
  if (!root) return depth
  const stack = [root]
  while (stack.length) {
      let len = stack.length
      while (len--) {
          let current = stack.shift()
          if (current.left) {
              stack.push(current.left)
          }
          if (current.right) {
              stack.push(current.right)
          }
      }
      depth++
  }
  return depth
};

// 递归，分解每个节点的深度
var maxDepth = function(root) {
  if (root === null) return 0
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
};