const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let d1=31;
let d2=30;
let d3=28;
let m = parseInt(userInput[0]);

if(m == 1 ||m == 3 || m == 5 || m == 7|| m == 8 || m == 10|| m ==12)
{
  console.log(d1);

}
else if(m ==4 || m == 6 ||m == 9 ||m == 10){
  console.log(d2);
}
else if(m == 2){
  console.log(d3)
}
else
{
  console.log('Error')
}

});
