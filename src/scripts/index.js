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

//edicion de elementos en el dom

element.textContent = 'new text here';
element.setAttribute('name', 'namevalue');
element.classList.add('yatusabe');
element.style.color = 'green';


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (){
  if (this.readyState == 4 && this.status == 200){
    console.log(this.responseText);
  }
};

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function (){
  if (this.readyState == 4 && this.status == 200){
    console.log(this.responseText);
  }
};

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
xhttp.send();


xhttp2.open("POST","https://jsonplaceholder.typicode.com/posts",true);

xhttp2.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
var params = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1
});
xhttp2.send(params);