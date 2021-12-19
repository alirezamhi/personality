let marrige = document.getElementById('marige');
let egucate = document.getElementById('educate');
console.log(egucate);
let button =document.querySelector('button');
button.addEventListener('click' , handler);
function handler(){
    let div = document.getElementById('result');
    div.innerHTML=`<p>شما ${marrige.value} هستید و دارای مدرک ${egucate.value} هستید</p>`;
}