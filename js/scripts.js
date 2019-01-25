var vowels = ["a","e","i","o","u","A","E","I","O","U"];
var vowelTwo = ["a","e","i","o","u","y","A","E","I","O","U","Y"]
var punctuation = []
var pigLatin = function(string){
  var splitString = string.split(' ')
  var stringAy = splitString.map(function(word){
    if(vowels.includes(word[0])){
      return word + "way"
    }
    else{
      var wordArray = word.split('')
      if(!(vowels.includes(wordArray[0]))){
        wordArray.push(wordArray[0]);
        wordArray.shift();
        for(var i = 0; i<wordArray.length; i++){
          if(!(vowelTwo.includes(wordArray[0]))){
            wordArray.push(wordArray[0]);
            wordArray.shift();
          }
          else if(wordArray[0] === ("u" || "U") && wordArray[(wordArray.length-1)] === ("q" || "Q")){
            wordArray.push(wordArray[0]);
            wordArray.shift();
          }
          else{
            break;
          }
        }
      }
      else{
      }
    //  wordArray.push(word[0]);
    //  wordArray.shift();
      return wordArray.join('') + "ay";
  }
  }); //end stringAy map function
  return stringAy.join(' ') ;
}; //end pigLatin function


$(function(){
  $("#myForm").submit(function(event){
    debugger;
    event.preventDefault();
    var sentence = $("#myInput").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
  });
}); //end document ready function



/*
Add ay to end of a word
add w to end of a word with no  */
