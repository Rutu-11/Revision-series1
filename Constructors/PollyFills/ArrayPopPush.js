
function MyArray(){
    this.length = arguments.length;
    for(let i=0; i<arguments.length; i++){
        this[i] = arguments[i];
    }
//     Object.defineProperty(this,'length',{    
    // to-avoid printing length property  if we use this code this need to define  this.length in myPop && muPush function
//         value:0,
//         enumerable:false,
//         writable: true,
//    })
}

let arr = new MyArray(1,2,3,4,5);
console.log(arr);

MyArray.prototype.myPop = function(){
    let last = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return last;
}

MyArray.prototype.myPush = function(ele){
    this[this.length] = ele;
    this.length++;
}
let last = arr.myPop();
console.log(last);
console.log(arr);
arr.myPush(8);
console.log(last);
console.log(arr);