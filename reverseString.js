function reverseString(str){
    /**Method 1
     * using array
    */
    //Step 1 : transform the str into an array using array.split
    myArray = str.split("");
    // Step 2 : reverse the array
    myArray = myArray.reverse();
    // Step 3 : transform this array into str again
    str = myArray.join("");
    return str;
    /**Method 2
     * using for and an array
    */
    var myArray2=[];
    for(var i=str.length-1; i>=0;i--){
        myArray2.push(str[i]);
    }
    str = myArray2.join("");
    return str;
}
console.log(reverseString("hello"));
  