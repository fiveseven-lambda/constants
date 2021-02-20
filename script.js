var ans;

function set(def, a){
	document.getElementById("number").innerHTML = def;
	ans = a;
	document.getElementById("selector").style.display = "none";
}

function add(digit){
	prev = document.getElementById("number").innerHTML;
	len = prev.length;
	if(ans == undefined || digit == ans[len]){
		document.getElementById("number").innerHTML = prev + digit;
	}else{
		alert("小数点以下" + (len - 2) + "桁まで成功");
		document.getElementById("number").innerHTML = "";
		document.getElementById("selector").style.display = "block";
	}
}
