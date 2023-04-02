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
const fifthiethButton = document.getElementById('button15');
const sixteenButton = document.getElementById('button16');
const seventeenButton = document.getElementById('button17');
const eighteenButton = document.getElementById('button18');
const nineteenButton = document.getElementById('button19');
const twentiethButton = document.getElementById('button20');
const twentyonwhButton = document.getElementById('button21');
const twentytwoButton = document.getElementById('button22');
const twentythreeButton = document.getElementById('button23');
const twentyfourButton = document.getElementById('button24');
const twentyfiveButton = document.getElementById('button25');
const oneButton = document.getElementById('button01');
const twoButton = document.getElementById('button02');
const hiddendiv1 = document.getElementById('hidden1');
const hiddendiv2 = document.getElementById('hidden2');
const hiddendiv3 = document.getElementById('hidden3');
const hiddendiv4 = document.getElementById('hidden4');
const corrrectAnswersOfDemonSlayer = ["Quinta Luna Menguante", "Muzan kibutsuji", "Urokodaki Sakonji"]
const corrrectAnswersOfMinecraft = ["Filo V", "Skyblock", "Hypixel"]

const resultsOfMinecraft = [];
const resultsOfDemonSlayer = [];
hiddendiv1.style.display = "none"
hiddendiv2.style.display = "none"
hiddendiv3.style.display = "none"
hiddendiv4.style.display = "none"
const user = document.getElementById('user');
let userName = '';

user.addEventListener('change', (e) => {
    if (e.target.value.length >= 3) {
        firstButton.disabled = false
        secondButton.disabled = false
        firstButton.style.backgroundColor = "#ffcccc";
        firstButton.style.color = "black";
        secondButton.style.backgroundColor = "#ffcccc";
        secondButton.style.color = "black";
        userName = e.target.value;
        console.log(userName)
        let importantH1 = "Gracias " + userName + " por responder la trivia Quizzitch"
        document.getElementById('important-h1').innerHTML = importantH1;
        let importantH2 = "Gracias " + userName + " por responder la trivia Quizzitch"
        document.getElementById('important-h2').innerHTML = importantH2;
    }
})
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
    resultsOfMinecraft[0] = "Filo III"
});
fifthButton.addEventListener('click', () => {
    fifthButton.style.border = "5px solid black";
    fourthButton.style.border = "none"
    sixthButton.style.border = "none"
    resultsOfMinecraft[0] = "Filo IV"
});
sixthButton.addEventListener('click', () => {
    sixthButton.style.border = "5px solid black"
    fourthButton.style.border = "none"
    fifthButton.style.border = "none"
    resultsOfMinecraft[0] = "Filo V"
});

eighthButton.addEventListener('click', () => {
    eighthButton.style.border = "5px solid black"
    ninthButton.style.border = "none"
    tenthButton.style.border = "none"
    resultsOfMinecraft[1] = "Skyblock"
});
ninthButton.addEventListener('click', () => {
    ninthButton.style.border = "5px solid black"
    eighthButton.style.border = "none"
    tenthButton.style.border = "none"
    resultsOfMinecraft[1] = "Creativo"
});
tenthButton.addEventListener('click', () => {
    tenthButton.style.border = "5px solid black"
    ninthButton.style.border = "none"
    eighthButton.style.border = "none"
    resultsOfMinecraft[1] = "Survival"
});

twelfthButton.addEventListener('click', () => {
    twelfthButton.style.border = "5px solid black"
    thirtiethButton.style.border = "none"
    fourtiethButton.style.border = "none"
    resultsOfMinecraft[2] = "Hycraft"
});
thirtiethButton.addEventListener('click', () => {
    thirtiethButton.style.border = "5px solid black"
    twelfthButton.style.border = "none"
    fourtiethButton.style.border = "none"
    resultsOfMinecraft[2] = "Hypixel"
});
fourtiethButton.addEventListener('click', () => {
    fourtiethButton.style.border = "5px solid black"
    twelfthButton.style.border = "none"
    thirtiethButton.style.border = "none"
    resultsOfMinecraft[2] = "UniversoCraft"
})



