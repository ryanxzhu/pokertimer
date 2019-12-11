const refreshIcon = document.getElementById('refreshIcon');
const pauseIcon = document.getElementById('pauseIcon');
const playIcon = document.getElementById('playIcon');
const startIcon = document.getElementById('startIcon');
const blueCircle = document.getElementsByClassName('blueCircle');
const icon = document.getElementsByClassName('icon');
const chips = document.getElementsByClassName('chips');
const chipValue = document.getElementsByClassName('chipValue');

positionElements();

document.body.style.margin = 0;
document.body.style.backgroundColor = 'black';

for (let i = 0; i < blueCircle.length; i++) {
	blueCircle[i].style.borderRadius = '50%';
	blueCircle[i].style.border = '1px solid #000aff';
	blueCircle[i].style.color = 'white';
	blueCircle[i].style.display = 'flex';
	blueCircle[i].style.alignItems = 'center';
	blueCircle[i].style.justifyContent = 'center';
	blueCircle[i].style.textAlign = 'center';
	blueCircle[i].style.fontFamily = 'Roboto, sans-serif';
	blueCircle[i].style.position = 'absolute';
	blueCircle[i].style.zIndex = '2';
}

for (let i = 0; i < icon.length; i++) {
	icon[i].style.position = 'absolute';
}

for (let i = 0; i < chips.length; i++) {
	chips[i].style.position = 'absolute';
	chipValue[i].style.position = 'absolute';
	chipValue[i].style.color = '#bababa';
	chipValue[i].style.fontFamily = 'Roboto, sans-serif';
}

startIcon.style.position = 'absolute';

function positionElements() {
	timerCircle.style.width = window.innerWidth * 0.3 + 'px';
	timerCircle.style.height = window.innerWidth * 0.3 + 'px';
	timerCircle.style.left = (window.innerWidth - timerCircle.clientWidth) / 2 + 'px';
	timerCircle.style.top = (window.innerHeight - timerCircle.clientHeight) / 2 * 0.6 + 'px';
	timerCircle.style.fontSize = timerCircle.clientWidth / 4 + 'px';

	blindsCircle.style.width = parseInt(timerCircle.style.width, 10) * 0.8 + 'px';
	blindsCircle.style.height = parseInt(timerCircle.style.height, 10) * 0.8 + 'px';
	blindsCircle.style.fontSize = blindsCircle.clientWidth / 5 + 'px';
	blindsCircle.style.top =
		parseInt(timerCircle.style.top, 10) + (timerCircle.clientHeight - blindsCircle.clientHeight) / 2 + 'px';
	blindsCircle.style.left = (parseInt(timerCircle.style.left, 10) - blindsCircle.clientWidth) / 2 + 'px';

	for (let i = 0; i < icon.length; i++) {
		icon[i].style.width = timerCircle.clientWidth * 0.2 + 'px';
	}

	for (let i = 0; i < chips.length; i++) {
		chips[i].style.height = timerCircle.clientHeight * 0.22 + 'px';
		chips[i].style.left = window.innerWidth * 0.75 + 'px';
		chips[i].style.top =
			parseInt(timerCircle.style.top, 10) +
			timerCircle.clientHeight / 4 * i +
			(timerCircle.clientHeight / 4 - chips[0].clientHeight) / 2 +
			'px';
		chipValue[i].style.fontSize = chips[0].clientHeight * 0.6 + 'px';
		chipValue[i].style.left = parseInt(chips[0].style.left, 10) + chips[0].clientWidth * 1.3 + 'px';
		chipValue[i].style.top =
			parseInt(chips[i].style.top, 10) + (chips[0].clientHeight - chipValue[0].clientHeight) / 2 + 'px';
	}

	startIcon.style.width = timerCircle.clientWidth * 0.4 + 'px';
	pauseIcon.style.left =
		parseInt(timerCircle.style.left, 10) + timerCircle.clientWidth / 2 - pauseIcon.clientWidth / 2 + 'px';
	playIcon.style.left =
		parseInt(timerCircle.style.left, 10) + timerCircle.clientWidth / 2 - playIcon.clientWidth / 2 + 'px';
	pauseIcon.style.top = parseInt(timerCircle.style.top, 10) + timerCircle.clientWidth / 9 + 'px';
	playIcon.style.top = parseInt(timerCircle.style.top, 10) + timerCircle.clientWidth / 9 + 'px';
	refreshIcon.style.left =
		parseInt(timerCircle.style.left, 10) + timerCircle.clientWidth / 2 - refreshIcon.clientWidth / 2 + 'px';
	refreshIcon.style.top = parseInt(timerCircle.style.top, 10) + timerCircle.clientHeight * 1.1 + 'px';
	startIcon.style.left =
		parseInt(timerCircle.style.left, 10) + timerCircle.clientWidth / 2 - startIcon.clientWidth / 2 + 'px';
	startIcon.style.top =
		parseInt(timerCircle.style.top, 10) + timerCircle.clientHeight / 2 - startIcon.clientHeight / 2 + 'px';
}

window.addEventListener('resize', positionElements);
window.addEventListener('orientationchange', positionElements);
