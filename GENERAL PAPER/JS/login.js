const form = document.querySelector("form");
const students=["JSS1","JSS2","JSS3","SSS1","SSS2","SSS3"]

//Login authenticaion
form.addEventListener("submit",(e)=>{
	e.preventDefault()
	const username=form.username.value
	const password=form.password.value
	
	const authenticated= authentication(username,password)
	if (authenticated){
		localStorage.setItem("username",username)
		window.location.href= "./question/ICT/MATHS.html"
	} else{
		alert("wrong")
	}
})

function authentication(username,password){
	const isPassword=students.find(x=> x==password)
	console.log("text: ", isPassword)
	if (username && isPassword){
		return true
	}else{
		return false
	}
}