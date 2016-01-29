var Translator = (function() {
  var gibberishLexicon = {
    happy: "Murfiston",
    holidays: "Bodinkadoo"
  }

  return {
    translateToGibberish: function(phraseArray) {
      console.log("phrase array", phraseArray);
      return gibberishLexicon["happy"] + " " + gibberishLexicon["holidays"];
    }
  }

})();