const firstButton = document.getElementById('button1');
const secondButton = document.getElementById('button2');
const thirdButton = document.getElementById('button3');

firstButton.addEventListener('click', () => {
    firstButton.style.border = "5px solid black";
})
secondButton.addEventListener('click', () => {
    secondButton.style.border = "5px solid black" == secondButton.style.border === "none"
})
secondButton.addEventListener('click', () => {
    firstButton.style.border = "none"
    secondButton.style.border = "5px solid black"
})
firstButton.addEventListener('click', () => {
    secondButton.style.border = "none"
    firstButton.style.border = "5px solid black"
})

