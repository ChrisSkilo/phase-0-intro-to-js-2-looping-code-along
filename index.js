// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

const names = ["Charlie", "Samip", "Ali"];
const events= ["birthday"];
function writeCards(names, events){
    const newArray =[];
    for(const name of names){
        newArray.push(`Thank you, ${name}, for the wonderful ${events} gift!`);
    }
    return newArray;
}
writeCards(names,events);



  function countDown(x){
    while (x>=0) {
        console.log(x);
        x--
    }
    return x;
}
countDown(10);