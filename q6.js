
// - Explain the difference between some and every

// - Use some to check if some names' length greater than seven in names array
// - Use every to check if all the countries contain the word land

// - Explain the difference between find and findIndex.

// - Use find to find the first country containing only six letters in the countries array
// - Use findIndex to find the position of the first country containing only six letters in the countries array
// - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.




// --------------------------------------------------------------------------------------------------------------------------------------------


// - Explain the difference between some and every

// The every() array method in JavaScript is used to check if all the elements of the array satisfy the callback function condition or not. The some() array method in JavaScript is used to check if at least one of the elements passes the callback test or not.
// example = 
// let arr = [1,2,3,4,5,6,7]
// let arrcheck = arr.some(e=>e==2);
// console.log(arrcheck)
// let arrcheck2 = arr.every(e=>e==2);
// console.log(arrcheck2)

// --------------------------------------------------------------------------------------------------------------------------------------------


// - Use some to check if some names' length greater than seven in names array
// let nameArr = ['rjksss','ssmkmksmk', 'ssmks','swiwio', ' xksmsokalal'];
// let newArr = nameArr.some(x=>x.length>7)
// console.log(newArr)


// --------------------------------------------------------------------------------------------------------------------------------------------



// - Use every to check if all the countries contain the word land
// let countries = ['Finland', 'Iceland', 'Ireland', 'Switzerland']
// let newArr = countries.every(x=>x.includes("land"));
// console.log(newArr)

// --------------------------------------------------------------------------------------------------------------------------------------------



// - Explain the difference between find and findIndex.

// --------------------------------------------------------------------------------------------------------------------------------------------



// - Use find to find the first country containing only six letters in the countries array
// find - find is use to display the array first ocurance on condition in form of stirng as written in array

// let countries = ['Finland', 'arland','Iceland', 'Ireland', 'Switzerland'];
// console.log(countries.find(x=>x.length==6))

// --------------------------------------------------------------------------------------------------------------------------------------------



// - Use findIndex to find the position of the first country containing only six letters in the countries array
// findIndex - findindex is use to display the array first ocurance on condition in form of index number 
// let countries = ['Finland', 'arland','Iceland', 'Ireland', 'Switzerland'];
// console.log(countries.findIndex(x=>x.length==7))

// --------------------------------------------------------------------------------------------------------------------------------------------