let btn  = document.querySelector('button');
let head2 = document.querySelector('h2');
let click = 0;

btn.addEventListener('click', function() {
    
    if(click == 0) {
        head2.innerHTML = 'Friends';
        head2.style.color = 'green';
        btn.innerHTML = 'Remove Friend';
        btn.style.backgroundColor = '#dadada';
        btn.style.color = 'black';
        click = 1;
    }
    else {
        head2.innerHTML = 'Stranger';
        head2.style.color = 'red';
        btn.innerHTML = 'Add Friend';
        btn.style.backgroundColor = 'rgb(8, 145, 100)';
        click = 0;
    }   
})