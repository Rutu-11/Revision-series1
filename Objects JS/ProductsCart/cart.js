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