function chunkArrayInGroups(arr, size) {
    var arrar=[];
              
    for(var i=0;i<arr.length;i=i+size){
         sliced=arr.slice(i, i+size);
      arrar.push(sliced);
      }
    
    return arrar;
  }
console.log(chunkArrayInGroups(["a", "b", "c", "d","e"], 2));