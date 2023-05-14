// AMAZON OBJECT DATA
// Given amazon data, We need to find the following :

// Find All Products Name and rating
// Find Average Rating
// Find the product having minimum price
var amazon = [
        {name:"Speakers", price:5400, rating:4},
        {name:"headphones", price:3000, rating:3},
        {name:"playstation",price:20000, rating:5},

        
];

let total =0;
var average, min=amazon[0].price;
amazon.forEach((ele)=>{
    // console.log(ele.name,ele.rating)
    var obj={
        name: ele.name,
        price:ele.price,
        rating:ele.rating,

        name_rating: function(){
            total += ele.price;
            return this.name+":"+ this.rating;
        },

        average : function(){
            return total/amazon.length;
        },

        min : function(){
            if(min> ele.price){
                min = ele.price;
            }
            return min;
        }
    }

    const ans = obj.name_rating();
    console.log(ans);

 average = obj.average();
 min = obj.min();
})

console.log('Average Rating' ,average)
console.log('the product having minimum price', min)