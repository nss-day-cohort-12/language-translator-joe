var Translator = (function(spanish) {
  var spanishLexicon = {
    happy: "Feliz",
    holidays: "Navidad"
  }

  spanish.translateToSpanish = function(phraseArray) {
    // Maybe show a for in loop as example of searching through the object
    // Show example of object bracket notation
    // Show for loop example
    // Show Object.keys(spanishLexicon)
    console.log("phrase array Spanish", phraseArray);
    return spanishLexicon["happy"] + " " + spanishLexicon["holidays"];
  };

  return spanish;

})(Translator || {}); //Allows you to load files in html in any order