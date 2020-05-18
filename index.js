// // Code your solutions in this file

const eventNames='birthday'
function writeCards(names , eventNames){
  let newArr = [];
  for(let i=0 ; i<names.length ; i++){
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${eventNames}your gift!`);
  }
  return newArr;
}
writeCards(["Ada", "Brendan", "Ali"], eventNames);

function countDown(num){
  while(num>=0){
    console.log(num);
    num --;
  }
}
countDown(10);