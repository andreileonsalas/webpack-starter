import {Car} from './models/car.js';

let car = new Car(123);
console.log(car.id);

console.log(location.host.toString());

console.log(window.innerWidth);

let timeoutId = setTimeout ( //funciona una sola vez
  function (){
    console.log('1 second passed');
  },1000
);


let intervalId = setInterval ( //funciona varias veces en intervalo
  function (){
    console.log('1 second passed interval');
  },1000
);

clearInterval(intervalId);


console.log(location.href);
console.log(document.location.href);


let element = document.getElementById('first');

element.style.color = 'blue';

console.log(element);

let elements = document.getElementsByClassName('p1');

elements[0].style.color = 'red';

//custom de andrei para iterar
Array.from(elements).forEach((el) => {
  // Do stuff here
  el.style.color='red';
  console.log(el.tagName);
});