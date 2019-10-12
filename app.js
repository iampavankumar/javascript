// // var str ="king  ";
// // var str1='kong ';
// // var str3=`goal 
// // <h1>good follow</h>
// // <p> lorem epsum</p>
// // <h1>head</h1>`;

// // console.log (str3);
// // document.write(str3);

// // var s="  anu my love";
// // var age="20";
// // var sal=10000;
// // var com="wipro";

// // console.log("my name is "+s+"  my age is   "+age+"my salary is   "+sal+"my company is  "+com);
// // document.write(`my anme is  ${s} and  my age is ${age} and i work for${com} and iam getting salaary${sal}`);
// // console.log(typeof s);
// // console.log(typeof sal);
// // //number
// // var num =10;
// // var num1=10.10;
// // var num2=1/1;
// // console.log(typeof num);
// // console.log(typeof num1);
// // console.log(typeof num2);


// // var test=true;
// // var test1=false;
// username ="raffi";
// var username;
// console.log(username);
// non-primitive data types
// let lang=['java','python',undefined,null,143,'ruby'];
// var array=['my','own','project','my','style'];
// var array1=new Array('atp','good','practice');
// console.log(lang[2]);
// console.log(array);
// console.log(array1);


//---------length---//



// var array3=Array(7);
// console.log(array3);
// var array4=Array.of(1,2,3,4,5);
// console.log(array4);
// var str="pavan is good boy";
// console.log(typeof(array3));
// console.log(Array.isArray(str));
// console.log(Array.isArray(array37))


//----string---to Array--3 methods----//

// var str="iam good boy";
// var strtoarray=str.split(' ');
// console.log(strtoarray);
// var es6=Array.from(str);
// console.log(es6);
// let[...king]=str;
// console.log(king);
// console.log(king.join(''));

//-///---concate array----//////



// let array1=['array','love'];
// let array2=['danger','dove'];
// let concating=array1.concat(array2,'king');
// console.log(concating);

// let total=[...array1,...array2,'pavan'];


//////------reverse the string-------///////

// var str ='good';
// var reverse=[...str].reverse().join('');
// console.log(reverse);





///-----4th-oct-------//////
//----------------------------Object------------------------------------


// let user={
//     name:'anu',
//     sal:20000,
//     com:'cgi',
//     skills:['java','python','first','cc']}
// console.log(user.name);
// console.log(user.skills);


//-------literals----//
///----constructor-way------///


// let obj=new Object();
// obj.name='thopu';
// obj.age=20;
// obj.sal=30000;
// obj.com='tcs';
// console.log(obj);


//--------another method--//

// let name='prasanth';
// let age=20;
// let rel='wife';
// let gf='divya';
// let ud={
// name:name,
// age:age,
// gf:gf,
// rel:rel,
// salary:28888
// };
// console.log(ud);

// let ud1={
//     name,
//     age,
//     gf,
//     rel,
//     salary:29900
//     };
//     console.log(ud1);
    


//-------multiple objects in  array----//





// var user=[
//     {
//         name:'pavan',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },
//     {
//         name:'raju',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },
//     {
//         name:'raffie',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },"selling"
    
// ];

// console.log(user);




////------------5th oct-----////




// let users={
//       name:'raffie',
//       age:22,
//       sal:234567,
//       com:'ibm'
// };
// let me =Object.create(users);
// me.name='manu';
// me.age=34;
// me.com='tcs';
// console.log(me);
// console.log(users);




/////---------object to array like object---//

// let users={
//           name:'raffie',
//           age:22,
//           sal:234567,
//           com:'ibm'
//     };
// let emp=Object.entries(users);
// emp.forEach(element => {console.log(emp);    
// });



// /////---------freezing------///


// let emp1={
//   'emp-name':'raffie',
//     'emp-age':22,
//     sal:234567,
//     com:'ibm'
// };
// let check=Object.freeze(emp);
// emp['emp-name']='king';
// console.log(check);

//---------object hold the data--//


// let emp={
//       'emp-name':'raffie',
//         'emp-age':22,
//         sal:234567,
//         com:'ibm',
//         alldata()
//         {
// console.log(`${this['emp-name']}
// and ${this['emp-age']}`);
//         }
//   };

// console.log(emp.alldata);

//............................Functions..............................................

//..................1)ananymous function()


//...................2)function expression
// let x=function () {
// console.log("hello function expression");

// }
// x();



