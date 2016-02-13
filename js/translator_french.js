// Changing the var does not affect the assignment of the internal methods to "Translator", but 
// now I have three objects that all contain the three methods polluting the global namespace.
var Translator = (function(french) {
  var frenchLexicon = {
    happy: "joyeux",
    holidays: "Noël"
  }

  french.translateToFrench = function(phraseArray) {
    console.log("phrase array French", phraseArray);
    return frenchLexicon["happy"] + " " + frenchLexicon["holidays"];
  };

  return french;

})(Translator);