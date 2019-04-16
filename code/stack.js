

class Stack {
    constructor(array=[]){
        this.array=array;
    }

    // 入栈
    push(item){
        this.array.push(item);
    }

    // 出栈并返回（出栈）
    pop(){
        return this.array.pop()
    }

    // 查看栈顶
    peek(){
        return this.array[this.array.length-1]
    }

    // 是否为空
    isEmpty(){
        return this.array.length==0
    }

    //  清除栈
    clear(){
        this.array=[];
    }

    // 返回栈元素个数
    size(){
        return this.array.length;
    }

    // 打印
    print(){
        console.log(this.array)
        return this.array
    }

}




const divideBy2=(decNum)=>{
    let stack=new Stack();
    let _decnum=decNum;
    while (_decnum!==0) {
        stack.push(_decnum%2);
        _decnum=parseInt(_decnum/2)
    }
    let result=''
    while(!stack.isEmpty()){
        result+=stack.pop().toString()
    }

    return Number(result)
}

// console.log(divideBy2(32))


const divideBy10=(decNum)=>{
    let stack=new Stack();
    let result=0;
    for(let i=0;i<decNum.length;i++){
        result+=decNum[i]*(Math.pow(2,decNum.length-i-1))
    }
    return result
}

// console.log(divideBy10('1010'))

const isLegal=(str)=>{
    let stack=new Stack();
    for(let i=0;i<str.length;i++){
        if(str[i]='('){
            stack.push(str[i])
        }else if(str[i]==')'){
            if(stack.isEmpty()){
                return false;
            }else{
                stack.pop()
            }
        }
    }

    return stack.isEmpty()
}

class MinStack{
    constructor(){
        this.array=[];
        this.stack=new Stack();//存放栈的数据结构
        this.min_stack=new Stack();//存放最小元素的栈
    }

    push(item){
        //无论stack怎么入栈，min_stack总是存放最小的元素
        this.stack.push(item)
        if(this.min_stack.isEmpty()||item<this.min_stack.peek()){
            this.min_stack.push(item)
        }
    }

    pop(){
        //无论stack怎么出栈，min_stack总是存放最小的元素
        
        if(this.stack.peek()<=this.min_stack.peek()){
            this.min_stack.pop();
        }

        this.stack.pop();
    }

    min(){
        return this.min_stack.peek()
    }

    print(){
        return this.stack.print()
    }
}

// let min_stack=new MinStack();
// min_stack.push(4)
// min_stack.push(2)
// console.log(`stack:${min_stack.print()}`,`min: ${min_stack.min()}`)
// min_stack.push(1)
// console.log(`stack:${min_stack.print()}`,`min: ${min_stack.min()}`)
// min_stack.push(3)
// console.log(`stack:${min_stack.print()}`,`min: ${min_stack.min()}`)
// min_stack.pop()
// min_stack.pop()
// min_stack.pop()
// console.log(`stack:${min_stack.print()}`,`min: ${min_stack.min()}`)


const change=(arr)=>{
    let stack=new Stack();
    for(let i=0;i<arr.length;i++){
        if(['+','-','*','/'].indexOf(arr[i])==-1){
            stack.push(arr[i])
        }else{
            let a=stack.pop();
            let b=stack.pop();
            let c=eval(`${a}${arr[i]}${b}`);
            stack.push(c)
        }
    }

    return stack.pop()
}

// console.log(change([3,5,6,'*','+']))

let _arr=[1,'+','(',4,'+',5,')','/',3,'+','(',6,'+',8,')','/',2]
// let _arr=[1,4,5,'+',3,'/',6,8,'+',2,'/','+']

const change2=(arr)=>{
    
    let _dict=['+','-','*','/']
    let dict={
        '+':1,
        '-':1,
        '*':2,
        '/':2,
    };
    let stack=new Stack();
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(!isNaN(arr[i])){
            // 是数字，放入返回值
            result.push(arr[i])
        }else if(arr[i]=='('){
            //括号开始，直接压栈
            stack.push(arr[i])     
        }
        else if(arr[i]==')'){
            //括号结束后，表示扫描结束.无需压栈，括号内运算符优先出栈
            while (stack.peek()!=='(') {
                result.push(stack.pop());
                // console.log(stack.pop())
            }
            stack.pop()
        }else if(_dict.indexOf(arr[i])>=0){
            console.log(arr[i])
            // 是四则运算符,判断：
            // 如果优先级大于栈顶，压栈。否则：
            // 弹出运算符到返回值，直至优先级
            while (!stack.isEmpty()
            &&_dict.indexOf(stack.peek()>=0)
            &&dict[stack.peek()]>=dict[arr[i]]
            ){
                console.log(111)
                result.push(stack.pop()) ;
            }
           stack.push(arr[i]) ;
        }

    }
    while (!stack.isEmpty()) {
        result.push(stack.pop())
    }
 
    return result
}

let aaa=[1,'+',6]

// var aaaa=new Stack(aaa)
// console.log(aaaa.peek())
console.log(change2(_arr))
// let dict=[
//     {'+':1},
//     {'-':1},
//     {'*':2},
//     {'/':2}
// ];
// console.log(dict.indexOf('+'))
