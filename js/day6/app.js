console.log("hii js");
//! Array: Array is huge block of memory which is used to store the homogenous and hetrogenous type of data
//! DEC
//let array=[]
//console.log(typeof array)

//! homogenous
// let array=[10,32,64,97]
// console.log(array)

// let array=[10,"hii",{},[],null,undefined,152n]
// console.log(array)

// let array=[10,20,30,40];
//& 1.push
//! push method is used to add an element at last of an array
// console.log(array);
// let result=array.push(1000);
// console.log(result);//6
// console.log(array);//(6) [10,20,30,40,50,1000]

//& pop
// let array=[10,20,30,40,50]
//! pop()
//! Remove the last element from an array.
// console.log(array.pop());
// console.log(array);

//& unshift
//!
// let array= [10,20,30,40,50]
//! unshift()
//! It used to remove an element First index from an array.
// console.log(array.unshift());
// console.log(array)

//& shift() ==>remove the first element from an array
// let array=[10,29,30,40,50]
// console.log(array.shift());
// console.log(array)

//!
// let Array=[]
// console.log(Array)
// console.log(Array.push(200))
// console.log(Array)

//!
// let array=[]
// console.log(array.unshift(2000))
// console.log(array)
// console.log(array.shift())   //undefined

//& slice()
//! slice() is used to add an element in an array by int he formate of starting to ending positon by passing the parametere
//! it will not affect the original Array
// let array=[10,20,30,40,54]
// console.log(array.slice(0,3))//10,20,30

// let array=[];
// console.log(array.slice(0,2))

//& splice()
//! splice() is used to remove perticular element in an array by passing position
//! it will affect th original Array

// let array = [10, 20, 30, 40, 50];
// console.log(array);
// let result = array.splice(0, 2, "sri", "dinesh");
// console.log(result);
// console.log(array);