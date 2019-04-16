class Queue {
    constructor(arr = []) {
        this.arr = arr;
    }
    // 从尾部进队
    enqueue(item) {
        this.arr.push(item)
    }
    // 从头部出队，返回第一个元素
    dequeue() {
        return this.arr.shift()
    }
    // 返回第一个元素
    front() {
        return this.arr[0]
    }
    // 返回底部的元素
    bottom() {
        return this.arr[this.arr.length - 1]
    }

    // 是否为空
    isEmpty() {
        return this.arr.length == 0;
    }
    // 返回元素个数
    size() {
        return this.arr.length
    }
    // 打印队列
    print() {
        console.log(this.arr)
    }
}


// 约瑟夫环
const cycle = () => {
    // 创建队列
    const queue = new Queue();
    for (let i = 0; i < 100; i++) {
        queue.enqueue(i);
    }

    let index = 0;
    while (queue.size() > 1) {

        let dequeue = queue.dequeue()
        index += 1;
        if (index % 3 != 0) {
            queue.enqueue(dequeue)
        }

    }

    return queue.dequeue();
}
// let a = cycle()
// console.log(a)


const fib = (n) => {
    if (n == 1 || n == 2) {
        return 1
    }
    const queue = new Queue([1, 1]);
    for (let i = 0; i < n - 2; i++) {
        // 从头部获取较小的a
        let a = queue.front();
        // 从尾部获取较大的b，它将作为下次循环的头部
        let b = queue.bottom();
        // 弹出a
        queue.dequeue();
        // 加入a+b
        queue.enqueue(a + b);
    }
    return queue.bottom()
}
// 测试用例

// for(let i=1;i<11;i++){
//     console.log(fib(i))
// }
// console.log(fib(100)/fib(101))


// 两个队列实现一个栈

class Stack {
    constructor(arr = []) {
        this.queue = new Queue(arr);
    }

    push(item) {
        this.queue.enqueue(item);
        // if(this._queue.isEmpty){
        //     this._queue.enqueue(item);
        // }
    }

    // 从头部删除
    pop() {
        const _queue = new Queue();
        for (let i = 0; i < this.queue.size(); i++) {
            let item = this.queue.dequeue();
            _queue.enqueue(item);
        }
        let result = this.queue.dequeue();
        this.queue = _queue;
        return result
    }

    // 取栈顶，实际上取的是队列的bottom
    top() {
        return this.queue.bottom()
    }

    print() {
        console.log()
    }
}

// var a=new Stack();

// a.push(1);
// a.push(2);
// a.push(3);
// console.log(a.pop())
// a.push(4)
// console.log(a.pop())
// console.log(a.top())

const yangHui = (n) => {

    let queue = new Queue([1, 1]);
    const print = (n) => {
        const _queue = new Queue();
        for (let i = 0; i < n; i++) {
            // 判断边界
            if (i == 0 || i == n - 1) {
                _queue.enqueue(1);
            } else {
                let a = queue.dequeue();
                let b = queue.front();
                _queue.enqueue(a + b);
            }
        }

        queue = _queue;
        queue.print()
    }

    // 调用
    for (let i = 1; i < n + 1; i++) {
        print(i);
    }
}

// yangHui(10)


let arr = [
    [0, 0, 'x', 0, 0, 0, 0],
    [0, 0, 'x', 'x', 0, 0, 0],
    [0, 0, 0, 0, 'x', 0, 0],
    [0, 0, 0,  'x','x', 0, 0],
    ['x',  0,   0,  0, 'x', 0, 0],
    ['x', 'x', 'x', 0, 0, 0, 0],
    ['x', 'x', 'x', 0, 0, 0, 0],
]

const maze = (maze_map, [a, b], [_a, _b], queue) => {

    let queue = new Queue();
    let arr=[];

    // 存放路径基本特征
    const road = (x, y, step) => {
        this.isTrue = true;
        this.position = [x, y];
        this.isEnd = false
        if (x < 0 || x > 6 || y < 0 || y > 6) {
            this.isTrue = false;
        } else if (maze_map[x][y] == 'x') {
            this.isTrue = false;
        } else {
            if (x == _a && y == _b) {
                this.isEnd = true
                console.log('成功！！！')
            } else {
                // 表示可以走
                if(arr.indexOf([x,y])<0){
                    // queue.enqueue([x, y]);
                    arr.push([x,y])
                    if( maze_map[x][y]>step){
                        maze_map[x][y]=step;
                    };
                }
                   
            }
        }
        return this.isTrue ? (this.isEnd ? '成功' : this.position) : false;
    }

    // 设置规则
    
    const getRoad = () => {
        var roadToBottom = road(a + 1, b,);
        var roadToTop = road(a - 1, b);
        var roadTpRight = road(a, b + 1);
        var roadToLeft = road(a, b - 1);

        while (getRoad() == false) {

        }
    }

    // if(road(a+1,b)!==false){
    //     queue.enqueue(road(a+1,b));
    //     return 
    // }


    // let roads=[roadToBottom,roadToTop,roadTpRight,roadToLeft].filter((x,i)=>{
    //     return x!==false;
    // })

    // for(let i=0;i<roads.length;i++){
    //     return maze(maze_map,roads[i],[_a,_b],queue)
    // }

    return roadToBottom;

}


console.log(maze(arr, [2, 2], [3, 5]))







// 优先队列
class PriorityQueue {
    constructor() {
        this.arr = [];

        // 创建一个特殊队列,用来储存元素（包括优先级）
        this.QueueElement = function (item, priority) {
            this.item = item;
            this.priority = priority;
        }
    }

    // 移入元素，接收元素和优先级
    enqueue(item, priority) {
        let QueueElement = this.QueueElement;
        let queueElement = new QueueElement(item, priority)
        let isAdded = false;

        for (let i = 0; i < this.arr.length; i++) {
            // 若有较高优先级，插入进去。
            if (queueElement.priority < this.arr[i].priority) {
                this.arr.splice(i, 0, queueElement);
                isAdded = true;
                break;
            }
        }
        // 如果优先级最小，push上去吧
        if (!isAdded) {
            this.arr.push(queueElement)
        }
    }

    // 出队，按正常出队即可
    dequeue(item, priority) {
        return this.arr.shift()
    }

    // 是否空
    isEmpty() {
        return this.arr.length == 0;
    }

    // 打印
    print() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(`${this.arr[i].item}-${this.arr[i].priority}`)
        }
    }

}

// var aaa=new PriorityQueue();
// aaa.enqueue('djtao',2)
// aaa.enqueue('dangjingtao',1)
// aaa.enqueue('djt',1)
// aaa.print();


const hotProtato = (nameList, num) => {

    const queue = new Queue();
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            // 典型的蛇咬自己尾巴
            queue.enqueue(queue.dequeue())
        }
        // 每次减1
        eliminated = queue.dequeue()
        console.log(eliminated + `在击鼓传花中被淘汰`);
    }

    return queue.dequeue();
}

// let names = ['djtao', 'dangjingtao', 'djt', 'dangjt', 'taotao'];
// let winner = hotProtato(names, 9);

// console.log(`胜者是${winner}`)