const names =["Ada", "Brendan", "Ali"];
const eventName = 'surprice';
function writeCards(names,eventName){
  const result=[];
  for(let i = 0; i < names.length; i++){
    result.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return result;
}
writeCards(names,eventName);

function countDown(num){
  let i=num;
  while(i>-1){
    console.log(i);
    i--;
  }
}
countDown(10);