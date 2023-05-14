// TOTAL PRICE
// Calculate the total price with the given quantity and price

// var e_commerce = {
//   products : ["earphone","headphone","earpods"],
//   quantity : [4,3,2],
//   price : [700, 800, 1000],

//   total_price : // write code here
// };

var e_commerce = {
    products : ["earphone","headphone","earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price : function(){
      var length = this.products.length;
      var total=0;
      for(var i=0; i<length; i++){
          total +=this.price[i] * this.quantity[i];
      }
      // console.log(total);
      return total;
    },
  } 
     var total = e_commerce.total_price();
     console.log(total);