sixteenButton.addEventListener('click', () => {
    sixteenButton.style.border = "5px solid black"
    seventeenButton.style.border = "none"
    eighteenButton.style.border = "none"
    resultsOfDemonSlayer[0] = "Tercera Luna Creciente"
});
seventeenButton.addEventListener('click', () => {
    seventeenButton.style.border = "5px solid black"
    sixteenButton.style.border = "none"
    eighteenButton.style.border = "none"
    resultsOfDemonSlayer[0] = "Quinta Luna Menguante"
});
eighteenButton.addEventListener('click', () => {
    eighteenButton.style.border = "5px solid black"
    sixteenButton.style.border = "none"
    seventeenButton.style.border = "none"
    resultsOfDemonSlayer[0] = "Primera Luna Menguante"
});
nineteenButton.addEventListener('click', () => {
    nineteenButton.style.border = "5px solid black"
    twentiethButton.style.border = "none"
    twentyonwhButton.style.border = "none"
    resultsOfDemonSlayer[1] = "Muzan Kibutzuji"
});
twentiethButton.addEventListener('click', () => {
    twentiethButton.style.border = "5px solid black"
    nineteenButton.style.border = "none"
    twentyonwhButton.style.border = "none"
    resultsOfDemonSlayer[1] = "Yushiro Tamano"
});
twentyonwhButton.addEventListener('click', () => {
    twentyonwhButton.style.border = "5px solid black"
    twentiethButton.style.border = "none"
    nineteenButton.style.border = "none"
    resultsOfDemonSlayer[1] = "Tamayo Kunado"
});
twentytwoButton.addEventListener('click', () => {
    twentytwoButton.style.border = "5px solid black"
    twentythreeButton.style.border = "none"
    twentyfourButton.style.border = "none"
    resultsOfDemonSlayer[2] = "Urokodaki Sakonji"
});
twentythreeButton.addEventListener('click', () => {
    twentythreeButton.style.border = "5px solid black"
    twentytwoButton.style.border = "none"
    twentyfourButton.style.border = "none"
    resultsOfDemonSlayer[2] = "Jigoro Kuwajima"
});
twentyfourButton.addEventListener('click', () => {
    twentyfourButton.style.border = "5px solid black"
    twentytwoButton.style.border = "none"
    twentythreeButton.style.border = "none"
    resultsOfDemonSlayer[2] = "Yoriichi Tsugikuni"
});
fifthiethButton.addEventListener('click', () => {
    document.getElementById('resultsOfMinecraft').innerHTML = resultsOfMinecraft
    document.getElementById('resultsOfMinecraft').style.display = "block"
})
twentyfiveButton.addEventListener('click', () => {
    document.getElementById('resultsOfDemonSlayer').innerHTML = resultsOfDemonSlayer
    document.getElementById('resultsOfDemonSlayer').style.display = "block"
})
oneButton.addEventListener('click', () => {
    hiddendiv3.style.display = "block"
    hiddendiv4.style.display = "none"
})
twoButton.addEventListener('click', () => {
    hiddendiv3.style.display = "none"
    hiddendiv4.style.display = "block"
})
twentyfiveButton.addEventListener('click', () => {
    if (resultsOfDemonSlayer.length === 3) {
        document.getElementById('answer2').style.display = "block"
        document.getElementById('correctAnswersOfDemonSlayer').style.display = "block"
        document.getElementById('correctAnswersOfDemonSlayer').innerHTML = corrrectAnswersOfDemonSlayer
    }
    document.getElementById('answer3').style.display = "block"
})
fifthiethButton.addEventListener('click', () => {
    if (resultsOfMinecraft.length === 3) {
        document.getElementById('answer1').style.display = "block"
        document.getElementById('correctAsnwersOfMinecraft').style.display = "block"
        document.getElementById('correctAsnwersOfMinecraft').innerHTML = corrrectAnswersOfMinecraft
    }
    document.getElementById('answer4').style.display = "block"
})