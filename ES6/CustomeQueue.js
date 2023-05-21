// CUSTOM QUEUE
// Create you own custom queue data structure with following properties and methods ( use es6 classes ):-
// length
// enQueue() - to push element at back
// deQueue() - to remove element from front
// enQueueThree() - to push three element at back in one go
// deQueueThree() - to remove three element from front
// Suppose three elements are not present to add or remove
//  - If there are two elements only remove both.
//  - If there is only one element remove that
//  - If queue is empty print some error message

class QUEUE{
    constructor(){
        this.item = [];
    }

    getLength(){
        return this.item.length;
    }
    push(ele){
        this.item.push(ele);
        return this.item;
    }

    pop(){
        this.item.pop();
        return this.item;
    }
}

let que = new QUEUE();
que.push(1);
que.push(7)
console.log(que.getLength())