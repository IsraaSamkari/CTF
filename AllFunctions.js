function PageLv1(){
	window.open("vrojk3nqz.html","_self")
}

function PageLv2(){
	window.open("xutp9wbla.html","_self")
}

function PageLv3(){
	window.open("grelvzm08.html","_self")
}

function PageLv4(){
	window.open("kynqdrfwe.html","_self")
}

function PageLv5(){
	window.open("zibm7coxl.html","_self")
}


function checkSecretNumber(){
	const userInput = document.getElementById('wordInput').value.trim();
	const resultElement = document.getElementById('result');
	const button = document.getElementById('button7');
	if (userInput == 1829) {
		resultElement.textContent = "صح";
		resultElement.className = "correct-answer";
		const prizeDiv = document.getElementById('prize');
		prizeDiv.innerHTML = '<button class="btn btn-success mt-3 center" onclick="PageLv5()">إلى المرحلة الأخيرة ☺ </button>';
	} else {
		resultElement.textContent = "خطأ";
		resultElement.className = "wrong-answer shake";
		
		// Shake effect
		button.classList.add("shake");
		setTimeout(() => button.classList.remove("shake"), 500);
		
	}
}



function checkCaesarCipher(text) {
	if (text === "hacking is fun") {
		return true;
	} else {
		return false;
	}
}




// This is your SQLite data converted to JavaScript objects
const users = [
	{ username: 'john_doe', password: 'securepass123' },
	{ username: 'jane_smith', password: 'p@ssw0rd!' },
	{ username: 'mike_jones', password: 'mikepass789' },
	{ username: 'sarah_connor', password: 'terminator2' },
	{ username: 'admin_user', password: 'Adm1nP@ss' },
	{ username: 'test_account', password: 'test1234' },
	{ username: 'demo_user', password: 'demoPass!' },
	{ username: 'alice_wonder', password: 'rabbitHole' },
	{ username: 'bob_builder', password: 'canWeFixIt' },
	{ username: 'guest_user', password: 'guestAccess' }
];
