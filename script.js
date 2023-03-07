const firstButton = document.getElementById('button1');
const secondButton = document.getElementById('button2');
const fourthButton = document.getElementById('button4');
const fifthButton = document.getElementById('button5');
const sixthButton = document.getElementById('button6');
const eighthButton = document.getElementById('button8');
const ninthButton = document.getElementById('button9');
const tenthButton = document.getElementById('button10');
const twelfthButton = document.getElementById('button12');
const thirtiethButton = document.getElementById('button13');
const fourtiethButton = document.getElementById('button14');
const sixteenButton = document.getElementById('button16');
const seventeenButton = document.getElementById('button17');
const eighteenButton = document.getElementById('button18');
const nineteenButton = document.getElementById('button19');
const twentiethButton = document.getElementById('button20');
const twentyonwhButton = document.getElementById('button21');
const twentytwoButton = document.getElementById('button22');
const twentythreeButton = document.getElementById('button23');
const twentyfourButton = document.getElementById('button24');
const hiddendiv1 = document.getElementById('hidden1');
const hiddendiv2 = document.getElementById('hidden2');
hiddendiv1.style.display = "none"
hiddendiv2.style.display = "none"

firstButton.addEventListener('click', () => {
    secondButton.style.border = "none";
    firstButton.style.border = "5px solid black"
    hiddendiv1.style.display = "block"
    hiddendiv2.style.display = "none"
});
secondButton.addEventListener('click', () => {
    firstButton.style.border = "none";
    secondButton.style.border = "5px solid black";
    hiddendiv1.style.display = "none"
    hiddendiv2.style.display = "block"
});
fourthButton.addEventListener('click', () => {
    fourthButton.style.border = "5px solid black"
    fifthButton.style.border = "none"
    sixthButton.style.border = "none"
});
fifthButton.addEventListener('click', () => {
    fifthButton.style.border = "5px solid black";
    fourthButton.style.border = "none"
    sixthButton.style.border = "none"
});
sixthButton.addEventListener('click', () => {
    sixthButton.style.border = "5px solid black"
    fourthButton.style.border = "none"
    fifthButton.style.border = "none"
});
eighthButton.addEventListener('click', () => {
    eighthButton.style.border = "5px solid black"
    ninthButton.style.border = "none"
    tenthButton.style.border = "none"
});
ninthButton.addEventListener('click', () => {
    ninthButton.style.border = "5px solid black"
    eighthButton.style.border = "none"
    tenthButton.style.border = "none"
});
tenthButton.addEventListener('click', () => {
    tenthButton.style.border = "5px solid black"
    ninthButton.style.border = "none"
    eighthButton.style.border = "none"
});
twelfthButton.addEventListener('click', () => {
    twelfthButton.style.border = "5px solid black"
    thirtiethButton.style.border = "none"
    fourtiethButton.style.border = "none"
});
thirtiethButton.addEventListener('click', () => {
    thirtiethButton.style.border = "5px solid black"
    twelfthButton.style.border = "none"
    fourtiethButton.style.border = "none"
});
fourtiethButton.addEventListener('click', () => {
    fourtiethButton.style.border = "5px solid black"
    twelfthButton.style.border = "none"
    thirtiethButton.style.border = "none"
});
sixteenButton.addEventListener('click', () => {
    sixteenButton.style.border = "5px solid black"
    seventeenButton.style.border = "none"
    eighteenButton.style.border = "none"
});
seventeenButton.addEventListener('click', () => {
    seventeenButton.style.border = "5px solid black"
    sixteenButton.style.border = "none"
    eighteenButton.style.border = "none"
});
eighteenButton.addEventListener('click', () => {
    eighteenButton.style.border = "5px solid black"
    sixteenButton.style.border = "none"
    seventeenButton.style.border = "none"
});
nineteenButton.addEventListener('click', () => {
    nineteenButton.style.border = "5px solid black"
    twentiethButton.style.border = "none"
    twentyonwhButton.style.border = "none"
});
twentiethButton.addEventListener('click', () => {
    twentiethButton.style.border = "5px solid black"
    nineteenButton.style.border = "none"
    twentyonwhButton.style.border = "none"
});
twentyonwhButton.addEventListener('click', () => {
    twentyonwhButton.style.border = "5px solid black"
    twentiethButton.style.border = "none"
    nineteenButton.style.border = "none"
});
twentytwoButton.addEventListener('click', () => {
    twentytwoButton.style.border = "5px solid black"
    twentythreeButton.style.border = "none"
    twentyfourButton.style.border = "none"
});
twentythreeButton.addEventListener('click', () => {
    twentythreeButton.style.border = "5px solid black"
    twentytwoButton.style.border = "none"
    twentyfourButton.style.border = "none"
});
twentyfourButton.addEventListener('click', () => {
    twentyfourButton.style.border = "5px solid black"
    twentytwoButton.style.border = "none"
    twentythreeButton.style.border = "none"
});