function truncateString(str, num) {
	if(str.length <= num){
	  return str;
	}
	else if(num > 3){
		str=str.slice(0,num-3);
		str=str.concat("...");
	}else if(num <3 ){
		str=str.slice(0,num);
		str=str.concat("...");
		
	}
	return str;
	
	
   
    }
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));