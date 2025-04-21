updateView()
function updateView() {
  document.getElementById('app').innerHTML = /*HTML*/`
 
  <div class="container">
  <div id="gameover"></div>
    ${generateDiv()}
  </div>
  `
  whereSnakeStart()
  generateFood()
  document.querySelector('#gameover').classList.remove('gameover')
  document.querySelector('#gameover').classList.add('gameon')
}

// 스타일 건드는 함수 다 고치기


function generateDiv() {
  let html = ''
  for (let i = 1; i <= 30; i++) {
    for (let o = 1; o <= 30; o++) {
      html += /*HTML*/
        `<div class = "cell" data-x="${o}" data-y="${i}"></div>`
      model.data.table.push({ x: o, y: i })
    }
  }
  return html// updateView로리턴

}//generateTable끝

function whereSnakeStart() {
  let container = Array.from(document.querySelectorAll('.cell'))
  let cell = container.find(cell =>
    cell.dataset.x === model.data.fixedLocations.snakeStartPoint[0] &&
    cell.dataset.y === model.data.fixedLocations.snakeStartPoint[1])
  model.app.snake_location[0] = 10
  model.app.snake_location[1] = 10
  model.app.tableStyleInfo.snakelength = 1
  model.app.snakeTrail.push(model.app.snake_location)
  cell.classList.add('snakeHead')
}

function generateFood() {
  let container = Array.from(document.querySelectorAll('.cell'))

  if (container.find(cell => cell.classList.contains('snakeFood'))) return

  let x = Math.floor(Math.random() * 900)
  let cellAddress = model.data.table[x]

  let cell = container.find(cell =>
    parseInt(cell.dataset.x) === cellAddress.x &&
    parseInt(cell.dataset.y) === cellAddress.y)
  console.log('food:', model.app.tableStyleInfo.snakefood)

  model.app.tableStyleInfo.snakefood[0] = cellAddress.x
  model.app.tableStyleInfo.snakefood[1] = cellAddress.y
  cell.classList.toggle('snakeFood')


  return cell
}

let startSnake

function gameOver() {
  if (startSnake) { clearInterval(startSnake) }

  document.removeEventListener('keydown', startGame)

  document.querySelector('#gameover').classList.add('gameover')
  document.querySelector('#gameover').classList.remove('gameon')
  
  document.querySelector('#gameover').innerHTML = /*HTML*/`
  <h1>Game Over<h1>
  <button onclick="updateView();movement()">restart</button>`

}

function snakeStyle() {
  
  let container = Array.from(document.querySelectorAll('.cell'))
  container.forEach(cell => {
    cell.classList.remove('snakeHead')
  });
  let snake = []
  for (let i = 0; i < model.app.tableStyleInfo.snakelength; i++) {
    let cell = container.find(cell =>
      parseInt(cell.dataset.x) === model.app.snakeTrail[i][0] &&
      parseInt(cell.dataset.y) === model.app.snakeTrail[i][1])
      if(!cell)return
    cell.classList.add('snakeHead')
    if (snake.includes(cell)) { gameOver() }
    snake.push(cell)
  }

}

function eatFood() {
  let container = Array.from(document.querySelectorAll('.cell'))
  let currentCell = container.find(cell =>
    parseInt(cell.dataset.x) === model.app.snake_location[0] &&
    parseInt(cell.dataset.y) === model.app.snake_location[1])
  currentCell.classList.toggle('snakeFood')
  currentCell.classList.add('snakeHead')

  model.app.tableStyleInfo.snakelength += 1

}
