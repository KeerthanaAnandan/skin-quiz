
let  first = sessionStorage.getItem("first");
let  second = sessionStorage.getItem("second");
let third = sessionStorage.getItem("third");
let fourth = sessionStorage.getItem("fourth");

let  best = sessionStorage.getItem("best");
let  good = sessionStorage.getItem("good");
let worst = sessionStorage.getItem("worst");

let mess;
let typo;
//oily - combination - dry - normal
//first
if (
  first >  second &&
  first > third &&
  first > fourth
 
) {
//  typo = "first";
 mess = [
  "You have \"Oily Skin\"",   
  "Oily skin produces an excess of sebum that causes the skin to appear shiny and feel greasy—especially throughout the T-Zone (forehead, nose and chin). If you have oily skin, you may be more likely to have enlarged pores, develop acne blemishes and be more prone to acne breakouts.",
 ];
// document.querySelector(".firsthide").style.display = "block";
}

// second
else if (
  second >  first &&
  second > third  &&
  second > fourth
 
) {
//  typo = "second ";
 mess = [
"You have \"Combination Skin\"",
"Combination skin includes areas that are dry as well as oily—with the T-Zone commonly being oily, and the cheeks being either dry or normal. ",
 
 ]; 
//  document.querySelector(".secondhide").style.display = "block";
}
//third
else if (
 third >  second &&
 third >  first && 
 third > fourth

) {
//  typo = "Third";
 mess = [
   "You have \"Dry Skin\"",
   "Dry skin is typically dull and may become rough, flaky or even scaly. It often feels tight or less elastic and may be prone to showing more visible lines. In addition, it may become itchy or irritated. "

   
 ];
// document.querySelector(".thirdhide").style.display = "block"; 
}
//fourth
else 
if (
  fourth >  second &&
  fourth > third &&
  fourth > first 
 
) {
// typo = "fourth";
 mess = [
   "You have \"Normal Skin\"",
           "Normal skin is balanced—feeling neither dry nor oily. It is not prone to breakouts, flakiness, feeling slick or tight. Pores are generally small, the skin's texture is smooth, and it is less likely to be prone to sensitivity or blemishes.",

 ];
// document.querySelector(".firsthide").style.display = "block";
}


//first === second
else if (
 first ==  second &&
 first >  third &&
 first > fourth
 
) {
// typo = "second, oil and combo so combo";
mess = [
  "You have \"Combination Skin\"",
  "Combination skin includes areas that are dry as well as oily—with the T-Zone commonly being oily, and the cheeks being either dry or normal. ",
   
   ]; 
  //  document.querySelector(".secondhide").style.display = "block";

 
}

//SECOND == THIRD
else if (
 second ==  third &&
 second >  first &&
 second > fourth

) {
  // typo = "second, combi-dry and combo";
 mess = [
  "You have \"Combination Skin\"",
  "Combination skin includes areas that are dry as well as oily—with the T-Zone commonly being oily, and the cheeks being either dry or normal. ",

   
 ];
// document.querySelector(".thirdhide").style.display = "block"; 
   

// document.querySelector(".thirdhide").style.display = "block";
 

 
}
//third ==  fourth
else if (
 fourth == third &&
 fourth > second &&
 fourth > first

) {
  //  typo = "dry and normal , so normal";
 mess = [
  "You have \"Normal Skin\"",
  "Normal skin is balanced—feeling neither dry nor oily. It is not prone to breakouts, flakiness, feeling slick or tight. Pores are generally small, the skin's texture is smooth, and it is less likely to be prone to sensitivity or blemishes.",

 ];
// document.querySelector(".firsthide").style.display = "block";
  
}
//fourth == first
else if (
fourth == first &&
fourth > second &&
fourth > third 

) {
  // typo = "normal and oily so combo";
 mess = [
  "You have \"Combination Skin\"",
  "Combination skin includes areas that are dry as well as oily—with the T-Zone commonly being oily, and the cheeks being either dry or normal. ",
  ];
//  document.querySelector(".firsthide").style.display = "block";
 
}



 

  


else{
 {
//  typo = "default";
mess = [
  "You have \"Combination Skin\"",
  "Combination skin includes areas that are dry as well as oily—with the T-Zone commonly being oily, and the cheeks being either dry or normal. ",
];
// document.querySelector(".firsthide").style.display = "block";
 }
}



//second-validations
//first
if (
  best >  good &&
  best > worst 
 
) {
// typo = "Confident Person";
 typo = [
  "Your results shows that you take good care your skin, keep up the good work! however it is really important to maintain the skin care routines and below are the proper steps to follow/add on to your routine",
 ];
// document.querySelector(".besthide").style.display = "block";
}

// good
else if (
  good >  best &&
  good > worst 
 
) {
 //typo = "Confidence level : neutral ";
 typo = [
"Your results shows that you take good care but it isn’t enough, there are large areas you need to improve your routines, but hey, it isn’t too late to start or add new routines, below are the best practice and must have steps to add on to your routines",
 
 ]; 
// document.querySelector(".goodhide").style.display = "block";
}
//worst
else if (
 worst >  good &&
 worst >  best 

) {
 //typo = "Low confidence level";
 typo = [
   "Your results shows that you are not doing great with taking care of your skin, don’t get disappointed! it’s never too late to start a new skin care routine, below are the steps you can start with.",
   
 ];
// document.querySelector(".worsthide").style.display = "block"; 
}


//best === good
else if (
 best ==  good &&
 best >  worst 
 
) {
// typo = "Confident Person";
typo = [
 "Your results shows that you take good care your skin, keep up the good work! however it is really important to maintain the skin care routines and below are the proper steps to follow/add on to your routine",
];
 
}

//good == worst
else if (
 good ==  worst &&
 good >  best 

) {
 //typo = "Low confidence level";
 typo = [
   "Your results shows that you take good care but it isn’t enough, there are large areas you need to improve your routines, but hey, it isn’t too late to start or add new routines, below are the best practice and must have steps to add on to your routines",
   
 ];
// document.querySelector(".worsthide").style.display = "block";
 

 
}
//worst == best
else if (
 worst ==  best &&
 worst >  good 

) {
  //typo = "Confidence level : neutral ";
  typo = [
   "Your results shows that you take good care but it isn’t enough, there are large areas you need to improve your routines, but hey, it isn’t too late to start or add new routines, below are the best practice and must have steps to add on to your routines",
     
     ];
// document.querySelector(".worsthide").style.display = "block";
 
}



 

  


else{
 {
  //typo = "Confidence level : neutral ";
  typo = [
   "Your results shows that you take good care but it isn’t enough, there are large areas you need to improve your routines, but hey, it isn’t too late to start or add new routines, below are the best practice and must have steps to add on to your routines",
     
     ];
 }
}














const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");
const tao = typo.map((ms) => `<li>` + ms + `</li>`).join("");


//document.querySelector(".msghere").innerHTML = mao;


window.onload = function() {
  what();
  function what(){
    const headmsg = document.querySelector(".headmsg");
   
    headmsg.innerHTML = tao;
   
   const msgme = document.querySelector(".msghere");
  
   msgme.className = "center-item";
  
   msgme.innerHTML = mao;
  
  };
}
// document.querySelector(".usertype").value = typo;

// document.querySelector(".usertype").style.display = "none";
// console.log(document.querySelector(".usertype").value)

//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of communicator I am");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
