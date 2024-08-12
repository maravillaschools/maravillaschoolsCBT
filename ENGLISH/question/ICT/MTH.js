// select all elements
const start = document.getElementById("start");
const instruction = document.getElementById("instruction");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const prev = document.getElementById("P");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const next = document.getElementById("N");
const submit = document.getElementById("S");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const name = document.getElementById("txtName");
const grade = document.getElementById("selClass");
const paper = document.getElementById("selPaper");

//dummy questions & answers
let answers = [];

// create our questions
let index = 0;

let questions = [
	{ 
	question : "<b><sup>Choose the one that is nearest in meaning to the word in italics.</sup></b> <br> <sup>We found  the <i>missing</i> items inside the cupboard in the store.</sup>",
	choiceA : "A. abandoned",
	choiceB : "B. forgotten",
	choiceC : "C. hidden",
	choiceD : "D. lost",	
	correct : "D"
	},
	{
	question : "<b><sup>Choose the one that is nearest in meaning to the word in italics.</sup></b> <br> <sup>The pupils are <i>eager</i> to go on holiday.</sup>",
	choiceA : "A. afraid",
	choiceB : "B. desperate",
	choiceC : "C. keen",
	choiceD : "D. reluctant",	
	correct : "B"
	},
	{
	question : "<b><sup>Choose the one that is nearest in meaning to the word in italics.</sup></b> <br> <sup>The enemies <i>invaded</i> the village.</sup>",
	choiceA : "A. attacked",
	choiceB : "B. conquered",
	choiceC : "C. encamped",
	choiceD : "D. visited",	
	correct : "A"
	},
	{
	question : "<b><sup>Choose the one that is nearest in meaning to the word in italics.</sup></b> <br> <sup>The eyewitness gave a <i>vivid</i> account of the fatal accident.</sup>",
	choiceA : "A. brief",
	choiceB : "B. brilliant",
	choiceC : "C. detailed",
	choiceD : "D. vague",	
	correct : "C"
	},
	{
	question : "<b><sup>Choose the one that is nearest in meaning to the word in italics.</sup></b> <br> <sup>The little boy <i>abandoned</i> his school bag.</sup>",
	choiceA : "A. left",
	choiceB : "B. lost",
	choiceC : "C. misplaced",
	choiceD : "D. sold",	
	correct : "A"
	},
	{
	question : "<b><sup>Choose the one that is most nearly opposite in meaning to the underlined word.</sup></b> <br> <sup>She <u>often</u> visits her mother during holidays.</sup>",
	choiceA : "A. frequently",
	choiceB : "B. rarely",
	choiceC : "C. regularly",
	choiceD : "D. usually",	
	correct : "B"
	},
	{
	question : "<b><sup>Choose the one that is most nearly opposite in meaning to the underlined word.</sup></b> <br> <sup>The head teacher commended the boy for being <u>honest</u></sup>",
	choiceA : "A. disobedient",
	choiceB : "B. insincere",
	choiceC : "C. insolent",
	choiceD : "D. rough",	
	correct : "B"
	},
	{
	question : "<b><sup>Choose the one that is most nearly opposite in meaning to the underlined word.</sup></b> <br> <sup>The <u>comforting</u> word sent him to sleep</sup>",
	choiceA : "A. angry",
	choiceB : "B. consoling",
	choiceC : "C. disturbing",
	choiceD : "D. reassuring",	
	correct : "C"
	},
	{
	question : "<b><sup>Choose the one that is most nearly opposite in meaning to the underlined word.</sup></b> <br> <sup>The child felt <u>secured</u> in his mother's arms</sup>",
	choiceA : "A. protected",
	choiceB : "B. unsafe",
	choiceC : "C. abandoned",
	choiceD : "D. detached",	
	correct : "B"
	},
	{
	question : "<b><sup>Choose the one that is most nearly opposite in meaning to the underlined word.</sup></b> <br> <sup>The soldiers <u>retreated</u> when their commander was shot</sup>",
	choiceA : "A. advanced",
	choiceB : "B. begged",
	choiceC : "C. disappeared",
	choiceD : "D. surrendered",	
	correct : "D"
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup></b> <br> <sup>The train is on transit, ___ it?</sup>",
	choiceA : "A. is",
	choiceB : "B. isn't",
	choiceC : "C. wasn't",
	choiceD : "D. would",	
	correct : "B"
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup></b> <br> <sup>Their father locked up the gate</sup>",
	choiceA : "A. herself",
	choiceB : "B. himself",
	choiceC : "C. himselves",
	choiceD : "D. itself",	
	correct : "B"
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup></b> <br> <sup>Crops are grown and sold by</sup>",
	choiceA : "A. farmers",
	choiceB : "B. marketers",
	choiceC : "C. producers",
	choiceD : "D. professionals",	
	correct : "A"
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup></b> <br> <sup> The ___ advised the pupils to always submit their homework on time.</sup>",
	choiceA : "A. bursar",
	choiceB : "B. clerk",
	choiceC : "C. librarian",
	choiceD : "D. teacher",	
	correct : "D"	
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup></b> <br> <sup>She dressed ___ beautifully that everyone admired her.</sup>",
	choiceA : "A. quite",
	choiceB : "B. so",
	choiceC : "C. too",
	choiceD : "D. very",	
	correct : "B"	
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup></b> <br> <sup>He either works in Kaduna ___ Jos.</sup>",
	choiceA : "A. nor",
	choiceB : "B. and",
	choiceC : "C. or",
	choiceD : "D. but",	
	correct : "C"	
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup> </b><br> <sup>If one works for a long time, ___ will be tired.</sup>",
	choiceA : "A. he",
	choiceB : "B. I",
	choiceC : "C. one",
	choiceD : "D. she",	
	correct : "C"	
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup></b> <br> <sup>It's time we ___ for home.</sup>",
	choiceA : "A. are leaving",
	choiceB : "B. had left",
	choiceC : "C. leave",
	choiceD : "D. left",	
	correct : "D"	
	},
	{
	question : "The appropriate prefix for the word 'faithfull is",
	choiceA : "A. im-",
	choiceB : "B. un-",
	choiceC : "C. on-",
	choiceD : "D. in-",	
	correct : "B"	
	},
	{
	question : "<b><sup>Complete each of the following statement with the most appropriate option.</sup></b> <br> <sup>The boy had passed the entranced examination, so he was invited for an ?</sup>",
	choiceA : "A. intaview",
	choiceB : "B. interveiw",
	choiceC : "C. interview",
	choiceD : "D. intervieu",	
	correct : "C"	
	},
	{
		question: "What is the past tense of 'go'?",
		choiceA:"A. go",
		choiceB:"B. goes",
		choiceC:"C. went",
		choiceD:"D. going",
		correct: "C",
		},
		{
		question: "Which of the following verb is an irregular verb?",
		choiceA:"A. run",
		choiceB:"B. take",
		choiceC:"C. learn",
		choiceD:"D. be",
		correct: "D",
		},
		{
		question: "Fill in the blank with the correct form of the verb in parentheses. 'My parents ___ (give) me a gift last week'",
		choiceA:"A. give",
		choiceB:"B. gives",
		choiceC:"C. gave",
		choiceD:"D. given",
		correct: "C",
		},
		{
		question: "What is the correct way of expressing a future action using 'WILL'",
		choiceA:"A. I shall go home tomorrow",
		choiceB:"B. I will go to school tomorrow",
		choiceC:"C. I willed go to school tomorrow",
		choiceD:"D. I willet go to school tomorrow",
		correct: "B",
		},
		{
		question: "What does the sentence 'I shall finish my homework by 5pm' mean?",
		choiceA:"A. I am finishing my homwork now",
		choiceB:"B. I will finish my homework in the future",
		choiceC:"C. I have finished  my homework",
		choiceD:"D. I won't do my homework",
		correct: "B",
		},
		{
		question: "Choose the correct sentence using 'WILL' to express a future intention",
		choiceA:"A. I will study hard for my exams",
		choiceB:"B. I shall study hard for my exams",
		choiceC:"C. I might study hard for my exams",
		choiceD:"D. I am studying hard for my exams",
		correct: "A",
		},
		{
		question: "What is teh corrext way to express future prediction using 'WILL'",
		choiceA:"A. It shall rain tommorrow",
		choiceB:"B. It will rain tomorrow",
		choiceC:"C. It is raining tommorrow",
		choiceD:"D. Tomorrow shall rain",
		correct: "B",
		},
		{
		question: "Choose the correct sentence using 'SHALL' to express a firmal instruction",
		choiceA:"A. You shall do your homework everyday",
		choiceB:"B. You willet do your homework everyday",
		choiceC:"C. Everyday shall do your homework",
		choiceD:"D. You will do your homework everyday",
		correct: "D",
		},
		{
		question: "What is the function of intensifiers in a sentence?",
		choiceA:"A. To make sentence neative",
		choiceB:"B. T make sentemce positive",
		choiceC:"C. To emphasize or strengthen the meaning of an adjective or adverb",
		choiceD:"D. To show tense of a verb",
		correct: "C",
		},
		{
		question: "Choose the correct intensifer to complete the sentence: <br>He is ___ tired",
		choiceA:"A. very",
		choiceB:"B. much",
		choiceC:"C. too",
		choiceD:"D. auto",
		correct: "A",
		},
		{
		question: "What is the effect of using 'VERY' in the sentence <br><i>She is <u>very</u> happy</i>?",
		choiceA:"A. It makes her happiness less intense",
		choiceB:"B. It makes her happiness more intense",
		choiceC:"C. It shows her happiness is temporary",
		choiceD:"D. It shows her happiness is permanent",
		correct: "B",
		},
		{
		question: "Choose the correct intensifier to complete the sentence <br>This cake is ___ delicious!",
		choiceA:"A. so",
		choiceB:"B. too",
		choiceC:"C. very",
		choiceD:"D. extremely",
		correct: "A",
		},
		{
		question: "What is the function of the intensifier in the sentence? <br>He is too tired to work",
		choiceA:"A. To show the extent of his tiredness",
		choiceB:"B. To show he is a human and can get tired",
		choiceC:"C. To show the person in question is a male gender",
		choiceD:"D. To show tired can be two",
		correct: "A",
		},
		{
		question: "Which verb form is closed to describing an action that started and finished in the past?",
		choiceA:"A. Presnt perfect",
		choiceB:"B. Past perfect",
		choiceC:"C. Simple past",
		choiceD:"D. Future past",
		correct: "C",
		},
		{
		question: "Which verb is in the present contnous tense?",
		choiceA:"A. I go to school",
		choiceB:"B. I am going to school",
		choiceC:"C. I went to school",
		choiceD:"D. I ill go to school",
		correct: "B",
		},
		{
		question: "What is the correct form of the verb in parentheses <br>If I ___ (be) you, I would study harder",
		choiceA:"A. am",
		choiceB:"B. was",
		choiceC:"C. be",
		choiceD:"D. were",
		correct: "D",
		},
		{
		question: "Which verb is a helping verb?",
		choiceA:"A. run",
		choiceB:"B. jump",
		choiceC:"C. be",
		choiceD:"D. read",
		correct: "C",
		},
		{
		question: "Which verb form is used to describe an action that will be completed at a specific point in the future?",
		choiceA:"A. Future perfect",
		choiceB:"B. Future continous",
		choiceC:"C. Simple future",
		choiceD:"D. Presnt perfect",
		correct: "A",
		},
		{
		question: "Which sentnce uses the correct form of 'WILL' to express a prediction?",
		choiceA:"A. It will rain tomorrow",
		choiceB:"B. It shall rain tomorrow",
		choiceC:"C. It shall rained tomorrow",
		choiceD:"D. It will raining tomorrow",
		correct: "A",
		},
		{
		question: "What part of speech gives name to person, animal and things",
		choiceA:"A. Noun",
		choiceB:"B. Verb",
		choiceC:"C. Adjective",
		choiceD:"D. Prepostion",
		correct: "A",
		},
	].sort(function () {
		return 0.5 - Math.random();
	});    



// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const paperTime = 60 * 30; // 30 seconds
const end = 60 * 0; // stoppage time
const gaugeWidth = 200; // 600px
const gaugeUnit = gaugeWidth / paperTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
	let q = questions[runningQuestion];
	question.innerHTML = "<p>" + `${runningQuestion + 1}. ` + q.question + "</p>";
	navs.style.display = "inline-block";
	if (runningQuestion == 0) P.disabled = true;
	else P.disabled = false;
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
	if (runningQuestion == lastQuestion) N.disabled = true;
	else N.disabled = false;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
	start.style.display = "none";
	instruction.style.display = "none";
	renderQuestion();
	quiz.style.display = "block";
	renderProgress();
	renderCounter();
	TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
	for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
		progress.innerHTML += `<div class='prog' id="${qIndex}" onClick="testMe(${qIndex})"><span>${
			qIndex + 1
		}</span></div>`;
	}
}

function testMe(i) {
	runningQuestion = i;
	renderQuestion();
}

// counter render
function renderCounter() {
	if (count < paperTime) {
		remTime = paperTime - count;
		/*const hours = math.floor(remTime/3600);*/
		const minutes = Math.floor(remTime / 60);
		let seconds = remTime % 60;

		seconds = seconds < 10 ? "0" + seconds : seconds;

		counter.innerHTML = minutes + ":" + seconds;
		//counter.innerHTML = Math.floor(remTime/60) + ":" + (remTime%60);
		timeGauge.style.width = count * gaugeUnit + "px";
		count++;
	} else {
		if (count == paperTime) {
			scoreRender();
		}
	}
}

