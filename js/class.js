// //non-primitive data
// // let languages=["node.js","java","python",10,undefined,true,false,20.10];
// // console.log(languages[2]);
// var array=["java","node.js","python"];
// // console.log(array.pop[2]);
// var array1 =new Array("node",
// "expressjs");
// console.log(array);
// console.log(array1);
// console.log(array.length);
// var array3=Array.of("pavan","pk");
// console.log(array3);
// var array4=Array(4,5,6);
// console.log(array4);
//-------------------- type of array initlize--------------------------------------------------
// var arr=Array['pavan','prasanth'];
// var arr1=new Array('c+','c++','SQL');
// var arr2=Array.of('jio','BSNL');
// var arr4=Array(5);
// var str=`prasanth is good boy`;
// console.log(typeof(arr,arr1,arr2,arr4));
// console.log(Array.isArray(arr2));
// console.log(Array.isArray(str));
// /////----------------------string int Array------------------------------------------------------
// var str=`hello, welcome to jspiders`;
// var strwithArray=str.split('');//ES-5
// console.log(strwithArray);

// var str="this is array.from";
// var es6=Array.from(str);
// console.log(es6);
// var str1="Spread method";
// let[...pavan]=str1;
// console.log(pavan);
//----------------------------------
let arr=[];
let array1=['java','python','c+'];
let array2=['node','express'];
let concatarr=array1.concat(array2,"SQL");
console.log(concatarr);//es-5;
let totalArray=[...array1,...array2,'prasanth'];
console.log(totalArray);
var name ="pavan";
var reverse=[...name].reverse().join('');
console.log(reverse);

