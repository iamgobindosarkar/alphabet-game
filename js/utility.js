function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// function getARandomAlphabet(){
//     // Get or create alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets);

//     // get a random index 0-25
//     const randomNumber = math.random() * 25;
//     const index = math.round(randomNumber);
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;
// }

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}