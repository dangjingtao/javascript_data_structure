// // 集合

// class Set {
//     constructor() {
//         this.items = {};
//     }

//     // 是否含有
//     has(value) {
//         // return value in this.items;
//         return this.items.hasOwnProperty(value)
//     }

//     // 添加
//     add(value) {
//         if (!this.has(value)) {
//             this.items[value] = value;
//         }
//     }

//     // 删除
//     remove(value) {
//         if (this.has(value)) {
//             delete this.items[value];
//             return true
//         }
//     }

//     // 清理
//     clear() {
//         this.items = {}
//     }

//     // 长度
//     size() {
//         // ES6中Obeject.key方法以数组形式返回对象的属性列表（IE9+）
//         return Object.keys(this.items).length;
//     }

//     // 以数组形式返回所有值
//     values() {
//         let values = [];
//         let keys = Object.keys(this.items);
//         for (let i = 0; i < keys.length; i++) {
//             values.push(this.items[keys[i]])
//         }
//         return values;
//     }

//     // 并集
//     union(otherSet) {
//         let unionSet = new Set();
//         let values = this.values();
//         for (let i = 0; i < values.length; i++) {
//             unionSet.add(values[i])
//         }

//         values = otherSet.values();
//         for (let i = 0; i < values.length; i++) {
//             unionSet.add(values[i])
//         }

//         return unionSet;
//     }


//     // 交集
//     intersection(otherSet){
//         let intersectionSet = new Set();
//         let values=this.values();

//         for(let i=0;i<values.length;i++){
//             if(otherSet.has(values[i])){              
//                 intersectionSet.add(values[i])
//             }
//         }

//         return intersectionSet;
//     }

//     // 差集
//     difference(otherSet){
//         let values=this.values();
//         let set=new Set();

//         for(let i=0;i<values.length;i++){
//             if(!otherSet.has(values[i])){
//                 set.add(values[i])
//             }
//         }

//         return set;
//     }

//     // 是否子集
//     subSet(otherSet){
//         if(this.size()>otherSet.size()){
//             return false;
//         }else{
//             let values=this.values();

//             for(let i=0;i<values.length;i++){
//                 if(!otherSet.has(values[i])){
//                     return false;
//                 }
//             }
//         }
//     }
// }

// let a = new Set();
// a.add(1);
// a.add(2);
// a.add(3);

// let b = new Set();
// b.add(3);
// b.add(4);
// b.add(5);

// console.log(a.difference(b))

// a.add('dangjingtao');
// a.add('djtao')
// console.log(a.has('taotao'))
// a.add('taotao');
// console.log(a.has('taotao'))
// console.log(a.values())
// a.remove('djtao')
// console.log(a.size())



// 并集
Set.prototype.union = function (otherSet) {
    
    let unionSet = new Set();

    this.forEach((element, sameElement, set) => {
        // console.log(element, sameElement, set)
        unionSet.add(element)
    });

    otherSet.forEach((element, sameElement, set) => {
        // console.log(element, sameElement, set)
        unionSet.add(element)
    });
    return unionSet;
}



// const set = new Set([1, 2, 3, 4, 5]);
// let set2=new Set([1,2,6,7])
// console.log(set.union(set2))//Set { 1, 2, 3, 4, 5, 6, 7 }

// 并集
Set.prototype.intersection = function (otherSet) {
    
    let unionSet = new Set();

    this.forEach((element, sameElement, set) => {
        if(otherSet.has(element)){
            unionSet.add(element)
        }
    });

    
    return unionSet;
}


// 差集
Set.prototype.difference = function (otherSet) {
    
    let unionSet = new Set();

    this.forEach((element, sameElement, set) => {
        if(!otherSet.has(element)){
            unionSet.add(element)
        }
    });

    
    return unionSet;
}

const set = new Set([1, 2, 3, 4, 5]);
let set2=new Set([1,2,6,7])
console.log(set.difference(set2))//Set { 1, 2 }












