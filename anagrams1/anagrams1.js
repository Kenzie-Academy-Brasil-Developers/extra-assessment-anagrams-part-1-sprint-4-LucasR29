const button = document.getElementById("findButton");
let anagramsList = []

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(word){
    let anagrams = document.createElement('span')
    for(i in palavras){
        if(alphabetize(word) == alphabetize(palavras[i]) && word.length == palavras[i].length){
            anagramsList.push(palavras[i])
        }
    }
    anagrams.textContent = anagramsList
    document.body.appendChild(anagrams)
    return anagramsList
}

button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
});








