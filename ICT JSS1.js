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
question : "The collection of unprocessed facts, figures and symbols is known as _____ ",
choiceA : "A. Information",
choiceB : "B. Software",
choiceC : "C. Data and information",
choiceD : "D. none of the above",	
correct : "D"},
{
question : " _______ is the processed form of data which is organized, meaningful and useful",
choiceA : "A. Information",
choiceB : "B. Software",
choiceC : "C. Data",
choiceD : "D. none of the above",	
correct : "A"},
{
question : " Hardware is any part of the computer that has a physical structure that can be seen and touched.",
choiceA : "A. True",
choiceB : "B. False",
choiceC : "C. Not sure",
choiceD : "D. none of the above",	
correct : "A"},
{
question : "Components of computer hardware are _______",
choiceA : "A. Input device and output devices",
choiceB : "B. A system unit and storage devices",
choiceC : "C. Communication devices",
choiceD : "D. All of the above",	
correct : "D"},
{
question : "_____ devices accept data and instructions from the user",
choiceA : "A. Output",
choiceB : "B. Input",
choiceC : "C. Storage",
choiceD : "D.Component of hardware",	
correct : "B"},
{
question : "Which disk is made up of a circular thin plastic jacket coated with magnetic material?",
choiceA : "A. Hard disk",
choiceB : "B. Compact disk",
choiceC : "C. DVD",
choiceD : "D. Floppy disk",	
correct : "D"},
{
question : "Random Access Memory and Read Only Memory are examples of ______",
choiceA : "A. Primary Memory",
choiceB : "B. Secondary Memory",
choiceC : "C. Auxiliary Memory",
choiceD : "D. Both primary and secondary",	
correct : "A"},
{
question : "Which system uses only the digits 0 and 1?",
choiceA : "A. Bits",
choiceB : "B. Hexadecimal number system",
choiceC : "C. secondarynumber system",
choiceD : "D. Nibbles",	
correct : "A"},
{
question : " There are two primary types of softwares namely _________ and __________.",
choiceA : "A. General purpose and tailor made",
choiceB : "B. Operating System and utility software",
choiceC : "C. Application software and system software",
choiceD : "D. None of the above",	
correct : "C"},
{
question : "Which of the following is not an input device?",
choiceA : "A. Scanner",
choiceB : "B. Microphone",
choiceC : "C. Speaker",
choiceD : "D. Trackball",	
correct : "C"},
{
question : " ___ is the set of instructions that the computer hardware how to perform tasks",
choiceA : "A. Programming language",
choiceB : "B. Software",
choiceC : "C. RAM",
choiceD : "D. ALU",	
correct : "B"},
{
question : " Microprocessors were introduced in what generation of computer",
choiceA : "A. First year",
choiceB : "B. Fifth year",
choiceC : "C. Second year",
choiceD : "D. Third year",	
correct : "D"},

{
	question: " Ctrl + S is ? ",
	choiceA: "A. soft text ",
	choiceB: "B. save ",
	choiceC: "C. play a song ",
	choiceD: "D. stop ",
	correct: "B",
},

{
	question: " Who is the father of modern computer ",
	choiceA: "A. Charles Babbage ",
	choiceB: "B. Isaac Newton ",
	choiceC: "C. Von Nuemann    ",
	choiceD: "D. Mr. Essien ",
	correct: "A",
},
{
	question:" E-MAIL means",
	choiceA: "A. Electronic Mail ",
	choiceB: "B. Electrical Mail ",
	choiceC: "C. Electron Mail ",
	choiceD: "D. B and A are wrong ",
	correct: "A",
},
	{
	question : " Computer is a___________ machine that accept data ",
	choiceA : "A. generator",
	choiceB : "B. eletronic",
	choiceC : "C. mouse",
	choiceD : "D. none of the above",	
	correct : "B"},
	{
	question : " ___________ is an example of storage device ",
	choiceA : "A. floppy disk",
	choiceB : "B. music",
	choiceC : "C. games",
	choiceD : "D. none of the above",	
	correct : "A"},
	{
	question : " __________ is a part that you can touch and see ",
	choiceA : "A. software",
	choiceB : "B. hardware",
	choiceC : "C. humanware",
	choiceD : "D. none of the above",	
	correct : "B"},
	{
	question : "__________ is called a game controller ",
	choiceA : "A. joystick",
	choiceB : "B. light pen",
	choiceC : "C. speaker",
	choiceD : "D. all of the above",	
	correct : "A"},
	{
	question : " _________ is used to send pictures into the system unit ",
	choiceA : "A. keyboard",
	choiceB : "B. scanner",
	choiceC : "C. CPU",
	choiceD : "D. all of the above",	
	correct : "B"},
	{
	question : "which output device is used to print question ",
	choiceA : "A. printer",
	choiceB : "B. photograph",
	choiceC : "C. scanner",
	choiceD : "D. all of the above",	
	correct : "A"},
	{
	question : "the main circuit board of a micro computer is known as _________ ",
	choiceA : "A. power button",
	choiceB : "B. dashboard",
	choiceC : "C. motherboard",
	choiceD : "D. none of the above",	
	correct : "C"},
	{
	question : "we have _________ types of booting ",
	choiceA : "A. 4",
	choiceB : "B. 2",
	choiceC : "C. 10",
	choiceD : "D. none of the above",	
	correct : "B"},
	{
	question : "____________ data contain both letters and numbers ",
	choiceA : "A. numneric",
	choiceB : "B. Alphanumeric",
	choiceC : "C. Alphabetic",
	choiceD : "D. all of the above",	
	correct : "B"},
	{
	question : "Example of electronic information is __________ ",
	choiceA : "A. Email",
	choiceB : "B. Oral",
	choiceC : "C. Written",
	choiceD : "D. none of the above",	
	correct : "A"},
	{
	question : "A computer can not work perfectly without the system unit ",
	choiceA : "A. False",
	choiceB : "B. True",
	choiceC : "C. Not sure",
	choiceD : "D. all of the above",	
	correct : "B"},
	{
	question : "Electronics for storing and processing is called __________ ",
	choiceA : "A. radio",
	choiceB : "B. sewing",
	choiceC : "C. computer",
	choiceD : "D. none of the above",	
	correct : "C"},
	{
	question : "types of booting are _____________ ",
	choiceA : "A. cold and hot",
	choiceB : "B. heavy and light",
	choiceC : "C. warm and cold ",
	choiceD : "D. none of the above",	
	correct : "C"},
	{
	question : "system unit must be connected to power source to enable the system work ",
	choiceA : "A. False",
	choiceB : "B. True",
	choiceC : "C. Maybe",
	choiceD : "D. all of the above",	
	correct : "B"},
{
question : "The following are some of the safety measures in computer room except ",
choiceA : "A. There should be appropriate ventilation in the computer room",
choiceB : "B. Ensure good working posture when using the computer",
choiceC : "C. Make sure you regularly backup your files on external storage media",
choiceD : "D. none of te above",	
correct : "D"},
].sort(function () {
		return 0.5 - Math.random();
	});;

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const paperTime = 60 * 35; // 30 seconds
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
			document.location.href= 'index.html';
		}
	clearInterval(TIMER);
	navs.style.display = "none";
}
