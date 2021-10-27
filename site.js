//oily - combination - dry - normal
let questions = [
  {
    id: 1,
    question: "How does your skin look like at the end of the day?",
    answer: "first",
    options: ["Oily and shiny", "Shimmery/shiny only on T-zone" , "Minimal oil, flakiness, or redness, or none at all" , "Flaky or tight" ],
  },
  {
    id: 2,
    question:
      "Which Best Describes Your Pores?",
    answer: "2",
    options: ["Large and visible all over" ,  "Large or medium sized and only visible in T zone" , "Medium sized all over", "Small and not visible" , ],
  },
  {
    id: 3,
    question: "What is your primary skin concern?",
    answer: "2",
    options: ["Breakouts, blemishes and Acne scars","Uneven skin tone / hyperpigmentation ", "Dryness", "None"],
  },
  {
    id: 4,
    question: "How often do you have pimples?",
    answer: "2",
    options: ["very often", "sometimes" , "Very seldom" , "Never"],
  },
  //a-best b-good c-worst
  {
    id: 5,
    question: "how many times do your wash face?",
    answer: "2",
    options: ["2-3 times a day", "2 or less than 2 times a day" , "None – once a day"],
  },
  {
    id: 6,
    question:
      "How often do you change your towel/pillow case?",
    answer: "2",
    options: ["Once or twice a week", "Once a month" , "I don’t remember"],
  },
  {
    id: 7,
    question: "Are you using the right products for your skin type?",
    answer: "2",
    options: ["Yes, off course", "Maybe" , "I don’t know what my skin type is"],
  },
  {
    id: 8,
    question: "What you most likely to reply when someone asks about your sleep routine?",
    answer: "2",
    options: ["I sleep a lot", "It is stable" , "I wish I sleep more"],
  },
  {
    id: 9,
    question:
      "How well do you agree with the following statements “I use sunscreen and moisturize daily”?",
    answer: "2",
    options: ["Yes","I am not sure" , "No"],
  },
  {
    id: 10,
    question: "Are you using too many or too less skin care products?",
    answer: "2",
    options: ["I don’t think so", "Maybe " , "Hmm, yes"],
  },
  {
    id: 11,
    question:
      "Are you adding lots of greens in your diet?",
    answer: "2",
    options: ["Yes ","Maybe  " , "No "],
  },
  {
    id: 12,
    question:
      "Do you have habit of popping a pimple? ",
    answer: "2",
    options: ["No, never ","Sometimes", "Always"],
  },
  
];

let question_count = 0;
//let points = 0;
Max_Questions = 12;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;
let fourthPoints = 0;
let bestPoints = 0;
let goodPoints = 0 ;
let worstPoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
   //check answer for first four question alone
   if (question_count < 4 ) {
   for (let i = 0; i < questions.length ; i++) {
    if (user_answer == questions[i].options[0]){
      //console.log("hana")
      firstPoints += 1;
    }
  }
    for (let i = 0; i < questions.length ; i++) {
      if (user_answer == questions[i].options[1]){
        //console.log("hana")
        secondPoints += 1;
      }
    }
      for (let i = 0; i < questions.length ; i++) {
        if (user_answer == questions[i].options[2]){
          //console.log("hana")
          thirdPoints += 1;
        }
      }
      for (let i = 0; i < questions.length ; i++) {
        if (user_answer == questions[i].options[3]){
          //console.log("hana")
          fourthPoints += 1;
        }
      }
    }
    //check answer for remaining questions
    else{
      for (let i = 0; i < questions.length ; i++) {
      if (user_answer == questions[i].options[0]){
        //console.log("hana")
        bestPoints += 1;
      }
    }
      for (let i = 0; i < questions.length ; i++) {
        if (user_answer == questions[i].options[1]){
          //console.log("hana")
          goodPoints += 1;
        }
      }
        for (let i = 0; i < questions.length ; i++) {
          if (user_answer == questions[i].options[2]){
            //console.log("hana")
            worstPoints += 1;
          }
        }
      }
  /*if (user_answer == questions[question_count].answer) {
   points += 10;
   
  }
  console.log(points);*/
  //first(0)
  // if (user_answer === "Yes") {
  //   firstPoints += 1;
  // }
  // //second(1)
  // else if (user_answer === "Yes ") {
  //   secondPoints += 1;
  // }
  // //third(2)
  // else if (user_answer === "Yes  ") {
  //   thirdPoints += 1;
  // }
  // //fourthPoints(3)
  // else if (user_answer === "Yes   ") {
  //   fourthPoints += 1;
  // }
  //unworthyPoints(4)
  // else if (user_answer === "Yes    "){
  //   unworthyPoints += 1;
  // }

  sessionStorage.setItem("first", firstPoints);
  sessionStorage.setItem("second", secondPoints);
  sessionStorage.setItem("third", thirdPoints);
  sessionStorage.setItem("fourth", fourthPoints);
  sessionStorage.setItem("best", bestPoints);
  sessionStorage.setItem("good", goodPoints);
  sessionStorage.setItem("worst", worstPoints);
  // sessionStorage.setItem("unworthy" , unworthyPoints);
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");
 

  progressBarFull.style.width = ` ${((question_count / Max_Questions) * 100 + 6 )}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  // let [first, second] = questions[count].options;
  ///////no of questions
  let [first, second, third, fourth] = questions[count].options;
  ///////no of questions
  if (question_count < 4 ) {
    question.innerHTML = `
    <h2> ${questions[count].question}</h2>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>
    <li ><span class="option">${fourth}</span></li>

  </ul> 
    `;
    toggleActive();
  } else if (question_count >= 4) {
    question.innerHTML = `
    <h2> ${questions[count].question}</h2>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>
    

  </ul> 
    `;
    toggleActive();
  }
//   question.innerHTML = `
//   <p class="iamquestion"> ${questions[count].question}</p>
//    <ul class="option_group">
//   <li><span class="option">${first}</span></li>
//   <li ><span class="option">${second}</span></li>
 
// </ul> 
//   `;
//   toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
