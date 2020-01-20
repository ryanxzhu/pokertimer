// version 1.04
const refreshIcon = document.getElementById('refreshIcon');
const pauseIcon = document.getElementById('pauseIcon');
const playIcon = document.getElementById('playIcon');
const startIcon = document.getElementById('startIcon');
const blueCircle = document.getElementsByClassName('blueCircle');
const icon = document.getElementsByClassName('icon');
const chips = document.getElementsByClassName('chips');
const chipValue = document.getElementsByClassName('chipValue');
const noSelect = document.getElementsByClassName('noSelect');
const greySquare = document.getElementsByClassName('greySquare');
const cancel = document.getElementById('cancel');
const clock = document.getElementById('clock');
const whiteChip = new Image();
const redChip = new Image();
const blueChip = new Image();
const blackChip = new Image();

whiteChip.src = 'https://i.ibb.co/p17PTf3/whiteChip.png';
redChip.src = 'https://i.ibb.co/WD95zGw/redChip.png';
blueChip.src = 'https://i.ibb.co/h24GFxh/blueChip.png';
blackChip.src = 'https://i.ibb.co/j63Svpp/blackChip.png';

const blindsChipsImg = [];
const imgSrc = [
	'https://i.ibb.co/nmHh0rF/white-chip-slanted-small.png',
	'https://i.ibb.co/9Hq1GNb/red-chip-slanted-small.png',
	'https://i.ibb.co/wLhzstS/blue-chip-slanted-small.png',
	'https://i.ibb.co/Krp1kF0/black-chip-slanted-small.png'
];

for (let i = 0; i < 4; i++) {
	let imgArray = [];
	for (let j = 0; j < 3; j++) {
		imgArray.push(new Image());
		imgArray[j].style.position = 'absolute';
		imgArray[j].style.display = 'none';
		imgArray[j].src = imgSrc[i];
		imgArray[j].style.width = '0px';

		document.body.appendChild(imgArray[j]);
	}
	blindsChipsImg.push(imgArray);
}

const chipsToGive = [ whiteChip, redChip, blueChip, blackChip ];
const blindsChipsPos = [ [ 0.2, 0.75 ], [ 0.17, 0.66 ], [ 0.09, 0.58 ], [ 0.6, 0.75 ], [ 0.63, 0.66 ], [ 0.72, 0.58 ] ];
let startingAmount = [];
let totalStartingStack = document.createElement('div');
document.getElementById('startingChips').appendChild(totalStartingStack);

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

	chipsToGive[i].style.position = 'absolute';
	document.getElementById('startingChips').appendChild(chipsToGive[i]);
	startingAmount[i] = document.createElement('div');
	startingAmount[i].style.color = 'white';
	startingAmount[i].style.position = 'absolute';
	document.getElementById('startingChips').appendChild(startingAmount[i]);
}

startingAmount[0].textContent = '10';
startingAmount[1].textContent = '10';
startingAmount[2].textContent = '10';
startingAmount[3].textContent = '12';

totalStartingStack.style.position = 'absolute';
totalStartingStack.style.color = '#4d4d4d';
totalStartingStack.textContent = 'Total: 20,000';
totalStartingStack.style.textAlign = 'center';

confirmYes.style.position = 'absolute';
confirmYes.style.backgroundColor = 'transparent';
confirmYes.style.border = '1px solid #000aff';
confirmYes.style.color = 'white';

confirmNo.style.backgroundColor = 'transparent';
confirmNo.style.border = '1px solid #000aff';
confirmNo.style.color = 'white';
confirmNo.style.position = 'absolute';

confirmRestart.style.color = 'white';

clock.style.position = 'absolute';
clock.style.color = '#bababa';

positionElements();

