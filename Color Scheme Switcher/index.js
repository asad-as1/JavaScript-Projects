const box = document.querySelectorAll('.box');
const container =  document.querySelector('.container');
let cnt = 0, prevc, preve;

box.forEach(function(button){
    button.addEventListener('click',function(e){
        const color = window.getComputedStyle(e.target).backgroundColor;
        container.style.backgroundColor = color;
        // box.style.backgroundColor = color;
        e.target.style.backgroundColor = 'white';
        if(cnt == 1){
            preve.style.backgroundColor = prevc;
            cnt--; 
        }
        prevc = color;
        preve = e.target;
        cnt++;
})
})