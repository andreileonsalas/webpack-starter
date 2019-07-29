console.log('webpack starterkit');
const carID = 100;

function sendcars(...allcarsIds){
allcarsIds.forEach( id => console.log(id));

}
sendcars(100,200,555);

let car = {id:4000, style: 'bocho'};
let id,style; 
({id,style} = car);

console.log(id,style);