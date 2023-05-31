// addition using function
function add(a,b){
    return a+b;
}
var r1 = add(2,3);
console.log(r1);

// finding string length using function
function stringLength(str) {
    return str.length;
  }
    var result=stringLength('sai');
    console.log(result);

// arraysum  using function
function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  var result=arraySum([1,43,45,21]);
  console.log(result);

// fuction expression for addition 
var sum = function(x,y){
    var z=x+y;
    return z;
}

// function expression to check even number
var evenNumber = function(x) {
    return x % 2 == 0;
  };
  
  var result = evenNumber(2);
  console.log(result); 

// function to check divisibleby5
var divisibleby5 = function(arr){
    var x=0;
    for(i=0;i<arr.length;i++){
    return x%5===0;
  }
}
  
  var result =divisibleby5([30,25,65,45,80]) ;
  console.log(result); 
  
// Immediately Invoked Function Expression (IIFE) with Argument
(function(name) {
    console.log("Hello, " + name );
  })("saiteja");
  
// Immediately Invoked Function Expression (IIFE) with Addition
var result = (function(a, b) {
   var c=a+b;
   return c;
  })(2, 3);

  console.log(result);


//   Immediately Invoked Function Expression (IIFE) with subraction
var result = (function(a, b) {
   var c=a-b;
   return c;
  })(12, 3);
 
  console.log(result);


//  Immediately Invoked Function Expression (IIFE) with multiplication
var result = (function(a, b) {
    var c=a*b;
    return c;
   })(20, 3);
  
   console.log(result); 


//    Immediately Invoked Function Expression (IIFE) with division
var result = (function(a, b) {
    var c=a/b;
    return c;
   })(20, 10);
  
   console.log(result);   

//    IIFE to Filter Even Numbers from an Array
(function() {
    var numbers = [16,53,75,88,94,72,33,41,65];
    var evenNumbers = [];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
  
    console.log(evenNumbers); 
  })();
    
//   IIFE to Filter odd Numbers from an Array
(function() {
    var numbers = [21,53,56,55,78,77,66,67];
    var oddNumbers = [];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
      }
    }
  
    console.log(oddNumbers); 
  })();

// checking given numbers are even or not using arrow function
var  isEven = num => num % 2 === 0;

console.log(isEven(4)); 
console.log(isEven(7)); 
console.log(isEven(10)); 


// checking given array is even or not using arrow function
const isEvenArray = arr => arr.every(num => num % 2 === 0);

console.log(isEvenArray([2, 4, 6])); 
console.log(isEvenArray([6, 8, 8])); 
console.log(isEvenArray([2, 4, 9])); 


