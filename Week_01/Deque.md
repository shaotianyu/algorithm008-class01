## 1.队列（queue）
一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作。

特点：先进先出（FIFO-first in first out）

## 2.栈/堆栈（stack）
运算受限的线性表。限定仅在表尾进行插入和删除操作的线性表。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。

特点：后进先出（LIFO-last in first out）

## 3.双端队列（deque）

> deque：double ended queue

允许两端都可以进行入队和出队操作的队列，即元素可以从队头出队和入队，也可以从队尾出队和入队。

```js
class CircularDeque {
    constructor (k) {
        this.size = k
        this.tail = 0
        this.head = 0
        this.len = 0
        this.list = []
    }
    
    // 在队列头部增加一个元素
    insertFront (value) {
      if (!this.isFull()) {
          this.head = (this.head + this.size-1) % this.size
          this.list[ this.head ] = value
          this.len++
          return true
      }
      return false
    }

    // 将双端队列尾部增加一个元素
    insertLast (value) {
        if (!this.isFull()) {
            this.list[this.tail] = value
            this.tail = (this.tail + 1) % this.size
            this.len++
            return true
        }
        return false
    }

    // 从双端队列头部delete一个元素
    deleteFront () {
        if (!this.isEmpty()) {
            this.head = (this.head + 1) % this.size
            this.len--
            return true
        }
        return false
    }

    // 从双端队列尾部删除一个元素
    deleteLast () {
        if (!this.isEmpty()) {
            this.tail = (this.tail + this.size-1) % this.size
            this.len--
            return true
        }
        return false
    }

    getFront () {
        if (!this.isEmpty()) {
            return this.list[this.head]
        }
        return -1
    }

    getRear () {
        if (!this.isEmpty()) {
            return this.list[ (this.tail + this.size-1) % this.size ]
        }
        return -1
    }

    isEmpty () {
        return this.len === 0
    }

    // 双端队列是不是满了
    isFull () {
        return this.len === this.size
    }
}


const obj = new CircularDeque(k)
...
```

## 4.假溢出情况

`js`中存在整数范围限制，`Number.MAX_SAFE_INTEGER和Number.Min_SAFE_INTEGER`，即`Number`类型限制安全区间为`-(2^53-1)~2^53-1`之间的整数，任何超出此范围的整数值都可能失去精度


```js
console.log(99999999999999999);    // 打印结果 100000000000000000
```

### 4.1.使用BigInt解决

`BigInt`是一种新的数据类型，它提供了一种方法来表示大于`2^53-1` 的整数，整数溢出将不再是问题。


```js
const bigInt = 9007199254740991n

BigInt(9007199254740991) // 9007199254740991n

BigInt("0x1fffffffffffff") // 9007199254740991n

typeof BigInt('10') === 'bigint'; // true
```
