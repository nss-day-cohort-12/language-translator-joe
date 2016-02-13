var Translator = (function(originalObject) {

  var italianLexicon = {
    merry: "Buon",
    christmas: "Natale"
  };

  originalObject.performTranslation = function(lexicon, userInput) {
    var wordArray = userInput.split(" ");

    var translated = "";

    for (var i = 0; i < wordArray.length; i++) {
      var currentWord = wordArray[i];
      translated += " " + lexicon[currentWord];
    }

    return translated;

  };

  originalObject.translateToItalian = function(userInput) {
    return this.performTranslation(italianLexicon, userInput);
  };

  return originalObject;


})(Translator || {});















