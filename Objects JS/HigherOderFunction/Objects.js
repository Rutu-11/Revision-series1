
// OBJECTS MAPPING
// You have an array of objects that stores firstName and lastName values of your friends as follows:

let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  // use the map() method to iterate over the array and join the values of firstName and lastName as follows
  
  // Output should look like
  
  // ["Nrupul Dev", "Prateek Shukla", "Yogesh Bhat"]
  
  let result = users.map((ele)=>{
          return ele.firstName+" "+ele.lastName;
  })
  console.log(result)

//   use filter along with map() method to iterate over the array and output the names who lives in Banglore Output should look like

// ["Nrupul Dev", "Prateek Shukla"]

let names = users.filter((ele)=>{
    return ele.place=='Banglore'
})
.map((ele)=>{
    return ele.firstName+" "+ele.lastName;
})
console.log(names);


// ARRAY STRING FIRST CHARACTER - HOF
// Given an array of string generate an array with their first characters

 let Input = ["Masai", "School"]

// Sample Output - ["M", "S"]

let ans = Input.map((ele)=>{
    return ele[0];
})
console.log(ans);


// ARRAY STRING LENGTH - HOF
// Given an array of strings print the length of each string

 let data = ["apple", "windows", "ubuntu"]

 let lengths = data.map(ele=>ele.length);
 console.log(lengths)


//  ARRAY STRING PATTERN- HOF
// Given an array of string generate an array whose first or last character is a

let array =["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

let output = array.filter((ele)=>{
    return ele[0] == 'a' || ele[ele.length-1]=='a';
})

console.log(output)