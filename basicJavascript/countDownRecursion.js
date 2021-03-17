// Only change code below this line

function countdown(n){
    //If N is less than 1 stop
    if(n < 1){
      return [];
    }else{
      //Decrement the number
      const countArray = countdown(n - 1);
      console.log(countArray);
      //Pushes the number to the front of the array
      countArray.unshift(n);
      //Return array
      return countArray;
    }
  }
  // Only change code above this line