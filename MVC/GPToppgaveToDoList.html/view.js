document.getElementById('app').innerHTML = /*HTML*/ `

<input id="chore"><button id = "register" class = "button" >register</button><br>
<div style = "display: flex; flex-wrap= nowrap">
<button class = "button" id="done">done</button>
<button class = "button" id="undone">undone</button>
<button class = "button" id="all">all</button><br>
<span id = "showNumbers"></span>
</div>
<div>
<table id = "toDoList">
  <tr>
    <th><input type = 'checkbox'></th>
    <th>Chores</th>
    <th>registered</th>
    <th>finished</th>
    <th>delete</th>
  </tr>
</table>
</div>
`
// button effect
const registerbutton = document.getElementById('register')
const donebutton = document.getElementById('done')
const undonebutton = document.getElementById('undone')
const allbutton = document.getElementById('all')



registerbutton.onmouseenter = function () { onMouseEnter(registerbutton) }
registerbutton.onmouseleave = function () { onMouseLeave(registerbutton) }
allbutton.onmouseenter = function () { onMouseEnter(allbutton) }
allbutton.onmouseleave = function () { onMouseLeave(allbutton) }
undonebutton.onmouseenter = function () { onMouseEnter(undonebutton) }
undonebutton.onmouseleave = function () { onMouseLeave(undonebutton) }
donebutton.onmouseenter = function () { onMouseEnter(donebutton) }
donebutton.onmouseleave = function () { onMouseLeave(donebutton) }




// register button work
function addToDo() {
  let toDoListtable = document.getElementById('toDoList')
  let showNumbers = document.getElementById('showNumbers')
  let newRow = toDoListtable.insertRow()
  let newCheckbox = newRow.insertCell()
  let newChore = newRow.insertCell()
  let newRegistered = newRow.insertCell()
  let newFinished = newRow.insertCell()
  let newdelete = newRow.insertCell()
  const inputValue = document.getElementById('chore').value

  newCheckbox.innerHTML = `<input class="checkboxes" type = 'checkbox'>`

  let thisCheckbox = newCheckbox.children[0]

  newChore.innerText = inputValue
  newRegistered.innerHTML = getTime()

  newdelete.innerHTML = `<button class="deleteButton">delete</button>`
  let thisDeletebutton = newdelete.children[0]

  const id = sendData(inputValue, timedata)
  addEventListenerToCheckbox(thisCheckbox, id)
  addEventListenerToDeletebutton(thisDeletebutton, id)
  
  
  showNumbers.innerHTML = `Number of list : ${toDoList.length}`
}




function clearedTime(checkbox) {
  let currentRow = checkbox.parentElement.parentElement
  let newFinished = currentRow.children[3]
  getTime()
  newFinished.innerHTML = timedata
}

function clearFinishedTime(checkbox) {
  let currentRow = checkbox.parentElement.parentElement
  let newFinished = currentRow.children[3]
  newFinished.innerHTML = ''
}




function showOnlyDone() {

  let toDoListtable = document.getElementById('toDoList')
  toDoListtable.innerHTML = ` 
       <tr>
    <th><input type = 'checkbox'></th>
    <th>Chores</th>
    <th>registered</th>
    <th>finished</th>
    <th>delete</th>
  </tr>`

  let numbers = 0
  for (let i = 0; i < toDoList.length; i++) {

    if (toDoList[i].categoryid === 1) {
      let newRow = toDoListtable.insertRow()
      let newCheckbox = newRow.insertCell()
      let newChore = newRow.insertCell()
      let newRegistered = newRow.insertCell()
      let newFinished = newRow.insertCell()
      let newdelete = newRow.insertCell()


      newCheckbox.innerHTML = `<input class="checkboxes" type = 'checkbox'>`

      let thisCheckbox = newCheckbox.children[0]
      thisCheckbox.checked = true

      newChore.innerHTML = toDoList[i].chore
      newRegistered.innerHTML = toDoList[i].registeredTime
      newFinished.innerHTML = toDoList[i].clearedTime

      newdelete.innerHTML = `<button class="deleteButton">delete</button>`
      let thisDeletebutton = newdelete.children[0]
      let id = toDoList[i].id

      addEventListenerToCheckbox(thisCheckbox, id)
      addEventListenerToDeletebutton(thisDeletebutton, id)
      numbers = numbers + 1
    }
    if (toDoList.length - 1 === i) {
      let showNumbers = document.getElementById('showNumbers')
      showNumbers.innerHTML = `Number of list : ${numbers}`

    }
  }
}

function showOnlyUndone() {

  let toDoListtable = document.getElementById('toDoList')
  toDoListtable.innerHTML = ` 
       <tr>
    <th><input type = 'checkbox'></th>
    <th>Chores</th>
    <th>registered</th>
    <th>finished</th>
    <th>delete</th>
  </tr>`

  let numbers = 0
  for (let i = 0; i < toDoList.length; i++) {

    if (toDoList[i].categoryid === 2) {

      let newRow = toDoListtable.insertRow()
      let newCheckbox = newRow.insertCell()
      let newChore = newRow.insertCell()
      let newRegistered = newRow.insertCell()
      let newFinished = newRow.insertCell()
      let newdelete = newRow.insertCell()


      newCheckbox.innerHTML = `<input class="checkboxes" type = 'checkbox'>`

      let thisCheckbox = newCheckbox.children[0]

      newChore.innerHTML = toDoList[i].chore
      newRegistered.innerHTML = toDoList[i].registeredTime
      newdelete.innerHTML = `<button class="deleteButton">delete</button>`

      let thisDeletebutton = newdelete.children[0]
      let id = toDoList[i].id

      addEventListenerToCheckbox(thisCheckbox, id)
      addEventListenerToDeletebutton(thisDeletebutton, id)
      numbers = numbers + 1
    }
    if (toDoList.length - 1 === i) {
      let showNumbers = document.getElementById('showNumbers')
      showNumbers.innerHTML = `Number of list : ${numbers}`
    }
  }
}

function showAll() {

  let toDoListtable = document.getElementById('toDoList')
  let showNumbers = document.getElementById('showNumbers')
  showNumbers.innerHTML = `Number of list : ${toDoList.length}`

  toDoListtable.innerHTML = ` 
       <tr>
    <th><input type = 'checkbox'></th>
    <th>Chores</th>
    <th>registered</th>
    <th>finished</th>
    <th>delete</th>
  </tr>`

  for (let i = 0; i < toDoList.length; i++) {

      let newRow = toDoListtable.insertRow()
      let newCheckbox = newRow.insertCell()
      let newChore = newRow.insertCell()
      let newRegistered = newRow.insertCell()
      let newFinished = newRow.insertCell()
      let newdelete = newRow.insertCell()
      newdelete.innerHTML = `<button class="deleteButton">delete</button>`
      let thisDeletebutton = newdelete.children[0]
      let id = toDoList[i].id
      newCheckbox.innerHTML = `<input class="checkboxes" type = 'checkbox'>`
      let thisCheckbox = newCheckbox.children[0]
      
      newChore.innerHTML = toDoList[i].chore
      newRegistered.innerHTML = toDoList[i].registeredTime

      

      if (toDoList[i].clearedTime) {
        newFinished.innerHTML = toDoList[i].clearedTime
      }
      if (toDoList[i].categoryid === 1) {
        thisCheckbox.checked = true
    }

      addEventListenerToCheckbox(thisCheckbox, id)
      addEventListenerToDeletebutton(thisDeletebutton, id)
      


  }
}
