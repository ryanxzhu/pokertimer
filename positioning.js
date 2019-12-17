const refreshIcon = document.getElementById('refreshIcon');
const pauseIcon = document.getElementById('pauseIcon');
const playIcon = document.getElementById('playIcon');
const startIcon = document.getElementById('startIcon');
const blueCircle = document.getElementsByClassName('blueCircle');
const icon = document.getElementsByClassName('icon');
const chips = document.getElementsByClassName('chips');
const chipValue = document.getElementsByClassName('chipValue');
const noSelect = document.getElementsByClassName('noSelect');

document.body.style.margin = 0;
document.body.style.backgroundColor = 'black';
document.body.style.fontFamily = 'Roboto, sans-serif';

startIcon.style.position = 'absolute';
startIcon.style.visibility = 'visible';
timerCircle.style.cursor = 'pointer';
refreshIcon.style.cursor = 'pointer';

blinds.style.color = '#4d4d4d';
blinds.style.fontWeight = 'bold';
blinds.style.position = 'absolute';
blinds.style.textAlign = 'center';

nextLevelHeading.style.color = '#4d4d4d';
nextLevelHeading.style.fontWeight = 'bold';
nextLevelHeading.style.position = 'absolute';
nextLevelHeading.style.textAlign = 'center';

nextLevelBlinds.style.color = '#bababa';
nextLevelBlinds.style.position = 'absolute';
nextLevelBlinds.style.textAlign = 'center';

chipStack.style.visibility = 'visible';
chipStack.style.position = 'absolute';
chipStack.style.zIndex = '2';

positionElements();

for (let i = 0; i < blueCircle.length; i++) {
	blueCircle[i].style.borderRadius = '50%';
	blueCircle[i].style.border = '1px solid #000aff';
	blueCircle[i].style.color = 'white';
	blueCircle[i].style.display = 'flex';
	blueCircle[i].style.alignItems = 'center';
	blueCircle[i].style.justifyContent = 'center';
	blueCircle[i].style.textAlign = 'center';
	blueCircle[i].style.position = 'absolute';
	blueCircle[i].style.zIndex = '2';
}

for (let i = 0; i < icon.length; i++) {
	icon[i].style.position = 'absolute';
}

for (let i = 0; i < chips.length; i++) {
	chips[i].style.position = 'absolute';
	chips[i].style.visibility = 'visible';
	chipValue[i].style.position = 'absolute';
	chipValue[i].style.color = '#bababa';
}

