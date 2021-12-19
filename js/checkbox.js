let button = document.querySelector('button');
button.addEventListener("click" , handler);
function handler(){
    let inputs = document.querySelectorAll('input');
    let html = '<table>';
    for(let input of inputs){
        if(input.checked){
            html += `<tr><td>${input.value}</td></tr>`;
        }
    }
    html += '</table>';
    document.getElementById('result').innerHTML = html;
}
