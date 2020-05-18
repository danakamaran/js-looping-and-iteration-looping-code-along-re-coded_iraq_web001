const names =["Ada", "Brendan", "Ali"];
const eventName = 'surprice';
function writeCards(girls,eventName){
  const result=[];
  for(let i = 0; i < girls.length; i++){
    result.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return result;
}
writeCards(girls,eventName);
function countDown(num){
  let i=num;
  while(i>-1){
    console.log(i);
    i--;
  }
}
countDown(10);