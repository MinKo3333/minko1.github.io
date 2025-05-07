updateView()

function updateView(){
  document.getElementById('app').innerHTML = searchPage()
}

function searchPage(){
  let html = /*HTML*/`
  <input onchange="model.app.searchInput = this.value" ><button onclick="updateView()">Search</button>
  <ul style = "list-style-type:none">
  ${generateList()}
  </ul>
  `
   console.log('프린트중')
  //사진 조그맣게 보여주고 옆에 요리이름 리스트/ 검색용 인풋
  return html
}
function showRecipePage(){}

function generateList(){
   
  let html = ''
  model.app.currentRecipe = model.data.recipe.find(element => element.name === model.app.searchInput)
  let theRecipe = model.app.currentRecipe
  //검색한레시피를 currentRecipe로
  
  if(!theRecipe) return 'No recipe found'
  
  let ingredient= ''
  for(i = 0; i <= theRecipe.ingredient.length; i++){
    ingredient += `${theRecipe.ingredient[i]}`
  }
  
  theRecipe.picture? '': theRecipe.picture = '사진없음'
  

  html +=/*HTML*/`
   <li>${theRecipe.name}</li>
   <li><img src = ${theRecipe.picture}></li>
   <li>${ingredient}</li>
   <li>${theRecipe.instruction}</li>
   `

  return html
  }

