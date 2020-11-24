function sumTriple (x, y) {
  if (x == y) {
    return 3 * (x + y);
    } 
   else
   {
    return (x + y);
   }
 }
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));


function get_max(num1, num2, num3)
{
    var max = Math.max(num1, num2, num3);
    return max;
}

console.log(get_max(20,3,5));

//Assignment - Functions Optional Challenges
  
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// The first numbers are:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// So if n were 6, the sum of 1+1+2+3+5+8 would be 20
// Don't hardcode the sequence.

let fibonacci = [];

function numbers( n ) {
    for( let i = 0; i < n; i++) {
        if( i < 2) {
            fibonacci.push(1)
        } else if( i >= 2) {
            fibonacci[i] = fibonacci[ i - 2] + fibonacci[ i - 1 ]
        }
    }
    
    console.log( fibonacci );
}

numbers( 4 );