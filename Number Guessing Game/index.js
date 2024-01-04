const submit = document.querySelector('#btn')
const previous = document.querySelector('.previous')
const remaining = document.querySelector('.remaining')

const num = Math.floor((Math.random()*100+1))
console.log(num)
const show = document.querySelector('.show')
let attempts = 10;
let a = []
let input = 0;
submit.addEventListener('click', function(){
    input = document.querySelector('#input').value;

    if(input > 100 || input < 1)
    show.innerHTML = 'Enter a valid number !!!'
    else{
        if(attempts > 0){
            attempts--;
            a.push(input)
        }
    
        if(input > num && attempts > 0)
        show.innerHTML = 'Too High !!!';
        
        else if(input < num && attempts > 0)
        show.innerHTML = 'Too Low !!!';
            
        else if(input == num)
        show.innerHTML = 'Congratulations You win !!';
        
        else if(attempts == 0) 
        show.innerHTML = `You Lost !! Game is over, Number of attempts = 0`

        previous.innerHTML = `Previous Guesses: ${a}`;
        remaining.innerHTML = `Guesses Remaining: ${attempts}`;
    }
})