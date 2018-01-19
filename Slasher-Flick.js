
function slasher(arr, howMany) {
    arr = arr.splice(howMany);
    return arr;
  }
  
  console.log(slasher(["burgers", "fries", "shake"], 1));