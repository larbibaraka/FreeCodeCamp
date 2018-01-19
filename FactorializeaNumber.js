function factorialize(num) {
   
    // Step 1 : check if the num is under 0 (num<0) so return 
    if( num < 0){
        return "error num must be grater or equal to 0 ";
    }
    // now if all is fine calculate facto
    if(num === 0){
        return 1;
    }
  
    else{
        return num * factorialize(num-1)
    }

  
   
   
}
  
  console.log(factorialize(-5));