// previous question
function prevQ() {
	if (runningQuestion > 0) runningQuestion--;
	renderQuestion();
}
// next question
function nextQ() {
	if (runningQuestion < lastQuestion) runningQuestion++;
	renderQuestion();
}

// store Answer
function checkAnswer(answer) {
	answers[runningQuestion] = answer;
	document.getElementById(runningQuestion).style.backgroundColor = "rgb(89, 173, 89)";
}

// score render
function scoreRender() {
	for (x = 0; x < lastQuestion; x++)
		if (answers[x] == undefined) {
			runningQuestion = x;
			renderQuestion();
		}
	score = 0;
	for (var q = 0; q < questions.length; q++)
		if (answers[q] == questions[q].correct) score++;
	const scorePerCent = Math.round((100 * score) / questions.length);
	let data =
    "<div>MARAVILLA COLLEGE</div>" +
    "<div>2022/2023 1st Term Examination</div>" +
    "<div>Candidate Result</div>" +
    "<div>Name: " + localStorage.getItem("username") + " \tClass: " + grade.value + "</div>" +
    "<div>Paper: " + paper.value + "\tScore: " + score + " out of " + questions.length +
    "-->" + scorePerCent + "%</div>" +
    "<div>Duration: " + Math.floor(count / 60) + ":" + (count % 60) + " out of " +
    Math.floor(paperTime / 60) + ":" + (paperTime % 60) + "</div>";
	for (var x = 0; x < questions.length; x++) {
	{	data +=
      "<div>" + "Question " + `${x+1}. ` + questions[x].question + "</div>" +
      "<div>" + "A. "+ questions[x].choiceA + "</div>" +
      "<div>" + "B. "+ questions[x].choiceB + "</div>" +
      "<div>" + "C. "+ questions[x].choiceC + "</div>" +
      "<div>" + "D. "+ questions[x].choiceD + "</div>" +
      "<div>" + answers[x] +
      (answers[x] == questions[x].correct ? " CORRECT!" : " WRONG!") + "</div>";
	}

		if (answers[x] == questions[x].correct) data += " CORRECT!\n";
		else data += " WRONG!\n";
	}
	// This variable stores all the data.

	document.getElementById = data;
	const pdf = new html2pdf(data, {
		margin: 11,
		filename: paper.value + name.value + ".pdf",
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
	  });
	
	  pdf.save();

	// terminate counter, remove navigators
	var interval = setInterval(myURL,2000);
		
		function myURL() {
			document.location.href= '../../loginpage.html';
		}
	clearInterval(TIMER);
	navs.style.display = "none";
}
