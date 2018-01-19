 function repeatStringNumTimes(str, num) {
       var ch="";
        for (var i = 0; i < num ; i++) {
         ch=ch.concat(str);
        }
        return ch;
      }
console.log(repeatStringNumTimes("abc", 3));