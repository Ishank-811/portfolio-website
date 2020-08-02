// function hidden(){
// let btn1= document.querySelectorAll("#graphic-btn"); 
// let para= document.querySelectorAll(".category-hidden"); 
// //btn1= addEventListener("click", function(){
	 
     
//      if(para.style.display=='none'){
//      para.style.display='block';
// console.log("hello");

//     }
//    else{
//        para.style.display='block' ; 
//     }

//})
$(document).ready(function (){


$('#graphic-btn').click(function(){
$('.category-active').css({display:'none'});
console.log("graphic show")
}); 

$('#graphic-btn').click(function(){
$('.category-hidden').css({display:'block'})
console.log("work hidden")
});
$('#graphic-btn').click(function(){
$('.category-hidden2').css({display:'none'});
console.log("graphic hidden"); 
});


$('#work-btn').click(function(){
$('.category-active').css({display:'block'});
}); 

$('#work-btn').click(function(){
$('.category-hidden').css({display:'none'});
}); 
$('#work-btn').click(function(){
$('.category-hidden2').css({display:'none'});
console.log("graphic hidden"); 
});



$('#react-btn').click(function(){
$('.category-active').css({display:'none'});
console.log("work hidden")
});
$('#react-btn').click(function(){
$('.category-hidden').css({display:'none'});
console.log("graphic hidden"); 
});

$('#react-btn').click(function(){
$('.category-hidden2').css({display:'block'});
console.log("react show"); 
}); 







});





