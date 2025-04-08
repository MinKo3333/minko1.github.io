updateView()
function updateView() {
  document.getElementById('app').innerHTML = /*HTML*/`
  <div class="container">
    ${generateDiv()}
  </div>
  `

 whereSnakeStart()
 generateFood()
 movement()
}
  
  
function generateDiv() {
  let html = ''
  for (let i = 1; i <= 30; i++) {
    for (let o = 1; o <= 30; o++){
    html += /*HTML*/
    `<div class = "cell" data-x="${o}" data-y="${i}"></div>`
    model.data.table.push({ x : o , y : i })}
  }
  return html// updateView로리턴

}//generateTable끝

function whereSnakeStart(){
  let container = Array.from(document.querySelectorAll('.cell'))
  let cell = container.find(cell => 
    cell.dataset.x === model.data.fixedLocations.snakeStartPoint[0] && 
    cell.dataset.y === model.data.fixedLocations.snakeStartPoint[1]) 
  model.app.snake_location[0] = 10
  model.app.snake_location[1] = 10
  cell.classList.toggle('snakeHead')
  }

function generateFood(){
  let container = Array.from(document.querySelectorAll('.cell'))

  if(container.find(cell => cell.classList.contains('snakeFood')))return

  let x = Math.floor(Math.random()*900)
  let cellAddress =  model.data.table[x]

  let cell = container.find(cell => 
    parseInt(cell.dataset.x) === cellAddress.x && 
    parseInt(cell.dataset.y) === cellAddress.y) 
  console.log('food:', model.app.tableStyleInfo[0])
  console.log(cell)
  
  model.app.tableStyleInfo[0][0] = cellAddress.x
  model.app.tableStyleInfo[0][1] = cellAddress.y
  cell.classList.toggle('snakeFood')
  return cell
}


function movement(){
  let keyname = ''
  let keycode = ''
  document.addEventListener('DOMContentLoaded', ()=>{
    document.addEventListener('keydown', function(event){
      newLocationToSnake(event.code)
      if(model.app.tableStyleInfo[0][0] === model.app.snake_location[0] &&
        model.app.tableStyleInfo[0][1] === model.app.snake_location[1]
      ){eatFood()
        generateFood()
      }

      })})
  
  return  keycode
  //cell.classList.toggle('snakeHead')// 어떤키 눌렀는지
}

function newLocationToSnake(code){
  let container = Array.from(document.querySelectorAll('.cell'))
  let keycode = code
  let currentCell = container.find(cell => 
    parseInt(cell.dataset.x) ===  model.app.snake_location[0] && 
    parseInt(cell.dataset.y) ===  model.app.snake_location[1])
  
  if(keycode === 'ArrowUp'){
    model.app.snake_location[1] -= 1
  }
  if(keycode === 'ArrowDown'){
    model.app.snake_location[1] += 1
  }
  if(keycode === 'ArrowRight'){
    model.app.snake_location[0] += 1
  }
  if(keycode === 'ArrowLeft'){
    model.app.snake_location[0] -= 1
  }
  let newCell = container.find(cell => 
    parseInt(cell.dataset.x) ===  model.app.snake_location[0] && 
    parseInt(cell.dataset.y) ===  model.app.snake_location[1])

  updateSnakeLocation(currentCell , newCell)
 
} //누른키로 바뀌게된 뱀위치

function updateSnakeLocation(oldCell, updatedCell){
 
  oldCell.classList.toggle('snakeHead')
  updatedCell.classList.toggle('snakeHead')
}// 새로운 위치에 스네이크 스타일 적용

function eatFood(){
    let container = Array.from(document.querySelectorAll('.cell'))
    let currentCell = container.find(cell => 
      parseInt(cell.dataset.x) ===  model.app.snake_location[0] && 
      parseInt(cell.dataset.y) ===  model.app.snake_location[1])
      currentCell.classList.toggle('snakeFood')
      currentCell.classList.add('snakeHead')
      console.log(currentCell.className)
  }

function snakeAutoMove(code){
  if(keycode === 'ArrowUp'){
    model.app.snake_location[1] -= 1
  }
  if(keycode === 'ArrowDown'){
    model.app.snake_location[1] += 1
  }
  if(keycode === 'ArrowRight'){
    model.app.snake_location[0] += 1
  }
  if(keycode === 'ArrowLeft'){
    model.app.snake_location[0] -= 1
  }
}
/*
  setInterval(() => {
  let container = Array.from(document.querySelectorAll('.cell'))
   container.find(cell => cell.className === 'snakeHead')
  

  }, 300) */

