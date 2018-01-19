 function titleCase(str) {
        var filter = str.toLowerCase();
        var splitedStr=filter.split(" ");
      for (var i = 0; i < splitedStr.length; i++) {
          splitedStr[i]= splitedStr[i].charAt(0).toUpperCase()+splitedStr[i].slice(1);
        }
        return splitedStr.join(" ");
    }
    console.log(titleCase("I'm a little tea pot"));