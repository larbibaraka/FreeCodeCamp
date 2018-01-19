function findLongestWord(str) {
    var stringArray=str.split(" ");
       var max=stringArray[0];
       for (var i = 1; i < stringArray.length; i++) {
         if(max.length<stringArray[i].length){
           max=stringArray[i];
         }
       }
       return max.length;
   }
   
   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));