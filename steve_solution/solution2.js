var Translator = (function(originalTranslator) {

  var polishLexicon = {
    merry: "Krux",
    christmas: "Lop"
  };

  originalTranslator.translateToPolish = function(userInput) {
    return this.performTranslation(polishLexicon, userInput);
  }

  return originalTranslator;


})(Translator || {});




















