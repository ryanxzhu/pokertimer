const bigblindsArray = [ 10, 20, 40, 80, 100, 160, 200, 400, 600, 1000, 1500, 2000 ];
const smallblindsArray = [ 10, 10, 20, 40, 60, 80, 100, 200, 300, 500, 750, 1000 ];
const blindsUpPlease = new Audio();
blindsUpPlease.src = 'blinds-up-please.mp3';

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
	blindsCircle.textContent = smallblindsArray[0] + ' / ' + bigblindsArray[0];
	nextLevelBlinds.textContent = smallblindsArray[1] + ' / ' + bigblindsArray[1];
	chipStack.style.visibility = 'visible';
	startIcon.style.visibility = 'visible';
	pauseIcon.style.visibility = 'hidden';
	refreshIcon.style.visibility = 'hidden';
	playIcon.style.visibility = 'hidden';
}

function blindsUp() {
	blindsCircle.textContent = smallblindsArray[level] + ' / ' + bigblindsArray[level];
	nextLevelBlinds.textContent = smallblindsArray[level + 1] + ' / ' + bigblindsArray[level + 1];
}

function calcCurrentTime() {
	currentTime = Date.now() - startTime;
	let milliSeconds = 900000 - Math.floor(elapsedTime + currentTime) % 900000;
	let seconds = milliSeconds / 1000;
	let minutes = seconds / 60;
	let tempLevel = level;
	level = Math.floor((elapsedTime + currentTime) / 900000);
	if (tempLevel !== level) {
		blindsUpPlease.play();
	}
	blindsUp();

	if (bigblindsArray[level] === 2000) {
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

function pauseOrPlay() {
	chipStack.style.visibility = 'hidden';

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
}

timerCircle.addEventListener('mousedown', pauseOrPlay);

window.addEventListener('keydown', function(e) {
	if (e.keyCode !== 32) {
		return;
	}
	pauseOrPlay();
});

refreshIcon.addEventListener('mousedown', function() {
	blackBackground.style.display = 'block';
	greySquare[1].style.display = 'block';
	blackBackground.style.cursor = 'pointer';
	confirmYes.style.cursor = 'pointer';
	confirmNo.style.cursor = 'pointer';
	cancel.style.display = 'block';
	return;
});

chipStack.addEventListener('mousedown', function() {
	blackBackground.style.display = 'block';
	startingChips.style.display = 'block';
	blackBackground.style.cursor = 'pointer';
	cancel.style.display = 'block';
	return;
});

blackBackground.addEventListener('mousedown', function() {
	greySquare[1].style.display = 'none';
	cancel.style.display = 'none';
	blackBackground.style.display = 'none';
	startingChips.style.display = 'none';
	blackBackground.style.cursor = 'auto';
	return;
});

cancel.addEventListener('mousedown', function() {
	greySquare[1].style.display = 'none';
	cancel.style.display = 'none';
	blackBackground.style.display = 'none';
	startingChips.style.display = 'none';
	blackBackground.style.cursor = 'auto';
	return;
});

confirmYes.addEventListener('mousedown', function() {
	greySquare[1].style.display = 'none';
	blackBackground.style.display = 'none';
	cancel.style.display = 'none';
	resetTimer();
	return;
});

confirmNo.addEventListener('mousedown', function() {
	greySquare[1].style.display = 'none';
	blackBackground.style.display = 'none';
	cancel.style.display = 'none';
	return;
});

function GetClock() {
	var d = new Date();
	var nhour = d.getHours(),
		nmin = d.getMinutes(),
		ap;
	if (nhour == 0) {
		ap = ' AM';
		nhour = 12;
	} else if (nhour < 12) {
		ap = ' AM';
	} else if (nhour == 12) {
		ap = ' PM';
	} else if (nhour > 12) {
		ap = ' PM';
		nhour -= 12;
	}

	if (nmin <= 9) nmin = '0' + nmin;

	var clocktext = '' + nhour + ':' + nmin + ap + '';
	document.getElementById('clock').innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);
