let names = [ 'Michael', 'Melissa', 'Andres' ];
let values = [ true, {}, [], 2, 'awesome' ];

// Concat
let arr1 = [ 'a', 'b', 'c' ];
let arr2 = [ 'd', 'e', 'f' ];

console.log( 'CONCAT' );
console.log( arr1.concat( arr2 ) );

// Slice
let animals = [ 'ant', 'bison', 'camel', 'duck', 'elephant' ];

console.log( 'SLICE' );
console.log( animals.slice( 2 ) );
console.log( animals.slice( 2, 4 ) );
console.log( animals.slice( 1, 5 ) );

// Splice
let months = [ 'Jan', 'March', 'April', 'June' ];

console.log( 'SPLICE' );
months.splice( 1, 0, 'Feb' );
console.log( months );

months.splice( 4, 1, 'May' );
console.log( months );


