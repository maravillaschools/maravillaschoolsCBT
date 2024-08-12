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
question : "Convert 574 to Roman numerals",
choiceA : "A. DLXXVI",
choiceB : "B. DLXXIV",
choiceC : "C. DLXXIII",
choiceD : "D. DLXIV",	
correct : "B"	
},
{
question : "Express 0.75 as a fraction",
choiceA : "A. 1/4",
choiceB : "B. 3/8",
choiceC : "C. 1/2",
choiceD : "D. 3/4",	
correct : "D"	
},
{
question : "Correct 0.0579 to 2 significant figures",
choiceA : "A. 0.05",
choiceB : "B. 0.057",
choiceC : "C. 0.0579",
choiceD : "D. 0.058",	
correct : "D"	
},
{
question : "Eight years ago, John was 48years old. How old will he be in six years time?",
choiceA : "A. 48years",
choiceB : "B. 56years",
choiceC : "C. 62years",
choiceD : "D. 64years",	
correct : "C"	
},
{
question : "What is the place value of 2 in 8.217?",
choiceA : "A. unit",
choiceB : "B. hundredth",
choiceC : "C. tenth",
choiceD : "D. tense",	
correct : "C"	
},
{
question : "Given that a=7, b=5 and c=5. Find the square root of 3a + 2b + c.",
choiceA : "A. 25",
choiceB : "B. 6",
choiceC : "C. 10",
choiceD : "D. 15",	
correct : "B"	
},
{
question : "The sum of 16 and 20 is divided by the product of 6 and 2, find the result.",
choiceA : "A. 1",
choiceB : "B. 3",
choiceC : "C. 5",
choiceD : "D. 7",	
correct : "B"	
},
{
question : "A boy divided 54 by y and the result is 6. Find the value of y.",
choiceA : "A. 3",
choiceB : "B. 9",
choiceC : "C. 23",
choiceD : "D. 12",	
correct : "B"	
},
{
question : "Which of thE following is not a perfect square?",
choiceA : "A. 36",
choiceB : "B. 49",
choiceC : "C. 70",
choiceD : "D. 121",	
correct : "C"	
},
{
question : "Simplify (2<sup>3</sup> x 5<sup>2</sup> ÷ 5",
choiceA : "A. 40",
choiceB : "B. 10",
choiceC : "C. 100",
choiceD : "D. 200",	
correct : "A"	
},
{
question : "If 2X - 18 = 0, Find the value of x",
choiceA : "A. 0",
choiceB : "B. 1",
choiceC : "C. 2",
choiceD : "D. 9",	
correct : "D"	
},
{
question : "Find the volume of a cyinder of radius 2cm and height 14cm. π = <sup>22</sup>/<sub>7</sub>",
choiceA : "A. 120cm<sup>3</sup>",
choiceB : "B. 136cm<sup>3</sup>",
choiceC : "C. 151cm<sup>3</sup>",
choiceD : "D. 176cm<sup>3</sup>",	
correct : "D"	
},
{
question : "Find the mode of the set of numbers: 4,3,7,5,3,6,7,3",
choiceA : "A. 7",
choiceB : "B. 6",
choiceC : "C. 3",
choiceD : "D. 5",	
correct : "C"	
},
{
question : "Find the value of x in the equation 6x - 3 = 2x + 13",
choiceA : "A. 3",
choiceB : "B. 2",
choiceC : "C. 6",
choiceD : "D. 4",	
correct : "D"	
},
{
question : "Find the area of a parallelogram whose length is 7cm and height is 4cm.",
choiceA : "A. 28cm<sup>2</sup>",
choiceB : "B. 11cm<sup>2</sup>",
choiceC : "C. 22cm<sup>2</sup>",
choiceD : "D. 3cm<sup>2</sup>",	
correct : "A"	
},
{
question : "Which of the following numbers; 11, 10, 11, 11, 12, 13, 14, 14, 15, 15, 16",
choiceA : "A. 10",
choiceB : "B. 11",
choiceC : "C. 14",
choiceD : "D. 12",	
correct : "B"	
},
{
question : "Which of the following polygons has seven sides?",
choiceA : "A. Heptagon",
choiceB : "B. Hexagon",
choiceC : "C. Nonagon",
choiceD : "D. Octagon",	
correct : "A"	
},
{
question : "Express 8m in centimeters",
choiceA : "A. 0.08",
choiceB : "B. 0.8",
choiceC : "C. 8",
choiceD : "D. 800",	
correct : "A"	
},
{
question : "The price of a textbook decreases from $2,000 t0 $1,200. Find the percentage decrease.",
choiceA : "A. 10%",
choiceB : "B. 30%",
choiceC : "C. 40%",
choiceD : "D. 50%",	
correct : "C"	
},
{
question : "Find the H.C.F of 108, 27 and 9",
choiceA : "A. 9",
choiceB : "B. 7",
choiceC : "C. 5",
choiceD : "D. 3",	
correct : "A"	
},

