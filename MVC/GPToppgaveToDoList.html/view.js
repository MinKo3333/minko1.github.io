document.getElementById('app').innerHTML = /*HTML*/ `

<input id="chore"><button id = "register" class = "button" >register</button><br>
<button class = "button" id="done">done</button>
<button class = "button" id="undone">undone</button>
<button class = "button" id="all">all</button><br>
<div>
<table id = "toDoList">
  <tr>
    <th></th>
    <th>Chores</th>
    <th>registered</th>
    <th>finished</th>
    <th></th>
  </tr>
</table>
</div>
`
// button effect
const registerbutton = document.getElementById('register')

registerbutton.onmouseenter =
  function () { registerbutton.classList.remove('button')
                registerbutton.classList.add('buttonMouseOver') }
registerbutton.onmouseleave =
  function () { registerbutton.classList.remove('buttonMouseOver')
                registerbutton.classList.add('button')
   }

// register button work
function addToDo() {
  let toDoList = document.getElementById('toDoList')

  let newRow = toDoList.insertRow()
  let newCheckbox = newRow.insertCell()
  let newChore = newRow.insertCell()
  let newRegistered = newRow.insertCell()
  let newFinished = newRow.insertCell()
  let newdelet = newRow.insertCell()

  newCheckbox.innerHTML = `<input type = 'checkbox'>`
  newChore.innerHTML = document.getElementById('chore').value
  newRegistered.innerHTML = getTime()
  newdelet.innerHTML = `<button>delet</button>`
  sendData()
}

function registeredTime(){
  newRegistered.innerHTML = timedata
  }