/****************************************************************************************************/
/******************************** POSITION ELEMENTS HORIZONTALLY ************************************/
/****************************************************************************************************/

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

		chipsToGive[i].style.right = parseFloat(greySquare[0].style.width) * 0.35 + 'px';
		chipsToGive[i].style.height = parseFloat(greySquare[0].style.height) * 0.13 + 'px';
		chipsToGive[i].style.top =
			parseFloat(greySquare[0].style.height) * i * 0.17 +
			(parseFloat(greySquare[0].style.height) - parseFloat(greySquare[0].style.height) * 4 * 0.17) / 2 +
			'px';

		startingAmount[i].style.fontSize = parseFloat(greySquare[0].style.height) * 0.12 + 'px';
		startingAmount[i].style.left = parseFloat(greySquare[0].style.width) * 0.35 + 'px';
		startingAmount[i].style.top =
			parseFloat(greySquare[0].style.height) * i * 0.17 +
			(parseFloat(greySquare[0].style.height) - parseFloat(greySquare[0].style.height) * 4 * 0.17) / 2 +
			'px';

		greySquare[0].style.fontSize = parseFloat(greySquare[0].style.height) * 0.1 + 'px';
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
	chipStack.style.left = window.innerWidth * 0.88 + 'px';
	chipStack.style.top = parseFloat(refreshIcon.style.top) * 0.96 + 'px';
	chipStack.style.cursor = 'pointer';

	greySquare[0].style.height = window.innerHeight * 0.99 + 'px';
	greySquare[0].style.width = greySquare[0].style.height;
	greySquare[0].style.top = 0;
	greySquare[0].style.left = (window.innerWidth - parseFloat(greySquare[0].style.height)) / 2 + 'px';

	greySquare[1].style.height = window.innerHeight * 0.99 + 'px';
	greySquare[1].style.width = greySquare[0].style.height;
	greySquare[1].style.top = 0;
	greySquare[1].style.left = (window.innerWidth - parseFloat(greySquare[0].style.height)) / 2 + 'px';

	totalStartingStack.style.top = parseFloat(greySquare[0].style.height) * 0.85 + 'px';
	totalStartingStack.style.width = parseFloat(greySquare[0].style.width) + 'px';

	blackBackground.style.width = window.innerWidth + 'px';
	blackBackground.style.height = window.innerHeight + 'px';

	confirmYes.style.width = parseFloat(confirmRestart.style.width) * 0.4 + 'px';
	confirmYes.style.fontSize = parseFloat(confirmRestart.style.width) * 0.1 + 'px';
	confirmYes.style.left = parseFloat(confirmRestart.style.width) * 0.07 + 'px';
	confirmYes.style.top = parseFloat(confirmRestart.style.width) * 0.7 + 'px';
	confirmYes.style.borderRadius = '500px';

	confirmNo.style.width = parseFloat(confirmRestart.style.width) * 0.4 + 'px';
	confirmNo.style.fontSize = parseFloat(confirmRestart.style.width) * 0.1 + 'px';
	confirmNo.style.right = parseFloat(confirmRestart.style.width) * 0.07 + 'px';
	confirmNo.style.top = parseFloat(confirmRestart.style.width) * 0.7 + 'px';
	confirmNo.style.borderRadius = '500px';

	confirmRestart.style.fontSize = parseFloat(confirmRestart.style.width) * 0.1 + 'px';

	clock.style.left = window.innerWidth * 0.02 + 'px';
	clock.style.top = window.innerHeight * 0.03 + 'px';
	clock.style.fontSize = window.innerHeight * 0.07 + 'px';

	cancel.style.fontSize = window.innerWidth * 0.05 + 'px';
}

/**************************************************************************************************/
/******************************** POSITION ELEMENTS VERTICALLY ************************************/
/**************************************************************************************************/

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

		chipsToGive[i].style.right = parseFloat(greySquare[0].style.width) * 0.35 + 'px';
		chipsToGive[i].style.height = parseFloat(greySquare[0].style.height) * 0.13 + 'px';
		chipsToGive[i].style.top =
			parseFloat(greySquare[0].style.height) * i * 0.17 +
			(parseFloat(greySquare[0].style.height) - parseFloat(greySquare[0].style.height) * 4 * 0.17) / 2 +
			'px';

		startingAmount[i].style.fontSize = parseFloat(greySquare[0].style.height) * 0.12 + 'px';
		startingAmount[i].style.left = parseFloat(greySquare[0].style.width) * 0.35 + 'px';
		startingAmount[i].style.top =
			parseFloat(greySquare[0].style.height) * i * 0.17 +
			(parseFloat(greySquare[0].style.height) - parseFloat(greySquare[0].style.height) * 4 * 0.17) / 2 +
			'px';
		greySquare[0].style.fontSize = parseFloat(greySquare[0].style.height) * 0.1 + 'px';
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
	chipStack.style.left = window.innerWidth * 0.78 + 'px';
	chipStack.style.top = window.innerHeight * 0.01 + 'px';
	chipStack.style.cursor = 'pointer';

	greySquare[0].style.width = window.innerWidth * 0.99 + 'px';
	greySquare[0].style.height = greySquare[0].style.width;
	greySquare[0].style.top = (window.innerHeight - parseFloat(greySquare[0].style.height)) / 2 + 'px';
	greySquare[0].style.left = 0;

	greySquare[1].style.width = window.innerWidth * 0.99 + 'px';
	greySquare[1].style.height = greySquare[0].style.width;
	greySquare[1].style.top = (window.innerHeight - parseFloat(greySquare[0].style.height)) / 2 + 'px';
	greySquare[1].style.left = 0;

	totalStartingStack.style.top = parseFloat(greySquare[0].style.height) * 0.85 + 'px';
	totalStartingStack.style.width = parseFloat(greySquare[0].style.width) + 'px';

	blackBackground.style.width = window.innerWidth + 'px';
	blackBackground.style.height = window.innerHeight + 'px';

	confirmYes.style.width = parseFloat(confirmRestart.style.width) * 0.4 + 'px';
	confirmYes.style.fontSize = parseFloat(confirmRestart.style.width) * 0.1 + 'px';
	confirmYes.style.left = parseFloat(confirmRestart.style.width) * 0.07 + 'px';
	confirmYes.style.top = parseFloat(confirmRestart.style.width) * 0.7 + 'px';
	confirmYes.style.borderRadius = '500px';

	confirmNo.style.width = parseFloat(confirmRestart.style.width) * 0.4 + 'px';
	confirmNo.style.fontSize = parseFloat(confirmRestart.style.width) * 0.1 + 'px';
	confirmNo.style.right = parseFloat(confirmRestart.style.width) * 0.07 + 'px';
	confirmNo.style.top = parseFloat(confirmRestart.style.width) * 0.7 + 'px';
	confirmNo.style.borderRadius = '500px';

	confirmRestart.style.fontSize = parseFloat(confirmRestart.style.width) * 0.1 + 'px';

	clock.style.left = window.innerWidth * 0.03 + 'px';
	clock.style.top = window.innerHeight * 0.01 + 'px';
	clock.style.fontSize = window.innerWidth * 0.07 + 'px';

	cancel.style.fontSize = window.innerHeight * 0.05 + 'px';
}

