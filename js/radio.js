let button = document.querySelector('button');
button.addEventListener('click' , handler);
function handler(){
        let marriage =document.querySelectorAll('input[name="marriage"]');
        let education =document.querySelectorAll('input[name="education"]');
        let a , b;
        for(let input of marriage){
            if(input.checked){
                a = input.value;
                break;
            }
        }
        for(let input of education){
            if(input.checked){
                b = input.value;
                break;
            }
        }
        let result = document.getElementById('result');
        result.innerHTML = `<p>شما ${a} هستید و دارای مدرک ${b} هستید</p>`;
}