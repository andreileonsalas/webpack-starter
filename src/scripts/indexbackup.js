// let funciona localmente
//var genera una variable visible globalmente

// invocar inmediatamente se hacea asi (funcion con su ejecucion)(); rl primer parentesis es para la funcion, y el segundo la ejecuta


console.log('webpack starterkit');
const carID = 100;

function sendcars(...allcarsIds){
allcarsIds.forEach( id => console.log(id));

}
sendcars(100,200,555);
//
let car = {id:4000, style: 'bocho'};
let id,style; 
({id,style} = car);
//
console.log(id,style);
function startCars(car1,car2,car3,...rest) {
    console.log(rest);
}
let carIds = [1,2,3,4,5,6,7];
startCars(...carIds);
//

for (let i=0; i<5; i++) { 
    if (i === 3) 
      continue;
    console.log(i);
  }
  
  console.log("hola");

//

console.log( (5>44) ? 'yes' : 'no');

//

let year = 1964;
year <<= 1;
console.log(year);


//
function startcar (carid) {

  let message = 'Starting...';
  let startfn = function turnkey() {
    console.log(message);
  };
  startfn();
}
startcar(123);

//

let app = (function (){
  let carId = 123;
  let getId = function () {
    return carId;
    };
  return {
      getId: getId
  };
  })();

console.log ( app.getId() );

// constructor

function Car(id){
  this.carId = id;
  this.start = function() {
    console.log('start: ' + this.carId);
  };
}

let car2 = new Car(123);

console.log( car2.carId);
car2.start();


// constructor con prototipo

function Carproto(id){
  this.carId = id;
  
}

Carproto.prototype.start = function() {
  console.log('start: ' + this.carId);
};
let car3 = new Carproto(123);

console.log( car3.carId);
car3.start();

//

let carIds2 = [

  { carId: 123, style: 'sedan'},
  { carId: 456, style: 'convertible'},
  { carId: 789, style: 'sedan'}

];
carIds2.forEach (car => console.log (car));

carIds2.forEach ((car,index) => console.log (car,index));

//classes and modules

let carclass = new carclass(123);
console.log(car.id);
