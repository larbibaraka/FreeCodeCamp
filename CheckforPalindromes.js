function palindrome(str) {
    // remove sepcial characters first
    var filter1=str.replace(/[^a-zA-Z0-9]/g,'');
    console.log(filter1)
    // make it all lowercase or uppercase as you like :D
    var filter2 = filter1.toLowerCase();
    str=filter2;
    var stringArray=str.split("");
    stringArray=stringArray.reverse();
    var reversed=stringArray.join("");
    if(reversed==str){
      return true;
    }
    return false;
}
 
console.log(palindrome("0_0 (: /-\ :) 0-0"));