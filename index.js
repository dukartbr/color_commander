const colors = [
	'red',
	'blue',
	'green',
	'yellow',
	'orange',
	'pink'
]

// setInterval(() => {
// 	document.getElementById('topContainer').style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.random() * 255}, ${Math.random() * 255})`
// }, 1000)

// setInterval(() => {
// 	document.getElementById('bottomContainer').style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.random() * 255}, ${Math.random() * 255})`
// }, 900)

// setInterval(() => {

// 	document.getElementById('main').style.background =  `linear-gradient(${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]})`
// }, 1000)

let isMouseDown = false;

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Get reference to the grid container element
const gridContainer = document.getElementById('main');

// Define the number of rows and columns for the grid
const rows = Math.floor((window.innerHeight + 50)/50);
const columns = Math.floor((window.innerWidth + 50)/50);

function clickHandler(e) {
	document.getElementById(e.target.id).style.backgroundColor = '#ffffff'
}

function hoverHandler(e) {
	if (isMouseDown) {
		document.getElementById(e.target.id).style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
	}
}

for (let i = 0; i < rows; i++) {
	const row = document.createElement('div')
	row.setAttribute('id', `row-${i}`)
	row.style.display = 'flex'
	row.style.flexDirection = 'row'
	// row.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
	row.style.backgroundColor = '#000000'
	row.style.width = '100%'
	row.style.height = '50px'
	for (let j = 0; j < columns; j++) {
		const box = document.createElement('div')
		box.setAttribute('id', `row-${i}-box${j}`)
		box.addEventListener('click', clickHandler)
		box.addEventListener('mouseover', hoverHandler)

		// box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
		box.style.backgroundColor = '#000000'
		box.style.height = '50px'
		box.style.width = '50px'
		row.appendChild(box)
	}
	gridContainer.appendChild(row)
}