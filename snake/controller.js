document.addEventListener('DOMContentLoaded', movement)

function movement() {
  let keycode = ''
  document.addEventListener('keydown', startGame)

  return keycode
}
function startGame(event) {
  if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) return
  if (startSnake) { clearInterval(startSnake) }
  startSnake = setInterval(() => {
    if (model.app.tableStyleInfo.snakefood[0] === model.app.snake_location[0] &&
      model.app.tableStyleInfo.snakefood[1] === model.app.snake_location[1]
    ) {
      console.log('eat!')
      eatFood()
      generateFood()
    }

    newLocationToSnake(event.code)
  }, 315 - (model.app.tableStyleInfo.snakelength * 15));
}

function newLocationToSnake(code) {
  let keycode = code
  console.log('snake location before', model.app.snake_location)
  if (model.app.snake_location[0] < 1 || model.app.snake_location[1] < 1 ||
    model.app.snake_location[0] >= 30 || model.app.snake_location[1] >= 30) {
    gameOver()
  return
  }
  if (keycode === 'ArrowUp') {
    model.app.snake_location[1] -= 1
  }
  if (keycode === 'ArrowDown') {
    model.app.snake_location[1] += 1
  }
  if (keycode === 'ArrowLeft') {
    model.app.snake_location[0] -= 1
  }
  if (keycode === 'ArrowRight') {
    model.app.snake_location[0] += 1
  }
  console.log('snake location after', model.app.snake_location)
  // model.app.snakeTrail.unshift(JSON.parse(JSON.stringify(model.app.snake_location)))
  model.app.snakeTrail.unshift([...model.app.snake_location])
  if (model.app.snakeTrail.length > model.app.tableStyleInfo.snakelength + 10) {
    model.app.snakeTrail.pop()
  }
  
  snakeStyle()
}
