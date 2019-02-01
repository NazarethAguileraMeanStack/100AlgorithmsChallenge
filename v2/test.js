function binarySearch(arr, value){
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let middle = Math.floor((leftPointer + rightPointer) /2 );
    
      while (leftPointer != rightPointer && leftPointer < rightPointer){
          if (arr[middle] === value){
              return middle;
          } else {
              if (value > arr[middle]){
                  leftPointer = middle + 1;
              }
              if (value < arr[middle]){
                  rightPointer = middle -1;
              }
          }
          middle = Math.floor((leftPointer + rightPointer) / 2);
      }
      return (arr[middle] === value) ? middle : -1;
  }

  console.log(binarySearch([1,2,3,4,5], 6));