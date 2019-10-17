// var h1=document.getElementById("id");//dom method ..for css and html id
// var h1anotherway=document.querySelector("id");//this will also work...css syntax
// console.log(h1)
// //............
// var jsp=document.getElementsByClassName("jspiders");
// //normal dom object method for classes.
// var classanotherway=document.querySelector("jspider");//css syntax way
// console.log(jsp);


//.............................

// var h1=document.getElementById('id');
// h1.style.background="yellow";
// h1.style.padding="10px";
// h1.style.margin="10px"
// h1.style.borderRadius="10px";
// h1.style.border="2px solid red";
// h1.style.color="red";
// h1.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere illo voluptatibus amet sed qui dolore molestiae repudiandae ipsam sequi, atque ut dolor dignissimos est reiciendis commodi recusandae labore quam?"


//.......................for dom...........................

// let list=document.getElementsByTagName('li');
// let[...li]=list;
// li .forEach(x => {
//     console.log(x);
//     x.classList.add("jspiders");
//     x.innerHTML="hey jsp and qsp"
// });

//........................queryselectorAll................

// var odd=document.querySelectorAll("li:nth-child(odd)");
// var even=document.querySelectorAll("li:nth-child(even)");

// let[...x]=odd;
// x.forEach(x=>{
//     console.log(x);
//     x.classList.add("odd");
//     x.innerHTML="odd blocks";
// });

// let[...y]=even;
// y.forEach(y=>{
//     console.log(x);
//     y.classList.add("even");
//     y.innerHTML="even blocks";
// })



//....................addeventlistener

// var odd=document.querySelectorAll("li:nth-child(even)");
// var odd=document.querySelectorAll("li:nth-child(even)");

var oddbutton=document.getElementById("odd");
var evenbutton=document.getElementById("even");
var oddli=document.querySelectorAll("li:nth-child(odd)");
var evenli=document.querySelectorAll("li:nth-child(even)");
//access dom with events

oddbutton.addEventListener('mouseenter',()=>{
    console.log("mouse enter.....odd");
    oddli.forEach(odd =>{
        odd.classList.add("odd");
        odd.innerHTML="this odd "

    })
});
evenbutton.addEventListener('mouseenter',()=>{
    console.log("mouse enterd......even");
    evenli.forEach(even =>{
        even.classList.add("even");
        even.innerHTML="this is even";
        
    })
})


//Acesss dom with documen




