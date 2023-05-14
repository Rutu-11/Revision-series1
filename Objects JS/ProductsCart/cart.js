
//Products Cart Object
// Given an input of products in the below format (Name Quantity Price)
// Input
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}
// The object must have a method called total which calculates the total values of items (multiplying quantity of each with its price)
// Sample output for the above case 290


var names = ["Rice", "Dal", "Salt"];
var quantities = [2, 3, 1];
var prices = [60, 50, 20];

var data = [];
var sum = 0;
for(let i=0;i< names.length; i++){
        var obj={
            name:names[i],
            quantity:quantities[i],
            price:prices[i],

            total : function(){
                return (this.quantity)*(this.price)
            }
        }
        sum+=obj.total();
        data.push(obj);

}
console.log(data);
console.log(sum);