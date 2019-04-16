class LinkList{
    constructor(){
        this.Node=function(element){
            this.element=element;
            this.next=null;
        }

        this.length=0;//链表的长度
        this.head=null;//链表的头部
    }

    // 追加元素
    append(element){
        let Node=this.Node;
        let node=new Node(element);
        let current=null;
        if(this.head==null){
            this.head=node;
        }else{
            // 指针从头部开始，一直根据索引值遍历
            current=this.head;
            while (current.next) {
                current=current.next;
            }
            // 赋值
            current.next=node;
        }
        this.length++;
    }

    //任意位置插入元素
    insert(position,element){
        if(position>-1&&position<this.length){
            let Node=this.Node;
            let node=new Node(element);
            let current=this.head;
            let previous=null;
            let index=0;
            // 第一个位置添加
            if(position==0){
                node.next=this.head;
                this.head=node;
            }else{
                while (index++<position) {
                    previous=current
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            this.length++;
            return true
        }else{
            return false
        }
    }

    // 移除
    removeAt(position){
        // 当位置在链表索引范围内，移除方能成立
        if(position>-1&&position<this.length){
            // 需要两个节点，方能实现操作
            let current=this.head;
            let previous=null;
            let index=0;
            if(position==0){
                // 移除第一项,把头部之后的节点赋值给头部。即可！
                this.head=current.next;
            }else{
                // 定位元素位置不断递进,直至找到position时终止。
                while (index++<position) {
                    previous=current
                    current=current.next;
                }
                // 将previous和current的下一项链接起来，跳过current，从而实现移除。
                previous.next=current.next;
            }

            this.length--;
            return current.element;
        }
    }
    // 返回元素在链表中的位置，-1为找不到
    indexOf(element){
        let current=this.head;
        let index=0;

        while (current) {
            if(element==current.element){
                return index
            }
            index++;
            current=current.next;
        }
        return -1
    }

    //根据元素删除元素
    remove(element){
        let index=this.indexOf(element);
        // console.log(index)
        return this.removeAt(index);
    }
    // 是否为空
    isEmpty(){
        return this.length==0;
    }
    // 返回长度
    size(){
        return this.length;
    }
    // 获取头部
    getHead(){
        return this.head;
    }

    //吧linkList转换为一个字符串
    toString(){
        let current=this.head;
        let string='';

        while (current) {
            string+=current.element+(current.next?'->':'');
            current=current.next;
        }

        return string;
    }

    // 获取尾节点
    getTail(){
        let current=this.head;
        while (current.next) {
            current=current.next;
        }
        return current.element;
    }
  
}



// let a=new LinkList();
// a.append('djtao')
// a.append('djt')
// a.append('taotao')
// console.log(a.toString())
// a.remove('taotao')
// console.log(a.getTail())
// a.insert(1,'dangjingtao')
// console.log(a.toString())
// a.removeAt(2)
// console.log(a.toString())
// a.remove('dangjingtao')
// console.log(a.indexOf('taotao'))
// console.log(a.toString())

// 用链表实现stack
class Stack{
    constructor(){
        this.linkList=new LinkList();
    }

    push(item){
        this.linkList.append(item);
    }

    pop(){
        let size=this.linkList.size();
        return this.linkList.removeAt(size-1)
    }

    top(){
        return this.linkList.getTail();
    }

    print(){
        console.log(this.linkList.toString());
    }

    size(){
        return this.linkList.size();
    }

    isEmpty(){
        return this.linkList.size()==0;
    }
}

// var a=new Stack();
// a.push('djt')
// a.push('djtao')
// a.push('dangjingtao')
// a.print()
// console.log(a.pop())
// a.print();
// a.pop();
// a.print()
// a.pop();
// a.print()
// a.pop();
// a.print()
// console.log(a.isEmpty())

// 基于链表实现queue
class Queue{
    constructor(){
        this.linkList=new LinkList();
    }

    enQueue(item){
        this.linkList.append(item)
    }

    deQueue(){
        this.linkList.removeAt(0)
    }

    // 。。。
}


// 链表反转

var Node=function(element){
    this.element=element;
    this.next=null;
}


var node1=new Node(1);
var node2=new Node(2);
var node3=new Node(3);
var node4=new Node(4);
var node5=new Node(5);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

function print(node){
    var current=node;
    var str='';
    while (current) {
        str+=current.element.toString()+(current.next!==null?'->':'');
        current=current.next;
    }
    console.log(str)
}


// 递归
var recursion=function(node,previous){  
    let next=node.next;

    // 尾部
    if(!next){
        node.next=previous;
        return node;
    }else{
        // 互换
        // 头部
        if(!previous){
            previous=node;
            next=null;   
        }else{
            next=previous;
        }
        return recursion(next,node)
    }
}

// console.log(node1)
// print(recursion(node1))
// 迭代
var iteration=function(node){
    let current=node;//当前要反转的节点
    let previous=null;//前一个节点，也用于储存返回值
    
    while (current) {
        let next=current.next;//获取下一个节点
        current.next=previous;//获取完之后把储存位置给previous
        previous=current;//previous叫出去之后，开始后滑
        current=next;//current后滑
    }

    return previous;
}

print(iteration(node1))

