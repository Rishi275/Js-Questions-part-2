// -
// - Explain the difference between forEach, map, filter, and reduce.
// - Define a callback function before you use it in forEach, map, filter or reduce.
// - Use forEach to console.log each name in the names array.
// - Use forEach to console.log each country in the countries array.
// - Use forEach to console.log each number in the numbers array.
// - Use map to create a new array by changing each country to uppercase in the countries array.
// - Use map to create an array of countries length from countries array.
// - Use map to create a new array by changing each number to square in the numbers array
// - Use map to change to each name to uppercase in the names array


// foreach  - The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array. It takes a callback function as an argument and applies it to each element of the array.

// example -
// let array = [1,4,7,3,7,9,5];
// let sum = 0;
// array.forEach(myfun);
// function myfun(i){
//     sum = sum + i;
// }
// console.log(sum)

// map- it is also a method in js which allow to iterate over an array and it also perform the operation and manupulation on your required element of the array , it does not directly for all the element of the array ,ehre map funtion only works on your based on the condition

// filter- this method of js use to filter some specific elements of the array based on some particular condition

// reduce - JavaScript reduce() is a higher order function used in data manipulation that reduces an array to a single value. It takes two parameters: an accumulator and the current element of an array

// let array = [3,7,8,5,9,3,7,3];

// let sum = array.reduce((accumulator, currentValue)=>{
// return accumulator + currentValue;
// },0)
// let avg = sum/array.length;
// console.log(avg);





// - Use forEach to console.log each name in the names array.

// let array = ['shivam', 'risihi' ,'ido', 'dmskd','mskm', 'slsj']

// let names =[];
//  array.forEach((x)=>{
//     names.push(x);
// })
// console.log(names)



// - Use map to create a new array by changing each country to uppercase in the countries array.

// let countries = ['india','Pakistan','Nepal', 'Bhutan'];
// let newArr = countries.map(x=>x.toUpperCase())
// console.log(newArr)




// - Use map to create a new array by changing each number to square in the numbers array

// let numArr = [1, 3, 5, 7, 3, 8, 9];
// let squArr = numArr.map(x => x * 2)
// console.log(squArr)

