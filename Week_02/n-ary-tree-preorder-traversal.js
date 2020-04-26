// 递归
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) return []
  const result = []
  function loop(current) {
      result.push(current.val)
      current.children.forEach(item=>{
          loop(item)
      })
  }
  loop(root)
  return result
};

// 迭代
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) return []
  const result = []
  const stack = [root]
  let current
  while (stack.length > 0) {
      current = stack.pop()
      result.push(current.val)
      for (let i = current.children.length - 1; i >=0; i--) {
          stack.push(current.children[i])
      }
  }
  return result
};