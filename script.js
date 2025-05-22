let data = [
    {
        question: "What is the capital of India?",
        answer: "New Delhi",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    },
    {
        question: "What is the capital of Nepal?",
        answer: "Kathmandu",
        options: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur"],
    },
    {
        question: "What is the capital of Pakistan?",
        answer: "Islamabad",
        options: ["Karachi", "Rawalpindi", "Islamabad", "Multan"],
    },
    {
        question: "What is 2+2+2?",
        answer: "6",
        options: ["222", "0", "6", "8"],
    },


];



// let q = data[Math.floor(Math.random() * data.length)];


// document.querySelector(".question").innerText = q.question;


// let options = q.options.sort(() => Math.random());


// let allOptions = document.querySelectorAll(".option");
// for(let i = 0; i < allOptions.length; i++) {
//     allOptions[i].innerText = options[i];
// }









//   printQuestion(data);


// function printQuestion(arr) {
//   const selectedObj = arr[getARandomValue(arr.length)];
//   const questionPara = document.querySelector(".question");
//   const options = document.querySelectorAll(".option");

//   questionPara.innerText = selectedObj.question;
//   options.forEach(
//     (option, index) => (option.innerText = selectedObj.options[index])
//   );
// }

// function getARandomValue(len) {
//   return Math.floor(Math.random() * len);
// }




//   setTimeout(() => {
//   printQuestion(data);
// }, 1000);







// setInterval(() => {
   
// const questionElem = document.getElementById("question");
// const optionsElems = document.querySelectorAll(".option");
// const answerElem = document.getElementById("answer");

// function displayQuestion() {
//   const randomIndex = Math.floor(Math.random() * data.length);
//   const currentQuestion = data[randomIndex];

//   questionElem.textContent = currentQuestion.question;

//   optionsElems.forEach((optionElem, index) => {
//     optionElem.textContent = currentQuestion.options[index];
//   });


//   answerElem.textContent = "Answer: " + currentQuestion.answer;
// }

// displayQuestion();
// }, 2000);




  const questionElem = document.getElementById("question");
  const optionsElems = document.querySelectorAll(".option");
  const answerElem = document.getElementById("answer");

  function displayQuestion() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const currentQuestion = data[randomIndex];

    questionElem.textContent = currentQuestion.question;

    optionsElems.forEach((optionElem, index) => {
      optionElem.textContent = currentQuestion.options[index];
    });

    answerElem.textContent = "Answer: " + currentQuestion.answer;
  }

  const intervalId = setInterval(displayQuestion, 2000);
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared.");
  }, 10000);

