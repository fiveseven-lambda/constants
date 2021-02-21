var type;

var x, y;
function next_sqrt(){
	y *= BigInt(10);
	next_y = BigInt(0);
	tmp = BigInt(0);
	for(i = 1;; ++i){
		next_y += y;
		prev = tmp;
		tmp = BigInt(i * i) + next_y;
		if(tmp > x){
			x = (x - prev) * BigInt(100);
			y += BigInt(i - 1) * BigInt(2);
			return i - 1;
		}
	}
}

var wrong, ans;
var len;

function set_sqrt(num){
	type = 0;
	x = BigInt(num);
	y = BigInt(0);
	len = 0;
	wrong = 0;
	document.getElementById("number").innerHTML = next_sqrt() + '.';
	document.getElementById("selector").style.display = "none";
	document.getElementById("result").innerHTML = '#ルート' + num + 'チャレンジ';
}

function next(){
	if(type == 0){
		return next_sqrt();
	}
}

function del(){
	if(wrong != -1){
		if(wrong == 0){
			--len;
		}
		wrong = -1;
		document.getElementById("number").innerHTML = document.getElementById("number").innerHTML.slice(0, -1);
	}
}

function add(digit){
	if(type == undefined){
		return;
	}
	document.getElementById("number").innerHTML += digit;
	if(wrong == 0){
		ans = next();
	}else if(wrong == 1){
		result = "小数点以下" + len + "桁まで成功";
		alert(result);
		tagresult = document.getElementById("result").innerHTML + ' ' + result;
		document.getElementById("result").innerHTML = tagresult;
		type = undefined;
		document.getElementById("number").innerHTML = "";
		document.getElementById("selector").style.display = "block";
		$('a').html('<a href="https://twitter.com/share" class="twitter-share-button" data-text="' + tagresult + '\n" data-lang="ja">ツイート</a>')
		twttr.widgets.load()
		return;
	}
	if(ans == digit){
		wrong = 0;
		++len;
	}else{
		wrong = 1;
	}
}