function positionElementsHorizontally() {
	timerCircle.style.width = window.innerWidth * 0.3 + 'px';
	timerCircle.style.height = window.innerWidth * 0.3 + 'px';
	timerCircle.style.left = (window.innerWidth - parseFloat(timerCircle.style.width)) / 2 + 'px';
	timerCircle.style.top = (window.innerHeight - parseFloat(timerCircle.style.height)) / 2 * 0.6 + 'px';
	timerCircle.style.fontSize = parseFloat(timerCircle.style.width) / 4 + 'px';

	blindsCircle.style.width = parseFloat(timerCircle.style.width) * 0.8 + 'px';
	blindsCircle.style.height = parseFloat(timerCircle.style.height) * 0.8 + 'px';
	blindsCircle.style.fontSize = parseFloat(blindsCircle.style.width) / 6 + 'px';
	blindsCircle.style.top =
		parseFloat(timerCircle.style.top) +
		(parseFloat(timerCircle.style.height) - parseFloat(blindsCircle.style.height)) / 2 +
		'px';
	blindsCircle.style.left = (parseFloat(timerCircle.style.left) - parseFloat(blindsCircle.style.width)) / 2 + 'px';

	blinds.style.fontSize = parseFloat(blindsCircle.style.fontSize) * 0.6 + 'px';
	blinds.style.width = parseFloat(blindsCircle.style.width) * 0.5 + 'px';
	blinds.style.left =
		parseFloat(blindsCircle.style.left) +
		parseFloat(blindsCircle.style.width) / 2 -
		parseFloat(blinds.style.width) / 2 +
		'px';
	blinds.style.top = parseFloat(blindsCircle.style.top) + parseFloat(blindsCircle.style.height) / 4 + 'px';

	nextLevelHeading.style.fontSize = parseFloat(blindsCircle.style.fontSize) * 0.4 + 'px';
	nextLevelHeading.style.width = parseFloat(blindsCircle.style.width) * 0.7 + 'px';
	nextLevelHeading.style.left =
		parseFloat(blindsCircle.style.left) +
		parseFloat(blindsCircle.style.width) / 2 -
		parseFloat(nextLevelHeading.style.width) / 2 +
		'px';
	nextLevelHeading.style.top =
		parseFloat(blindsCircle.style.top) + parseFloat(blindsCircle.style.height) * 1.1 + 'px';

	nextLevelBlinds.style.fontSize = parseFloat(blindsCircle.style.fontSize) * 0.8 + 'px';
	nextLevelBlinds.style.width = parseFloat(blindsCircle.style.width) * 1.2 + 'px';
	nextLevelBlinds.style.left =
		parseFloat(blindsCircle.style.left) +
		parseFloat(blindsCircle.style.width) / 2 -
		parseFloat(nextLevelBlinds.style.width) / 2 +
		'px';
	nextLevelBlinds.style.top = parseFloat(blindsCircle.style.top) + parseFloat(blindsCircle.style.width) * 1.2 + 'px';

	for (let i = 0; i < icon.length; i++) {
		icon[i].style.width = parseFloat(timerCircle.style.width) * 0.2 + 'px';
	}

	for (let i = 0; i < chips.length; i++) {
		chips[i].style.height = parseFloat(timerCircle.style.width) * 0.22 + 'px';
		chips[i].style.left = window.innerWidth * 0.75 + 'px';
		chips[i].style.top =
			parseFloat(timerCircle.style.top) +
			parseFloat(timerCircle.style.height) / 4 * i +
			(parseFloat(timerCircle.style.height) / 4 - parseFloat(chips[i].style.height)) / 2 +
			'px';
		chipValue[i].style.fontSize = parseFloat(chips[i].style.height) * 0.6 + 'px';
		chipValue[i].style.left = window.innerWidth * 0.84 + 'px';
		chipValue[i].style.top =
			parseFloat(chips[i].style.top) + (parseFloat(chips[i].style.height) - chipValue[i].clientHeight) / 2 + 'px';
	}

	startIcon.style.height = parseFloat(timerCircle.style.height) * 0.4 + 'px';
	pauseIcon.style.left =
		parseFloat(timerCircle.style.left) +
		parseFloat(timerCircle.style.height) / 2 -
		parseFloat(pauseIcon.style.width) / 2 +
		'px';
	playIcon.style.left =
		parseFloat(timerCircle.style.left) +
		parseFloat(timerCircle.style.width) / 2 -
		parseFloat(playIcon.style.width) / 2 +
		'px';
	pauseIcon.style.top = parseFloat(timerCircle.style.top) + parseFloat(timerCircle.style.width) / 9 + 'px';
	playIcon.style.top = parseFloat(timerCircle.style.top) + parseFloat(timerCircle.style.width) / 9 + 'px';
	refreshIcon.style.left =
		parseFloat(timerCircle.style.left) +
		parseFloat(timerCircle.style.width) / 2 -
		parseFloat(refreshIcon.style.width) / 2 +
		'px';
	refreshIcon.style.top = parseFloat(timerCircle.style.top) + parseFloat(timerCircle.style.height) * 1.1 + 'px';
	startIcon.style.left =
		parseFloat(timerCircle.style.left) +
		parseFloat(timerCircle.style.width) / 2 -
		parseFloat(startIcon.style.height) / 2 +
		'px';
	startIcon.style.top =
		parseFloat(timerCircle.style.top) +
		parseFloat(timerCircle.style.height) / 2 -
		parseFloat(startIcon.style.height) / 2 +
		'px';
	chipStack.style.width = window.innerHeight * 0.2 + 'px';
	chipStack.style.right = window.innerWidth * 0.02 + 'px';
	chipStack.style.top = parseFloat(refreshIcon.style.top) * 0.96 + 'px';
	chipStack.style.cursor = 'pointer';
}

