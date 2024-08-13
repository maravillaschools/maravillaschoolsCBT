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
	question : "The existence of various cultures within a society is cultural",
	choiceA : "A. Comparison",
	choiceB : "B. Discrimination",
	choiceC : "C. Diversity",
	choiceD : "D. Unification",	
	correct : "D"
	},
	{
	question : "The system that transport blood round the body is called",
	choiceA : "A. Circulatory",
	choiceB : "B. Digestive",
	choiceC : "C. Excretory",
	choiceD : "D. Respiratory",	
	correct : "A"
	},
	{
	question : "Football matches are officiated by",
	choiceA : "A. Coaches",
	choiceB : "B. Commentators",
	choiceC : "C. Game masters",
	choiceD : "D. Referees",	
	correct : "D"
	},
	{
	question : "Which of the following is a locomotor movement?",
	choiceA : "A. Pulling",
	choiceB : "B. Pushing",
	choiceC : "C. Swinging",
	choiceD : "D. Stretching",	
	correct : "C"
	},
	{
	question : "Which of these is an example of a third class lever?",
	choiceA : "A. Crowbar",
	choiceB : "B. Hammer",
	choiceC : "C. Plier",
	choiceD : "D. Shovel",	
	correct : "D"
	},
	{
	question : "Pressing iron converts electrical energy to ___ energy",
	choiceA : "A. Heat",
	choiceB : "B. Kinetic",
	choiceC : "C. Light",
	choiceD : "D. Mechanical",	
	correct : "A"
	},
	{
	question : "Which of the following is not an input device?",
	choiceA : "A. Camera",
	choiceB : "B. Keyboard",
	choiceC : "C. Monitor",
	choiceD : "D. scanner",	
	correct : "C"
	},
	{
	question : "How many generations are computer classified into?",
	choiceA : "A. 5",
	choiceB : "B. 2",
	choiceC : "C. 6",
	choiceD : "D. 3",	
	correct : "A"
	},
	{
	question : "The keys used to initiate worm reboot are combination of ",
	choiceA : "A. Alt + Esc + Enter",
	choiceB : "B. Ctrl + Alt + Del",
	choiceC : "C. Enter + Ctrl + Alt",
	choiceD : "D. Home + Enter + Alt ",	
	correct : "B"
	},
	{
	question : "Technology simply means the application of ___ ideas in solving problems",
	choiceA : "A. Archaic",
	choiceB : "B. Cultural",
	choiceC : "C. Primitive",
	choiceD : "D. Scientific",	
	correct : "D"
	},
	{
	question : "Community relationship can be promoted by",
	choiceA : "A. Backbiting",
	choiceB : "B. Malice",
	choiceC : "C. Marriage",
	choiceD : "D.Selfishness",	
	correct : "C"
	},
	{
	question : "The following are self-employment professions except",
	choiceA : "A. Banking",
	choiceB : "B. Bricklaying",
	choiceC : "C. Carpentry",
	choiceD : "D. Shoe making",	
	correct : "A"
	},
	{
	question : "In Nigeria ___ marriage is not lawful",
	choiceA : "A. Christain",
	choiceB : "B. Court",
	choiceC : "C. Islamic",
	choiceD : "D. Same sex",	
	correct : "D"
	},
	{
	question : "The closest authority to the people is ___ government",
	choiceA : "A. Central",
	choiceB : "B. Local",
	choiceC : "C. Zonal",
	choiceD : "D. State",	
	correct : "B"
	},
	{
	question : "Good value promotes ___ in the society",
	choiceA : "A. Compromise",
	choiceB : "B. Counsensus",
	choiceC : "C. Equality",
	choiceD : "D.Peace",	
	correct : "D"
	},
	{
	question : "The act of directing people to achieve a common goal is",
	choiceA : "A. Authority",
	choiceB : "B. Dominance",
	choiceC : "C. Leadership",
	choiceD : "D. Power",	
	correct : "C"
	},
	{
	question : "The payment made to a person who does daily job is",
	choiceA : "A. Bribe",
	choiceB : "B. Imprest",
	choiceC : "C. Salary",
	choiceD : "D. Wage",	
	correct : "D"
	},
	{
	question : "Personal security can be enhanced by",
	choiceA : "A. Avoiding insane human",
	choiceB : "B. Interacting with strangers",
	choiceC : "C. Playing with chemicals",
	choiceD : "D. Using fake drugs",	
	correct : "A"
	},
	{
	question : "The aim of personal security management is to",
	choiceA : "A. Arrest suspect",
	choiceB : "B. Prevent imminent danger",
	choiceC : "C. Protect offenders",
	choiceD : "D. Defend territorial boundary",	
	correct : "B"
	},
	{
	question : "Physical injury can be treated with",
	choiceA : "A. Aspirin",
	choiceB : "B. Codine",
	choiceC : "C. Flagy1",
	choiceD : "D. Iodine",	
	correct : "D"
	},
	{
	question : "An artist who works with clay, kiln and throwing wheel is a",
	choiceA : "A. Carver",
	choiceB : "B. Ceramist",
	choiceC : "C. Designer",
	choiceD : "D. Sculptor",	
	correct : "B"
	},
	{
	question : "A by-product of wood is",
	choiceA : "A. Ceramics",
	choiceB : "B. Paper",
	choiceC : "C. Plastic",
	choiceD : "D. polythene",	
	correct : "B"
	},
	{
	question : "Metals that have iron as their basic component are",
	choiceA : "A. Alloys",
	choiceB : "B. Brass",
	choiceC : "C. ferrous",
	choiceD : "D. Metalloids",	
	correct : "C"
	},
	{
	question : "Sand is to glass as ___ is to clay",
	choiceA : "A. Grog",
	choiceB : "B. Marbel",
	choiceC : "C. Pebbles",
	choiceD : "D. Silica",	
	correct : "B"
	},
	{
	question : "Which of the vegetables is needed for healthy eyes?",
	choiceA : "A. Cabbage",
	choiceB : "B. Carrot",
	choiceC : "C. Cucumber",
	choiceD : "D. Lettuce",	
	correct : "B"
	},
	{
	question : "A part of pressing iron used in controlling the temperature is",
	choiceA : "A. Element",
	choiceB : "B. Handle",
	choiceC : "C. Indicator",
	choiceD : "D. Thermometer",	
	correct : "D"
	},
	{
	question : "Seat belt is for passengers safety while ____ is to protect driver's head in case of an accident",
	choiceA : "A. Airbag",
	choiceB : "B. Dashboard",
	choiceC : "C. Headset",
	choiceD : "D. Steering",	
	correct : "A"
	},
	{
	question : "As an electrician, hand gloves are used as",
	choiceA : "A. Costume for easy identfication",
	choiceB : "B. Hand warmer",
	choiceC : "C. Protective device",
	choiceD : "D. Fashion combo",	
	correct : "C"
	},
	{
	question : "___ is used to protect the head from injuries",
	choiceA : "A. Face cap",
	choiceB : "B. Head warmer",
	choiceC : "C. Hat",
	choiceD : "D. Helmet",	
	correct : "D"
	},
	{
	question : "Combination of red and blue will give you?",
	choiceA : "A. Violent",
	choiceB : "B. Green",
	choiceC : "C. Indigo",
	choiceD : "D. Magenta",	
	correct : "C"
	},
	].sort(function () {
	return 0.5 - Math.random();
});    



// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const paperTime = 60 * 20; // 30 seconds
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
			document.location.href= '../../index.html';
		}
	clearInterval(TIMER);
	navs.style.display = "none";
}
