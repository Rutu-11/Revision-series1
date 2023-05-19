function UserInfo(name, location) {
    this.name=name;
    this.location = location;

}
let user = new UserInfo('Rutu','Belgaum');
console.log(user);

function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`
}
let servefood = serveFood.bind(user,'Pizza');
// servefood();
console.log(servefood())

function serveIn(name, location, food) {
    let user1 = new UserInfo(name, location);
   return serveFood.call(user1,food)
}
console.log(serveIn('Riya',"Jammu","Pizza"));

function billNote(total) {
    return `${this.name}'s bill is INR ${total}`
}
let total = billNote.bind(user, 500);
console.log(total());

function generateInVoice(name, location, quantity, price) {
    let user2 = new UserInfo(name, location);

    let total = quantity*price;
   return billNote.apply(user2,[total]);
}
console.log(generateInVoice("Nisha","Pune",3,100));
export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