/*****************************BLINDS POSITIONS********************************/

function updateBlindsImg() {
	for (let i = 0; i < blindsChipsImg.length; i++) {
		for (let j = 0; j < blindsChipsImg[i].length; j++) {
			blindsChipsImg[i][j].style.display = 'none';
		}
	}
	switch (blindsCircle.textContent) {
		case '100 / 200':
			drawBlinds(blindsChipsImg[0][0], 1);
			drawBlinds(blindsChipsImg[0][1], 3);
			drawBlinds(blindsChipsImg[0][2], 4);
			return;

		case '200 / 400':
			drawBlinds(blindsChipsImg[1][0], 1);
			drawBlinds(blindsChipsImg[1][1], 3);
			drawBlinds(blindsChipsImg[1][2], 4);
			return;

		case '300 / 600':
			drawBlinds(blindsChipsImg[0][0], 0);
			drawBlinds(blindsChipsImg[1][0], 1);
			drawBlinds(blindsChipsImg[0][1], 3);
			drawBlinds(blindsChipsImg[2][0], 4);
			return;
		case '500 / 1000':
			drawBlinds(blindsChipsImg[2][0], 1);
			drawBlinds(blindsChipsImg[3][0], 4);
			return;
		case '800 / 1500':
			drawBlinds(blindsChipsImg[0][0], 0);
			drawBlinds(blindsChipsImg[1][0], 1);
			drawBlinds(blindsChipsImg[2][0], 2);
			drawBlinds(blindsChipsImg[2][1], 3);
			drawBlinds(blindsChipsImg[3][0], 4);
			return;
		case '1000 / 2000':
			drawBlinds(blindsChipsImg[3][0], 1);
			drawBlinds(blindsChipsImg[3][1], 3);
			drawBlinds(blindsChipsImg[3][2], 4);
			return;
		case '1500 / 3000':
			drawBlinds(blindsChipsImg[2][0], 0);
			drawBlinds(blindsChipsImg[2][1], 1);
			drawBlinds(blindsChipsImg[2][2], 2);
			drawBlinds(blindsChipsImg[3][0], 3);
			drawBlinds(blindsChipsImg[3][1], 4);
			drawBlinds(blindsChipsImg[3][2], 5);
			return;
	}
}

function drawBlinds(chip, pos) {
	chip.style.width = parseFloat(blindsCircle.style.width) * 0.2 + 'px';
	chip.style.left =
		parseFloat(blindsCircle.style.left) + parseFloat(blindsCircle.style.width) * blindsChipsPos[pos][0] + 'px';
	chip.style.top =
		parseFloat(blindsCircle.style.top) + parseFloat(blindsCircle.style.height) * blindsChipsPos[pos][1] + 'px';

	chip.style.display = 'block';
}

function positionElements() {
	updateBlindsImg();
	if (window.innerHeight > window.innerWidth) {
		positionElementsVertically();
		return;
	}
	positionElementsHorizontally();
}

window.addEventListener('resize', positionElements);
window.addEventListener('orientationchange', positionElements);
var regularlyPosElementsId = setInterval(positionElements, 100);
