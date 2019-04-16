class FindClass{
    constructor(){
        this.datas=new Array(4).fill(0)
    }

    add(item){
        let arr_index=parseInt(item/32);//确定所在数组索引
        let bit_index=item%32;//确定二进制位移
        let value=this.datas[arr_index];
        value=value|1<<bit_index;
        this.datas[arr_index]=value;
    }

    isExist(item){
        let arr_index=parseInt(item/32);//确定所在数组索引
        let bit_index=item%32;//确定二进制位移
        let value=this.datas[arr_index]&1<<bit_index;
        return value!==0 ;
    }
}
// var arr=[0,6,88,7,73,34,10,99,22]//最大99
// var bit_map= new FindClass();
// for(let i=0;i<arr.length;i++){
//     bit_map.add(arr[i])
// }
// var sort_arr=[];
// for(let i=0;i<99;i++){
//     if(bit_map.isExist(i)){
//         sort_arr.push(i)
//     }
// }
// console.log(sort_arr)
// var value=0;
// value=value|1<<3
// value=value|1<<9
// value=value|1<<19
// value=value|1<<20
// console.log(Math.pow(2,3)+Math.pow(2,9)+Math.pow(2,19)+Math.pow(2,20))

class BoolmFilter{
    constructor(max_count,error_rate){
        this.bit_map=[]//位图映射变量
        this.max_count=max_count;//最多可存放的数量
        this.error_rate=error_rate;//错误率
        this.bit_size=Math.ceil(this.max_count*(-Math.log(this.error_rate)/(Math.log(2)*Math.log(2))));//变量长度
        this.hash_count=Math.ceil(Math.log(2)*(this.bit_size/this.max_count))//哈希数量
    }
    //把key散列为k个值
    set_bit(bit){
        let arr_index=Math.floor(bit/32);
        let bit_index=Math.floor(bit%32);
        this.bit_map[arr_index]|=(1<<bit_index);
    }
    // 读取位的值
    get_bit(bit){
        let arr_index=Math.floor(bit/32);
        let bit_index=Math.floor(bit%32);
        return this.bit_map[arr_index]&=(1<<bit_index)
    }

    add(key){
        if(this.isExist(key)){
            return -1
        }

        for(let i=0;i<this.hash_count;i++){
            // 获取哈希，传不同的种子（i）
            let hash_value=murmurhash3_32_gc(key,i);
            this.set_bit(Math.abs(Math.floor(hash_value%(this.bit_size))));
        }
    }
}
