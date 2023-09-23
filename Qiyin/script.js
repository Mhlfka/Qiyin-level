const questions = [
    {
        question: "Rasululloh (s.a.v) Madinaga hijrat qilganlarida qamariy hisobda necha yoshda edilar?",
        answers:[
            {text: "52 yoshda",  correct: false},
            {text: "53 yoshda",  correct: true},
            {text: "54 yoshda",  correct: false},
        
        ]
    },
    {
        question: "Rasululloh (s.a.v) Madinaga hijrat qilganlarida u yerda nechta arab qabilasi yashar edi?",
        answers:[
            {text: "Bitta",  correct: false},
            {text: "Ikkita",  correct: true},
            {text: "Uchta",  correct: false},
        ]
    },
    {
        question: "Rasululloh (s.a.v) Madinaga hijrat qilganlarida u yerda nechta yahudiy qabilasi yashar edi?",
        answers:[
            {text: "Bitta",  correct: false},
            {text: "Ikkita",  correct: false},
            {text: "Uchta",  correct: true},
        ]
    },
    {
        question: "Payg'ambar (s.a.v)ni Madinaga kelganlarini eshitiboq, u zotning huzurlariga kelib, faqat payg'ambarlar biladigan savollarini bergan va qoniqarli javob olgach, o'sha zahoti musulmon bo'lgan yahudiy olim kim edi?",
        answers:[
            {text: "Abu Yosir",  correct: false},
            {text: "Huyay ibn Axtab",  correct: false},
            {text: "Abdulloh ibn Salom",  correct: true},
        ]
    },
    {
        question: "Yahudiylar Rasululloh (s.a.v)ga iymon keltirishmaganining asl sababi nima edi?",
        answers:[
            {text: "Ilmsizlik",  correct: false},
            {text: "Ishonmaslik",  correct: false},
            {text: "Hasad",  correct: true},
        ]
    },
    {
        question: "Makkadan kelgan muhojirlar dastlab Madina ob-havosi yoqmadi, o'shanda muhojirlar qanday kasalliklga duchor bo'lgan edilar?",
        answers:[
            {text: "Isitma",  correct: true},
            {text: "Vabo",  correct: false},
            {text: "Qorin o'g'rig'i",  correct: false},
        ]
    },
    {
        question: "Payg'ambarimiz (s.a.v) sahobalar orasida qabilachilik, qarindosh-urug'chilik, mahalliychilik, millatchilik kabi salbiy tushunchalarni ko'tarilishi, dindosh og'a-inilarini o'zlaridan ustun qo'yish va yaxshi ko'rgan narsalarni bir-birlariga ravo ko'rish uchun kimlarni o'zaro do'stu birodar tutuntirdilar?",
        answers:[
            {text: "Muhojirlarni (Makkaliklar)",  correct: false},
            {text: "Ansorlarni (Madinaliklar)",  correct: false},
            {text: "Muhojir va Ansorlarni",  correct: true},
        ]
    },
    {
        question: "Payg'ambarimiz (s.a.v) Madinaga kelgan ilk davrlarida u yerda yashaydigan Yahudiylarga qanday munosabatda bolganlar?",
        answers:[
            {text: "Ularni qamal qilganlar",  correct: false},
            {text: "Ular bilan ittifoqchilik bitimi tuzganlar",  correct: true},
            {text: "Ularni qamal qilganlar",  correct: false},
        ]
    },
    {
        question: "Uhud ga'zoti hijriy 3-yilning qaysi oyida bo'lgan?",
        answers:[
            {text: "Ramazon oyida",  correct: false},
            {text: "Sha'bon oyida",  correct: false},
            {text: "Shavvol oyida",  correct: true},
        ]
    },
    {
        question: "Payg'ambarimiz (s.a.v) Madinaga kelib joylashganlaridan so'ng, birinchi qilgan ishlari nima bo'ldi?",
        answers:[
            {text: "Masjid qurish",  correct: true},
            {text: "Sahobalarni bir-biriga birodar tutuntirish",  correct: false},
            {text: "Yahudiylar bilan bitim tuzish",  correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion(); 
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }); 
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect =  selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";    
}
function showScore() {
    resetState();
    questionElement.innerHTML = `Siz ${questions.length} savoldan ${score} tasini topdingiz!`;
    nextButton.innerHTML = "Yana";
    nextButton.style.display = "block";
    showIzoh();


    if (score == 0) {
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 1){
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 2){
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 3){
        alert("Ilm olishda bardavom bo'ling")
    }else if (score == 4){
        alert("Ilm olishda bardavom bo'ling")
    }else if (score == 5){
        alert("Ilm olishda bardavom bo'ling")
    }else if(score == 6){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 7){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 8){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 10){
        alert("Sizga Barakalla deymiz!")
    }else if(score == 10){
        alert("Sizga Barakalla deymiz!")
    }
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();




