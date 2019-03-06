// VARIABLES

const createClearBtn = document.querySelector('#create-clear')
const colorBtn = document.querySelector('#color')
const gridContainer = document.querySelector('.grid-container')
var pixelList
// EVENT LISTENERS

createClearBtn.addEventListener('click', createGrid)
colorBtn.addEventListener('click', randomColorListener)

// FUNCTION
function addListener (e) {
  e.addEventListener('mouseover', function (event) {
    event.target.classList.add('permhover')
  })
}

function createGrid () {
  if (!gridContainer.hasChildNodes()) {
    let i
    let gridPixel
    let gridSize = prompt('Enter the size of grid you want!')

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`

    for (i = 0; i < (gridSize ** 2); i++) {
      gridPixel = document.createElement('div')
      gridPixel.style.height = (600 / gridSize).toString() + 'px'
      gridPixel.classList.add('pixel')
      gridContainer.appendChild(gridPixel)
    }
    pixelList = document.querySelectorAll('.pixel')
    pixelList.forEach(addListener)
  } else {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild)
    }
  }
}

function getRandomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function randomColorListener () {
  function addColorListener (e) {
    e.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = getRandomColor()
    })
  }
  pixelList.forEach(addColorListener)
}