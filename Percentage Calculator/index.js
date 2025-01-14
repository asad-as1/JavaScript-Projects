const btn = document.querySelector("button");
const eng = document.querySelector('.eng');
const maths = document.querySelector('.maths');
const hin = document.querySelector('.hin');
const sci = document.querySelector('.sci');
const com = document.querySelector('.com');
const btext = document.querySelector('.text');

btn.addEventListener('click', function() {
    let engl = parseInt(eng.value);
    let math = parseInt(maths.value);
    let hind = parseInt(hin.value);
    let scie = parseInt(sci.value);
    let comp = parseInt(com.value);

    if (isNaN(engl) || isNaN(math) || isNaN(hind) || isNaN(scie) || isNaN(comp)) {
        btext.innerText = "Please Enter marks in all subjects";
    } else {
        let per = (engl + math + hind + scie + comp) / 5;
        btext.innerText = `Your Percentage is ${(per).toFixed(2)} %`;
    }
});
