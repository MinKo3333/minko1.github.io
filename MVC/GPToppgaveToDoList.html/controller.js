

registerbutton.addEventListener('click', addToDo)

function addEventListenerToCheckbox(thisCheckbox, id) {

  thisCheckbox.addEventListener('click',
    function () {
      checkboxAction(thisCheckbox, id)
    })

}

function addEventListenerToDeletebutton(thisDeletebutton, id) {
  thisDeletebutton.addEventListener('click', function () {
    deleteThisChore(thisDeletebutton, id)
  })
}


function addEventListenerToDonebutton(){
  donebutton.addEventListener('click',
   showOnlyDone )
}

function addEventListenerToUndonebutton(){
  undonebutton.addEventListener('click',
   showOnlyUndone )
}

function addEventListenerToAllbutton(){
  allbutton.addEventListener('click', showAll)
}

addEventListenerToDonebutton()
addEventListenerToUndonebutton()
addEventListenerToAllbutton()


