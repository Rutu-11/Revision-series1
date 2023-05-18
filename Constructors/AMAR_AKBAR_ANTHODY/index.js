
function createObject(name, prof, place){
    this.name = name,
    this.prof = prof,
    this.place = place
}

var obj = createObject.prototype.borrowSkills = function(person, skills){
    console.log(person, this)
    return `${this.name} borrowing ${skills} from ${person.name} who is ${this.prof} by proffession `
}

var amar = new createObject('Amar','Singer','Goa');
var akbar = new createObject('Akabar',"Magician",'mumbai');
var Anthony = new createObject('Anthony', 'chef','Kashmir' )
console.log(amar.borrowSkills.call(amar,akbar,'Cooking'));

// console.log(amar)