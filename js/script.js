// function play(){
    
//     // step-1 Hide THe Home Screen : to hide the screen add hidden class and the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     // Show the playground
//     const playSection = document.getElementById('play-ground');
//     playSection.classList.remove('hidden');

// }

function continueGame(){
    // step-1 Generate a random alphabate
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet is', alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}