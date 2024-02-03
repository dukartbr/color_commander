let isPlaying = false;
let clock = 60;
let itemCount = 0

let isMouseDown = false;
document.addEventListener('mousedown', () => {
  isMouseDown = true;
});
document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.getElementById('startButton').addEventListener('click', startButtonClickHandler)
document.getElementById('clock').innerHTML = clock.toString()

function startButtonClickHandler() {
	isPlaying = true;
	const timer = setInterval(() => {
		if (!isPlaying) {
			clearInterval(timer);
		}
		if (clock === 0) {
			clearInterval(timer);
			isPlaying = false
			clock = 60;
			document.getElementById('clock').innerHTML = clock.toString()
			alert('Timer finished!');
			return;
		}
		clock--;
		document.getElementById('clock').innerHTML = clock.toString()
	}, 1000);
}

const gridContainer = document.getElementById('main');

const rows = Math.floor((window.innerHeight - 20)/50);
const columns = Math.floor((window.innerWidth + 50)/50);

let boxesWithColor = []

function hoverHandler(e) {
	if (isPlaying) {
		if (boxesWithColor.length == itemCount) {
			alert('You win!')
			isPlaying = false
			clock = 60;
			document.getElementById('clock').innerHTML = clock.toString()
			return
		}
		if (isMouseDown && !boxesWithColor.includes(e.target.id)) {
			boxesWithColor.push(e.target.id)
			document.getElementById(e.target.id).style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
		} else if (isMouseDown && boxesWithColor.includes(e.target.id)) {
			boxesWithColor = boxesWithColor.filter((id) => id !== e.target.id)
			document.getElementById(e.target.id).style.backgroundColor = '#000000'
		}
	}
}

function mountBlackScreen() {

	for (let i = 0; i < rows; i++) {
		const row = document.createElement('div')
		row.setAttribute('id', `row-${i}`)
		row.style.display = 'flex'
		row.style.flexDirection = 'row'
		row.style.backgroundColor = '#000000'
		row.style.width = '100%'
		row.style.height = '50px'
		for (let j = 0; j < columns; j++) {
			const box = document.createElement('div')
			box.style.transition = 'height 1s'
			box.setAttribute('id', `row-${i}-box${j}`)
			box.addEventListener('mouseover', hoverHandler)
			box.style.backgroundColor = '#000000'
			box.style.height = '50px'
			box.style.width = '50px'
			row.appendChild(box)
			itemCount++
		}
		gridContainer.appendChild(row)
	}
}

mountBlackScreen()