{
question : "What is the highest prime number of 270",
choiceA : "A. 13",
choiceB : "B. 11",
choiceC : "C. 7",
choiceD : "D. 5",	
correct : "D"	
},
{
question : "Find the product of CCX and XIX",
choiceA : "A. MCMLXXX",
choiceB : "B. MMCMXC",
choiceC : "C. MMMDCCC",
choiceD : "D. MMMCMXC",	
correct : "D"	
},
{
question : "Arrange the following fractions in ascending order of magnitude; <sup>1</sup>/<sub>2</sub>, <sup>5</sup>/<sub>6</sub>, <sup>3</sup>/<sub>8</sub>, <sup>7</sup>/<sub>12</sub>.",
choiceA : "A. <sup>1</sup>/<sub>2</sub>, <sup>5</sup>/<sub>6</sub>, <sup>3</sup>/<sub>8</sub>, <sup>7</sup>/<sub>12</sub>",
choiceB : "B. <sup>5</sup>/<sub>6</sub>, <sup>7</sup>/<sub>12</sub>, <sup>1</sup>/<sub>2</sub>, <sup>3</sup>/<sub>8</sub>",
choiceC : "C. <sup>3</sup>/<sub>8</sub>, <sup>1</sup>/<sub>2</sub>, <sup>7</sup>/<sub>12</sub>, <sup>5</sup>/<sub>6</sub>",
choiceD : "D. <sup>7</sup>/<sub>12</sub>, <sup>5</sup>/<sub>6</sub>, <sup>3</sup>/<sub>8</sub>, <sup>1</sup>/<sub>2</sub>",	
correct : "C"	
},
{
question : "Express 0.68 as a fraction in its lowest term",
choiceA : "A. <sup>17</sup>/<sub>25</sub>",
choiceB : "B. <sup>9</sup>/<sub>16</sub>",
choiceC : "C. <sup>5</sup>/<sub>12</sub>",
choiceD : "D. <sup>2</sup>/<sub>5</sub>",	
correct : "A"	
},
{
question : "If a man spent 50% of his salary on food items ad the salary is $80,000, how much is left?",
choiceA : "A. $30,000",
choiceB : "B. $40,000",
choiceC : "C. $50,000",
choiceD : "D. $60,000",	
correct : "B"	
},
{
question : "Find the place value of 2 in 723 + 123 + 456.",
choiceA : "A. 2 millions",
choiceB : "B. 2 thousands",
choiceC : "C. 2 tens",
choiceD : "D. 2 units",	
correct : "D"	
},
{
question : "Simplify ( 1<sup>1</sup>/<sub>2</sub> x 1<sup>1</sup>/<sub>3</sub> ) ÷ <sup>2</sup>/<sub>3</sub>",
choiceA : "A. 1",
choiceB : "B. 2",
choiceC : "C. 3",
choiceD : "D. 5",	
correct : "C"	
},
{
question : "An article was bought for $14,500 and sold at a loss of 20%. Find the selling price.",
choiceA : "A. $11,600",
choiceB : "B. $12,500",
choiceC : "C. $13,050",
choiceD : "D. $14,500",	
correct : "A"	
},
{
question : "Express 180 in index form",
choiceA : "A. 2 x 3 x 5<sup>2</sup>",
choiceB : "B. 2<sup>2</sup> x 3<sup>2</sup> x 5",
choiceC : "C. 2 x 3<sup>3</sup> x 5",
choiceD : "D. 2<sup>2</sup> x 3 x 5",	
correct : "B"	
},
{
question : "Efe took 28 minute to trek to school. If she reached at 8:12 am, at what time did she leave?",
choiceA : "A. 7:42am",
choiceB : "B. 7:44am",
choiceC : "C. 7:45am",
choiceD : "D. 7:46am",	
correct : "B"	
},
{
question : "A sales boy receives $1,200 as commission on $24,000. Find the percentage of the commission.",
choiceA : "A. 2%",
choiceB : "B. 3%",
choiceC : "C. 4%",
choiceD : "D. 5%",	
correct : "D"	
},
{
question : "The volume of a cube is 64 cm<sup>3</sup>. Find the length of its side.",
choiceA : "A. 2cm",
choiceB : "B. 3cm",
choiceC : "C. 4cm",
choiceD : "D. 8cm",	
correct : "C"	
},
{
question : "What is the radius of a circle whose circumference is 66cm? <br>( Take π = <sup>22</sup>/<sub>7</sub> )",
choiceA : "A. 10.5cm",
choiceB : "B. 12.5cm",
choiceC : "C. 14cm",
choiceD : "D. 14.5cm",	
correct : "A"	
},
{
question : "How many weeks are there in 5 months?",
choiceA : "A. 10",
choiceB : "B. 20",
choiceC : "C. 25",
choiceD : "D. 35",	
correct : "B"	
},
{
question : "Which of the following shapes is plane?",
choiceA : "A. Circle",
choiceB : "B. Cube",
choiceC : "C. Cylinder",
choiceD : "D. Pyramid",	
correct : "A"	
},
{
question : "A car is moving at an average speed of 60km/h. Calculate the distance covered in 3hours.",
choiceA : "A. 20km",
choiceB : "B. 60km",
choiceC : "C. 120km",
choiceD : "D. 180km",	
correct : "D"	
},
{
question : "Determine the radius of a circle whose diameter is 21cm.",
choiceA : "A. 10.5cm",
choiceB : "B. 13.5cm",
choiceC : "C. 14cm",
choiceD : "D. 17cm",	
correct : "A"	
},
{
question : "Solve for x if 3x + 5 = -7",
choiceA : "A. 4",
choiceB : "B. 3",
choiceC : "C. -3",
choiceD : "D. -4",	
correct : "D"	
},
{
question : "Mr Adam wants to send 500 dollars to his brother in America. How much will he send if a dollar is equivalent to #780.00",
choiceA : "A. #155,000",
choiceB : "B. #208,000",
choiceC : "C. #390,000",
choiceD : "D. #502,000",	
correct : "C"	
},
{
question : "Find the value of x if <sup>5x</sup>/<sub>8</sub> = 10",
choiceA : "A. 14",
choiceB : "B. 15",
choiceC : "C. 16",
choiceD : "D. 17",	
correct : "C"	
},
	].sort(function () {
	return 0.5 - Math.random();
});    



// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const paperTime = 60 * 40; // 30 seconds
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
