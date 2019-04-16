// 树
class BinarySearchTree {
    constructor() {
        this.Node = function (key) {
            this.key = key;
            this.left = null;
            this.right = null;
        }

        this.root = null
        this.insertNode = this.insertNode.bind(this)
    }



    // 中序遍历
    inOrderTraverse(callback) {
        // 中序遍历所需的必要方法
        const inOrderTraverseNode = (_root, _callback = () => { }) => {
            // 从顶层开始遍历
            if (_root !== null) {
                inOrderTraverseNode(_root.left, _callback);
                _callback(_root.key);
                inOrderTraverseNode(_root.right, _callback);
            }
        }
        inOrderTraverseNode(this.root, callback);
    }
    // 前序遍历
    preOrderTraverse(callback) {
        // 中序遍历所需的必要方法
        const preOrderTraverseNode = (_root, _callback = () => { }) => {
            // 从顶层开始遍历
            if (_root !== null) {
                _callback(_root.key);
                preOrderTraverseNode(_root.left, _callback);
                preOrderTraverseNode(_root.right, _callback);
            }
        }
        preOrderTraverseNode(this.root, callback);
    }
    // 后序遍历
    postOrderTraverse(callback) {
        // 中序遍历所需的必要方法
        const postOrderTraverseNode = (_root, _callback = () => { }) => {
            // 从顶层开始遍历
            if (_root !== null) {

                postOrderTraverseNode(_root.left, _callback);
                postOrderTraverseNode(_root.right, _callback);
                _callback(_root.key);//我在后面
            }
        }
        postOrderTraverseNode(this.root, callback);
    }

    insertNode(_root, _node) {
        if (_root.key > _node.key) {
            if (_root.left == null) {
                _root.left = _node;
            } else {
                this.insertNode(_root.left, _node);
            }
        } else {
            if (_root.right == null) {
                _root.right = _node;
            } else {
                this.insertNode(_root.right, _node)
            }
        }
    }

    // 插入
    insert(key) {
        let Node = this.Node;
        let node = new Node(key);
        if (this.root == null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node)
        }
    }

    //是否存在
    search(_key, _root) {
        if (!_root) {
            _root = this.root
        }

        if (!_root) {
            return false;
        } else if (_root.key == _key) {
            return true;
        }

        if (_root.key > _key) {

            if (_root.left == null) {
                return false;
            } else {

                if (_root.left.key == _key) {
                    return true
                } else {
                    return this.search(_key, _root.left)
                }
            }
        } else {
            if (_root.right == null) {
                return false
            } else {
                if (_root.right.key == _key) {
                    return true
                } else {
                    return this.search(_key, _root.right)
                }
            }
        }
    }

    // 工具函数
    find(_root, side) {
        if (!_root[side]) {
            return _root
        } else {
            return this.find(_root[side], side)
        }
    }

    // 最大值,不断查找右边
    max() {
        return this.find(this.root, 'right')
    }

    // 最小值
    min() {
        return this.find(this.root, 'left')
    }

    _remove(_node, _key, parentNode, side) {
        if (_key < _node.key) {
            return this._remove(_node.left, _key, _node, 'left')
        } else if (_key > _node.key) {
            return this._remove(_node.right, _key, _node, 'right')
        } else if (_node.key == _key) {

            // 顶层：移除根节点
            if (!parentNode) {
                this.root = null;
                return this.root;
            } else {
                if (!_node.left && !_node.right) {
                    // 删除的如果是叶节点
                    parentNode[side] = null
                } else if (_node.left && !_node.right) {
                    let tmp = _node.left;
                    parentNode[side] = tmp

                } else if (_node.right && !_node.left) {
                    let tmp = _node.right;
                    parentNode[side] = tmp
                } else {
                    let tmpRight = _node.right;

                    // 找到右侧子树的最小节点。__node
                    let __node = this.find(tmpRight, 'left');
                    // 删除这个节点。
                    this._remove(tmpRight, __node.key);
                    // 重新赋值
                    parentNode[side] = __node.key;
                }

                return this.root

            }
        }
    }

    remove(key) {
        if (this.search(key)) {
            return this._remove(this.root, key)
        } else {
            console.log('未找到key')
            return false;
        }
    }

}

let a = new BinarySearchTree();
a.insert(11)
a.insert(7)
a.insert(15)
a.insert(5)
a.insert(3)
a.insert(9)
a.insert(8)
a.insert(10)
a.insert(13)
a.insert(12)
a.insert(14)
a.insert(20)
a.insert(18)
a.insert(25)
a.insert(6)

// console.log(JSON.stringify(a))
// a.inOrderTraverse()
// console.log(a.search(10))
// a.postOrderTraverse((key)=>{console.log(key)})
// console.log('----------------')
// // console.log(JSON.stringify(a.remove(4)))
// console.log('----------------')
// console.log(JSON.stringify(a.remove(15)))

let data = [{
    id: '1',
    children: [{
        id: `1-1`,
        children: [{
            id: '1-1-1',
            children: [{
                id: '1-1-1-1'
            },{
                id:'1-1-1-2'
            }]
        },{
            id:'1-1-2',
            children: [{
                id: '1-1-2-1'
            },{
                id:'1-1-2-2'
            }]
        }]
    },{
        id:'2',
        children:[{
            id:'2-1'
        },{
            id:'2-2',
            children:[{
                id:'2-2-1'
            },{
                id:'2-2-2',
                children: [{
                    id: '2-2-2-1'
                },{
                    id:'2-2-2-2'
                }]
            }]
        }]
    }]
}]

const flatJson=(_data,arr)=>{
    if(!arr){
        arr=[]
    }
    
    for(let i=0;i<_data.length;i++){
        // console.log(_data[i].id)
        
        if(_data[i].children){
            flatJson(_data[i].children,arr)
        }

        arr.push(_data[i].id);
    }

    return arr;
}

console.log(flatJson(data))