function positionElementsVertically() {
	timerCircle.style.width = window.innerHeight * 0.33 + 'px'; // changed for vertical
	timerCircle.style.height = window.innerHeight * 0.33 + 'px'; // changed for vertical
	timerCircle.style.left = (window.innerWidth - parseFloat(timerCircle.style.width)) / 2 + 'px';
	timerCircle.style.top = (window.innerHeight - parseFloat(timerCircle.style.height)) / 1.6 + 'px'; // changed for vertical
	timerCircle.style.fontSize = parseFloat(timerCircle.style.width) / 4 + 'px';

	blindsCircle.style.width = parseFloat(timerCircle.style.width) * 0.8 + 'px';
	blindsCircle.style.height = parseFloat(timerCircle.style.height) * 0.8 + 'px';
	blindsCircle.style.fontSize = parseFloat(blindsCircle.style.width) / 6 + 'px';
	blindsCircle.style.top = (parseFloat(timerCircle.style.top) - parseFloat(blindsCircle.style.height)) / 4 + 'px'; // changed for vertical
	blindsCircle.style.left =
		parseFloat(timerCircle.style.left) +
		(parseFloat(timerCircle.style.width) - parseFloat(blindsCircle.style.width)) / 2 +
		'px'; // changed for vertical

	blinds.style.fontSize = parseFloat(blindsCircle.style.fontSize) * 0.6 + 'px';
	blinds.style.width = parseFloat(blindsCircle.style.width) * 0.5 + 'px';
	blinds.style.left =
		parseFloat(blindsCircle.style.left) +
		parseFloat(blindsCircle.style.width) / 2 -
		parseFloat(blinds.style.width) / 2 +
		'px';
	blinds.style.top = parseFloat(blindsCircle.style.top) + parseFloat(blindsCircle.style.height) / 4 + 'px';

	nextLevelHeading.style.fontSize = parseFloat(blindsCircle.style.fontSize) * 0.4 + 'px';
	nextLevelHeading.style.width = parseFloat(blindsCircle.style.width) * 0.7 + 'px';
	nextLevelHeading.style.left =
		parseFloat(blindsCircle.style.left) +
		parseFloat(blindsCircle.style.width) / 2 -
		parseFloat(nextLevelHeading.style.width) / 2 +
		'px';
	nextLevelHeading.style.top =
		parseFloat(blindsCircle.style.top) + parseFloat(blindsCircle.style.height) * 1.1 + 'px';

	nextLevelBlinds.style.fontSize = parseFloat(blindsCircle.style.fontSize) * 0.8 + 'px';
	nextLevelBlinds.style.width = parseFloat(blindsCircle.style.width) * 1.2 + 'px';
	nextLevelBlinds.style.left =
		parseFloat(blindsCircle.style.left) +
		parseFloat(blindsCircle.style.width) / 2 -
		parseFloat(nextLevelBlinds.style.width) / 2 +
		'px';
	nextLevelBlinds.style.top = parseFloat(blindsCircle.style.top) + parseFloat(blindsCircle.style.height) * 1.2 + 'px';

	for (let i = 0; i < icon.length; i++) {
		icon[i].style.width = parseFloat(timerCircle.style.width) * 0.2 + 'px';
	}

	for (let i = 0; i < chips.length; i++) {
		chips[i].style.height = parseFloat(timerCircle.style.height) * 0.2 + 'px';
		chips[i].style.left =
			parseFloat(timerCircle.style.left) +
			parseFloat(timerCircle.style.width) / 4 * i +
			(parseFloat(timerCircle.style.width) / 4 - parseFloat(chips[i].style.height)) / 2 +
			'px'; // changed for vertical
		chips[i].style.top = window.innerHeight * 0.86 + 'px'; // changed for vertical
		chipValue[i].style.fontSize = parseFloat(chips[i].style.height) * 0.4 + 'px';
		chipValue[i].style.width = parseFloat(timerCircle.style.width) / 4 + 'px'; // changed for vertical
		chipValue[i].style.textAlign = 'center'; // changed for vertical
		chipValue[i].style.left =
			parseFloat(timerCircle.style.left) + parseFloat(timerCircle.style.width) / 4 * i + 'px'; // changed for vertical
		chipValue[i].style.top = window.innerHeight * 0.94 + 'px'; // changed for vertical
	}

	startIcon.style.height = parseFloat(timerCircle.style.height) * 0.4 + 'px';
	pauseIcon.style.left =
		parseFloat(timerCircle.style.left) +
		parseFloat(timerCircle.style.width) / 2 -
		parseFloat(pauseIcon.style.width) / 2 +
		'px';
	playIcon.style.left =
		parseFloat(timerCircle.style.left) +
		parseFloat(timerCircle.style.width) / 2 -
		parseFloat(playIcon.style.width) / 2 +
		'px';
	pauseIcon.style.top = parseFloat(timerCircle.style.top) + parseFloat(timerCircle.style.width) / 9 + 'px';
	playIcon.style.top = parseFloat(timerCircle.style.top) + parseFloat(timerCircle.style.width) / 9 + 'px';
	refreshIcon.style.left =
		parseFloat(timerCircle.style.left) +
		parseFloat(timerCircle.style.width) / 2 -
		parseFloat(refreshIcon.style.width) / 2 +
		'px';
	refreshIcon.style.top = parseFloat(timerCircle.style.top) + parseFloat(timerCircle.style.height) * 1.05 + 'px';
	startIcon.style.left =
		parseFloat(timerCircle.style.left) +
		parseFloat(timerCircle.style.width) / 2 -
		parseFloat(startIcon.style.height) / 2 +
		'px';
	startIcon.style.top =
		parseFloat(timerCircle.style.top) +
		parseFloat(timerCircle.style.height) / 2 -
		parseFloat(startIcon.style.height) / 2 +
		'px';
	chipStack.style.width = window.innerWidth * 0.2 + 'px';
	chipStack.style.right = 0;
	chipStack.style.top = '1%';
	chipStack.style.cursor = 'pointer';
}

function positionElements() {
	if (window.innerHeight > window.innerWidth) {
		positionElementsVertically();
		return;
	}
	positionElementsHorizontally();
}

window.addEventListener('resize', positionElements);
window.addEventListener('orientationchange', positionElements);
var regularlyPosElementsId = setInterval(function() {
	positionElements();
}, 100);