//..........................IIFE
// (function (){
//     alert(2+2);
//     console.log("hello invoke IFE");
//     var username="abcdef";
//     var pwd="098767";
// })();
// console.log(username,pwd);

//................by es-6 way.............
// {
//     console.log("helo");
//     alert(2+2+3);
//          var username="abcdef";
//          var pwd="098767";
// }
// console.log(username,pwd);//if we use let it will be showed uncaught error

//.....................4.Naming function................

// function msg() {
//     prompt("promp here ");
//     confirm("conform here");
// }
// msg();


//................................function constructor way......................
// let user=new Function(console.log("hello world"));
// let user1=new Function(console.log(alert(2+2+4)));

//...................return function....................
// function user(username){
//     return username;
// }
// console.log(user("pavan"));
// console.log(user("shahsi"));


//................................without return statement.....................

// function user(username,pwd){
//     console.log(username,pwd);
    
// }
// user("pavan",0989709);
// user("hello ","papppa");


//.....................Arguments....................................

function  numbers(){
    let args=arguments;
    console.log(args);
    console.log(typeof(args));
    console.log((Array.isArray(args)));
    
    
    
}
numbers(10,20,10,908,87)

// //---------------------------------
// function number() {
//     let args=arguments;
// console.log(typeof(args));
//     console.log(args);
//     console.log(Array.isArray(args));
//     let[...spread]=args;
//     console.log(args);
//     console.log(typeof(spread));
//     console.log(Array.isArray(spread));
// }
// number(10,20,30,40,50);









//-------------------------------Function closer--------------------------------------

// var simpleText="hello simple text";
// function jspiders() {
//     let jspText=`hello jsp how r u?`;
//     console.log(jspText);
//     function qspiders() {
//         let qspText=`hello qsp how r u?`;
//         console.log(qspText);
//         console.log(jspText);//closure here
//         console.log(simpleText);
//     }
//     qspiders();
// }
// jspiders();

// var str=new Array(1,2);
// console.log(typeof(str));
//----------------------------------------hoisting-----------------









//----------------------------------indclude()--------------------------------------------
// let lang=['node js','reactjs','sql','java','html','css'];
// let test=lang.includes("nodejs");
// console.log(test);
// if(lang.includes("node js")){
//     alert("hello if condition");
// }
// else
// {
//     alert("elseblock");
// }




//...........................................Reduce method()...............................

// var numbers=[10,20,30,40,50,60];
// var reduce=numbers.reduce(function (a,b){
//     console.log(a);
//     console.log(b);
//     return a+b;
    
// });
// console.log(reduce);

// let reducewithfatArrow=numbers.reduce((a,b)=>a+b);
// console.log(reducewithfatArrow);


//.............................sortMethod()...................................

// let lang=['javascript','node js','reactjs','firebase','html','css','typescript'];
// let sortMethod=lang.sort();
// console.log(sortMethod);

// //for numbers mandatory we use fat arrow function...........................

// let numbers=[10,1000,27,89,98,65,1000,198768,1,2,45,6];
// let numbersort=numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbersort);
// let decrease=numbers.sort((a,b)=>{
//     return b-a;
// });
// console.log(decrease);



//................IndexOf and removing duplicates....................

// var array=['a','b','c','d','e','a','b','c','d'];
// var test=array.filter(function(value,index,array){
//     // console.log(array);
//     // console.log(value);
//     // console.log(index);
//     return array.indexOf(value)==index;
    
// });
// console.log(test);

// let es6=new Set(array);
// console.log(es6);



//.................mapmethod().............................

// var number=[1,2,5,20];
// var result=number.map(x=>x*2 );
// // var forEach=number.forEach
// console.log(result);
// console.log(number);



//.....................reverse method.........................

// let number=[1,20,32,79,07];
// let rev=number.reverse();
// console.log(rev);
// console.log(number);





// //.....................toString()----------------------
// let player=['dravid','sachin','robin','virat'];
// var arraytostring=player.toString();
// var arraywithjoin=player.join('7')


// console.log(arraytostring);//dravid,sachin,robin,virat
// console.log(arraywithjoin);//dravid7sachin7robin7virat
// console.log(typeof(arraywithjoin));//string
// console.log(typeof(player));//obj
// //reversing
// let [...arrayjust]=arraywithjoin;
// let str=arrayjust.reverse().join('');
// console.log(str);




// //.................................
// function username(name){
//     return [...name].reverse().join('');
// }
// console.log(username('pavan kumar').toUpperCase());
