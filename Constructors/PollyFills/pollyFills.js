
let arr = new Array(1,2,3,4,5);

Array.prototype.myForEach = function(fun){
    for(let i=0; i<this.length; i++){
        fun(this[i],i);
    }
}
arr.myForEach((ele,ind)=>{
    arr[ind] = ele*5;
})

console.log(arr);


let arr2 = new Array(1,3,5,7,2,8);

Array.prototype.myMap = function(fun){
    let newArray = [];
    for(let i=0; i<this.length; i++){
        let ele = fun(this[i]);
        //console.log(ele)
        newArray.push(ele);
    }
    return newArray;
}
let data = arr2.myMap((ele)=>{
    return ele*3;
})
console.log('data', data);


Array.prototype.myFilter = function(fun){
    let newArray = [];
    for(let i=0; i<this.length; i++){
           let ans=fun(this[i]);
           if(ans){
            newArray.push(this[i]);
           }
            
    }
    return newArray;
}

let ans = arr2.myFilter((ele)=>{
    return ele%2==0;
},0)

console.log(ans);

Array.prototype.myReduce = function(fun, initial){
    initial = initial !== undefined ? initial: this[0];

    let res = initial;
    for(let i=initial; i<this.length; i++){
        res = fun(res, this[i]);
    }
    return res;
}
let arr3 = [1,2,3,10,5,4,7]
let sum = arr3.myReduce((acc, curr)=>{
    return acc+curr;
})

console.log(sum);

let result = arr3.myFilter((ele)=>{
    return ele%2==1;
})
.myReduce((acc, curr)=>{
    return acc + curr;
})

console.log(result);