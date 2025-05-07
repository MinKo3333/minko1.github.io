let timedata

function getTime() {
  let now = new Date()
  let date = now.getDate()
  let month = now.getMonth()
  let registered = now.toLocaleString()
  let time = registered.slice(12, 20)

  timedata = `
  ${month + 1}/${date}${time}
  `
  return timedata
}

let NumberN = 0

function sendData(inputValue, timedata) {
  
  let element;

    element = {
      id: NumberN,
      chore: inputValue,
      registeredTime: timedata,
      clearedTime: '',
      categoryid: 2,
    };
  

  NumberN = NumberN+1
  toDoList.push(element)
  return element.id
}


function checkboxAction(thisCheckbox, id) {
  const objectIndex = toDoList.findIndex(Object => Object.id === id)
  if (thisCheckbox.checked) {

    clearedTime(thisCheckbox)
    toDoList[objectIndex].categoryid = 1
    toDoList[objectIndex].clearedTime = thisCheckbox.parentElement.parentElement.children[3].innerHTML

  }
  else {
    clearFinishedTime(thisCheckbox)
    toDoList[objectIndex].clearedTime = ''
    toDoList[objectIndex].categoryid = 2

  }
}

function onMouseEnter(button) {
  button.classList.remove('button')
  button.classList.add('buttonMouseOver')
}
function onMouseLeave(button) {
  button.classList.remove('buttonMouseOver')
  button.classList.add('button')
}

function deleteThisChore(Deletebutton, id) {

  let currentRow = Deletebutton.parentElement.parentElement

  const objectIndex = toDoList.findIndex(Object => Object.id === id)
  currentRow.remove()
  toDoList.splice( objectIndex, 1 )

  let showNumbers = document.getElementById('showNumbers')
  showNumbers.innerHTML = toDoList.length

}