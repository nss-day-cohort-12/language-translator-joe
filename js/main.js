var button = document.getElementById("btn");
button.addEventListener("click", translatePhrase)

function translatePhrase(phrase) {
  // Grab the phrase to be translated
  var phraseArray = document.getElementById("user-phrase").value.split(" ");

  console.log("user phrase", phraseArray);
  console.log("translated to Gibberish", Translator.translateToGibberish(phraseArray));
  console.log("translated to Spanish", Translator.translateToSpanish(phraseArray));
  console.log("translated to French", Turtle.translateToFrench(phraseArray));
  console.log("Translator", Translator);    
}


