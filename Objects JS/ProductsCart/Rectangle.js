// Rectangle Object
// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle


var Rectangle={
    length: 10,
    breadth:5,
    area: function(){
        return this.length * this.breadth
    },

    perimeter: function(){

        return 2*(this.length+this.breadth)
    }
}

var area = Rectangle.area();
var perimeter = Rectangle.perimeter();
console.log(area,  perimeter)