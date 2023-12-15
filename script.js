// const devinettes = ["Que fait une vache quand elle a les yeux fermés?", 
// "Quelle plante ne pousse pas même si on l'arrose?",
// "Pourquoi les souris n'aiment pas les devinettes?",
// "Pourquoi les pigeons roux n'aiment-ils pas l'eau?",
// ];
const devinettes = ["Devinette #1", "Devinette #2", "Devinette #3", "Devinette #4"];

const correctAnswers = ["lait concentré", "pied", "langue au chat", "roucoul"];
const charades = ["Mon premier est la capitale de l'Italie.\nMon second est une voyelle.\nMon troisième est un fleuve d’Europe.\nMon tout est une plante qui sent bon.",
"Mon premier se balade sur la tête des enfants.\nMon deuxième est le contraire féminin de « moche ».\nQuand on ouvre mon tout, on la referme rapidement.",
"Les trains finissent leur voyage dans mon premier.\nMon deuxième augmente chaque année.\nMon tout est un espace petit mais très pratique!",
"Pour fêter la nouvelle année, on s’embrasse sous mon premier.\nMon second est un préfixe qui indique la répétition.\nMon troisième prend son temps.\nMon quatrième est un nombre premier inférieur à 5.\nMon tout s’amuse à cacher le trésor."]

// replace all elements of charades \n with <br/>
for (let i = 0; i < charades.length; i++) {
    charades[i] = charades[i].replace(/\n/g, "<br/>");
}

let currentCharadeIndex = 0;
let score = 0;

function displayDevinette() {
    const charadeElement = document.getElementById("devinette");
    charadeElement.textContent = devinettes[currentCharadeIndex];

    // make the previous and next buttons do nothing and look disabled
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");

    if (currentCharadeIndex === 0) {
        previousButton.style.visibility = "hidden";
    } else {
        previousButton.style.visibility = "visible";
    }
    if ((currentCharadeIndex == devinettes.length-1) | (currentCharadeIndex >= score))
        nextButton.style.visibility = "hidden";
    else {
        nextButton.style.visibility = "visible";
    }

    document.getElementById("user-input").disabled = false;

}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const correctAnswer = correctAnswers[currentCharadeIndex];

    // if correct answer is contained in the user input
    if (userInput.includes(correctAnswer.toLowerCase())) {
        // set bravo to "Bravo!"
        const bravoElement = document.getElementById("bravo");
        bravoElement.textContent = "Bravo!";
        const indiceElement = document.getElementById("indice");
        if (currentCharadeIndex < 3)
            indiceElement.innerHTML = "La prochaine devinette est débloquée! 🎉 <br/>Trouve-la à l'aide de la charade ci-dessous,<br/>puis clique sur le bouton \"Suivant\"";
        else
            indiceElement.innerHTML = "Tu as trouvé toutes les devinettes!<br/>Voici la charade ultime 💪<br/> Celle qui te guidera au trésor!🤑";
        // print the charade in the result element
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = charades[currentCharadeIndex];
        // delete the user input
        document.getElementById("user-input").value = "";
        document.getElementById("user-input").disabled = true;

        score++;

        const nextButton = document.getElementById("next");
        nextButton.style.visibility = "visible";
    } else {
        alert("Faux! Essaie encore!");
    }
}

// build previous and next functions
function move(x) {
    currentCharadeIndex = (currentCharadeIndex + x) % devinettes.length;
    // delete the result element
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";
    // delete the bravo element
    const bravoElement = document.getElementById("bravo");
    bravoElement.textContent = "";
    // delete the indice element
    const indiceElement = document.getElementById("indice");
    indiceElement.textContent = "";
    displayDevinette();
}

// Initial display
displayDevinette();
