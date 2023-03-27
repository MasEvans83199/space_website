// Script for nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//Script for the collapsible list
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } 
        else {
            content.style.display = "block";
        }
    });
}
// End of nav menu script


var questions = [
    {
        question: "What is the name of the largest planet in our solar system?",
            optionA: "Jupiter",
            optionB: "Saturn",
            optionC: "Uranus",
            optionD: "Neptune",
            correctOption: "optionA"
        
    },
    {
        question: "How old is the Universe?",
        
            optionA: "13.8 billion years",
            optionB: "14.8 billion years",
            optionC: "15.8 billion years",
            optionD: "16.8 billion years",
            correctOption: "optionA"
        
    },
    {
        question: "Which planet has a hexagonal-shaped storm?",

            optionA: "Jupiter",
            optionB: "Saturn",
            optionC: "Uranus",
            optionD: "Neptune",
            correctOption: "optionC"
    },
    {
        question: "How long does one season last on Neptune?",
            optionA: "Around 3 months",
            optionB: "Around 40 years",
            optionC: "Around 165 years",
            optionD: "Around 1650 years",
            correctOption: "optionB"
    },
    {
        question: "What is the disk that surrounds a black hole called?",
            optionA: "A black hole",
            optionB: "A secretion disk",
            optionC: "An accretion disk",
            optionD: "A black disk",
            correctOption: "optionC"
    },
    {
        question: "What planet in our solar system is the hottest, with a temperature of 460 degrees Celcius?",
            optionA: "Mercury",
            optionB: "Venus",
            optionC: "Mars",
            optionD: "Jupiter",
            correctOption: "optionB"
    },
    {
        question: "What constellation represents a horse?",
            optionA: "Pegasus",
            optionB: "Orion",
            optionC: "Taurus",
            optionD: "Cassiopeia",
            correctOption: "optionA"
    },
    {
        question: "Which astronaut wrote their daughter's initials on the moon?",
            optionA: "Neil Armstrong",
            optionB: "Buzz Aldrin",
            optionC: "Michael Collins",
            optionD: "Gene Cernan",
            correctOption: "optionD"
    },
    {
        question: "What is the coldest section of the universe?",
            optionA: "The Boomerang Nebula",
            optionB: "The Cold Spot",
            optionC: "Jupiter's moon Europa",
            optionD: "The Sun",
            correctOption: "optionA"
    },
    {
        question: "What are the most common galaxies in the universe?",
            optionA: "Elliptical galaxies",
            optionB: "Spiral galaxies",
            optionC: "Irregular galaxies",
            optionD: "Lenticular galaxies",
            correctOption: "optionA"
    },
    {
        question: "How many stars make up the Big Dipper?",
            optionA: "3",
            optionB: "9",
            optionC: "7",
            optionD: "10",
            correctOption: "optionB"
    },
    {
        question: "How distant is the nearest star to Earth?",
            optionA: "12,478,392 light years",
            optionB: "12,824 light years",
            optionC: "348,895 light years",
            optionD: "4.2 light years",
            correctOption: "optionD"
    },
    {
        question: "What is the largest type of star?",
            optionA: "Red dwarf",
            optionB: "Blue giant",
            optionC: "Red giant",
            optionD: "White dwarf",
            correctOption: "optionC"
    },
    {
        question: "What is the smallest type of star?",
            optionA: "Red dwarf",
            optionB: "Blue giant",
            optionC: "Red giant",
            optionD: "White dwarf",
            correctOption: "optionA"
    },
    {
        question: "What is the name of the largest galaxy in the universe?",
            optionA: "Super Mario Galaxy",
            optionB: "Milky Way Galaxy",
            optionC: "Andromeda Galaxy",
            optionD: "Triangulum Galaxy",
            correctOption: "optionC"
    },
    {
        question: "Who was the third astronaut on the moon?",
            optionA: "Michael Collins",
            optionB: "Pete Conrad",
            optionC: "Buzz Aldrin",
            optionD: "Gene Cernan",
            correctOption: "optionB"
    },
    {
        question: "What is the largest object in the Universe?",
            optionA: "The Sun",
            optionB: "Hercules-Corona Borealis Great Wall",
            optionC: "The Andromeda Galaxy",
            optionD: "The Universe",
            correctOption: "optionB"
    },
    {
        question: "What planet is home to Olympus Mons, the largest volcano in the solar system?",
            optionA: "Mars",
            optionB: "Venus",
            optionC: "Jupiter",
            optionD: "Saturn",
            correctOption: "optionA"
    },
    {
        question: "What color is the sunset on Mars?",
            optionA: "Red",
            optionB: "Orange",
            optionC: "Yellow",
            optionD: "Blue",
            correctOption: "optionD"
    },
    {
        question: "What year will Halley's Comet return to Earth?",
            optionA: "2103",
            optionB: "2061",
            optionC: "2345",
            optionD: "3023",
            correctOption: "optionB"
    },
    {
        question: "How much would it cost to make a space suit, in today's money?",
            optionA: "$1,000,000",
            optionB: "$10,000,000",
            optionC: "$100,000,000",
            optionD: "$150,000,000",
            correctOption: "optionD"
    },
    {
        question: "When will the Milky Way and Andromeda galaxies collide?",
            optionA: "In 4 billion years",
            optionB: "In 5 billion years",
            optionC: "In 2.5 billion years",
            optionD: "In 3.75 billion years",
            correctOption: "optionD"
    },
    {
        question: "How many moons does Saturn have?",
            optionA: "62",
            optionB: "53",
            optionC: "82",
            optionD: "72",
            correctOption: "optionC"
    }
];

let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}