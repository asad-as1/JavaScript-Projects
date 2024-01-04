const pass = document.querySelector(".in2")
const btn = document.querySelector(".btn")
let len = document.querySelector(".in");

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*"
const n = str.length;

const generate = () => {
    let max = 0;
    let word = ""
    
    if(len.value === "")
    max = 8;
    else max = len.value;

    for(let i=0; i<max; i++) {
        let idx = (Math.random() * n)
        word += str.charAt(idx)
    }
    len.value = "";
    return word;
}

btn.addEventListener("click", ()=> {
   
    pass.value = generate()
    pass.style.color = "black"
})

function copyPassword() {
    pass.select();
    document.execCommand("copy");
}
