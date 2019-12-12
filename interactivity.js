const bigblindsArray = [ 200, 400, 600, 1000, 1500, 2000, 3000, 4000, 6000, 10000, 15000, 20000 ];
const jazzSolo1 = new Audio();
jazzSolo1.src = 'jazz_solo_1.mp3';

let hasStarted = false;
let timerIsActive = false;
let startTime = 0;
let level = 0;
let elapsedTime = 0;
let currentTime = 0;
let timerId;

function playTimer() {
	timerIsActive = true;
	pauseIcon.style.visibility = 'visible';
	playIcon.style.visibility = 'hidden';
	startTime = Date.now();
	timerId = setInterval(function() {
		timerCircle.textContent = calcCurrentTime();
		if (timerCircle.style.width !== window.innerWidth * 0.3 + 'px') {
			positionElements();
		}
	}, 10);
}

function pauseTimer() {
	clearInterval(timerId);
	elapsedTime = elapsedTime + currentTime;
	currentTime = 0;
	timerIsActive = false;
	pauseIcon.style.visibility = 'hidden';
	playIcon.style.visibility = 'visible';
}

function resetTimer() {
	clearInterval(timerId);
	hasStarted = false;
	timerIsActive = false;
	timerCircle.textContent = '';
	startTime = 0;
	currentTime = 0;
	elapsedTime = 0;
	level = 0;
	blindsCircle.textContent = bigblindsArray[0] / 2 + ' / ' + bigblindsArray[0];
	nextLevelBlinds.textContent = bigblindsArray[1] / 2 + ' / ' + bigblindsArray[1];
	startIcon.style.visibility = 'visible';
	pauseIcon.style.visibility = 'hidden';
	refreshIcon.style.visibility = 'hidden';
	playIcon.style.visibility = 'hidden';
}

function blindsUp() {
	if (bigblindsArray[level] === 1000) {
		blindsCircle.textContent = bigblindsArray[level] / 2 + ' / ' + bigblindsArray[level];
		nextLevelBlinds.textContent = '800 / ' + bigblindsArray[level + 1];
		return;
	}
	if (bigblindsArray[level] === 1500) {
		blindsCircle.textContent = '800 / ' + bigblindsArray[level];
		nextLevelBlinds.textContent = bigblindsArray[level + 1] / 2 + ' / ' + bigblindsArray[level + 1];
		return;
	}
	blindsCircle.textContent = bigblindsArray[level] / 2 + ' / ' + bigblindsArray[level];
	nextLevelBlinds.textContent = bigblindsArray[level + 1] / 2 + ' / ' + bigblindsArray[level + 1];
}

function calcCurrentTime() {
	currentTime = Date.now() - startTime;
	let milliSeconds = 900000 - Math.floor(elapsedTime + currentTime) % 900000;
	let seconds = milliSeconds / 1000;
	let minutes = seconds / 60;
	let tempLevel = level;
	level = Math.floor((elapsedTime + currentTime) / 900000);
	if (tempLevel !== level) {
		jazzSolo1.play();
	}
	blindsUp();

	if (bigblindsArray[level] === 20000) {
		resetTimer();
		return;
	}

	seconds = seconds - Math.floor(minutes) * 60;
	if (seconds < 10) {
		seconds = '0' + Math.floor(seconds);
	} else {
		seconds = Math.floor(seconds);
	}
	if (minutes < 10) {
		minutes = '0' + Math.floor(minutes);
	} else {
		minutes = Math.floor(minutes);
	}

	return minutes + ':' + seconds;
}

timerCircle.addEventListener('mousedown', function() {
	if (hasStarted === false) {
		refreshIcon.style.visibility = 'visible';
		startIcon.style.visibility = 'hidden';
		hasStarted = true;
		startTime = Date.now();
		playTimer();
		return;
	}

	if (timerIsActive === false) {
		playTimer();
		return;
	}

	pauseTimer();
	return;
});

refreshIcon.addEventListener('mousedown', function() {
	resetTimer();
	return;
});
