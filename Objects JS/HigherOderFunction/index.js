//Given an array of numbers print the square of those numbers

let arr = [1,2,3,4,5];

let square = arr.map((ele)=>{
    return ele**2;
})
console.log(square)

// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]


let odd = arr.filter((ele)=>{
    return ele%2==1;
})
console.log(odd)

//Given an array of numbers print the product of all numbers

let product = arr.reduce((acc, curr)=>{
    return acc*curr; 
},1)
console.log(product)

//Given an array of numbers find the sum of odd elements
let sum = arr.filter((ele)=>{
    return ele%2==1;
})
.reduce((acc, curr)=>{
    return acc+curr
},0)
console.log(sum);

//Given an array of numbers find the sum of cubes if the number is divisible by 3

let cubeSum = arr.map((ele)=>{
    return ele**3;
})
.filter((ele)=>{
    return ele%3==0;
})
.reduce((acc, curr)=>{
    return acc+curr
},0)

console.log(cubeSum)


