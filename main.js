function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	
	if (one.value == "background"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：background";
	}

	if (two.value == "ellipseMode(CORNER);"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：ellipseMode(CORNER);";
	}
	
	if (three.value == "arc(120,30,120,120,HALF_PI,PI+HALF_PI);"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：arc(120,30,120,120,HALF_PI,PI+HALF_PI);";
	}

	
}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");




let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);



