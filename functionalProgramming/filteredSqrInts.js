const squareList = arr => {
    // Only change code below this line
    //Filtered through the array with only positive numbers and no decimals
    return arr.filter(num => num > 0 && num % parseInt(num) === 0)
    //Maps out the positive whole numbers squared
    .map(num => Math.pow(num, 2));
    
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);