let pikachuName = "Pikachu"

let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "Images/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "Images/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "Images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "Images/drowzee.png",
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon = null;



let player = {
  name : "Bjarne",
  image: "Images/pokemonTrainerIdle.png",
  playerPokemon: []
}



let app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon()
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name}</div> 
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src=${player.image}>
            <div>${player.name}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemon()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}

function caughtPokemonView(){
  app.innerHTML = /*HTML*/`
  <div class="caughtContainer">
    <h1>Du fanget ${player.playerPokemon[player.playerPokemon.length - 1].name}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>
          </div>
  </div>
  `;
}

function catchPokemon(){
  player.playerPokemon.push(randomPokemon);
  caughtPokemonView();
}
let opened = false
let openeddiv = false

function showPokemon(){
  let showPokemonelement = document.querySelector('.showContainer')
  console.log(opened)
  console.log(openeddiv)

if(showPokemonelement){if(opened){ 
    document.getElementById('showPokemon').style.display = 'none'
    opened = false
   return
  }

  else{
    document.getElementById('showPokemon').style.display = 'block'
    opened = true
    return}
  }

  else{
  app.innerHTML+= /*HTML*/
  `<div class = showContainer>
    <div class = pokemoncontainer id='showPokemon'>
    <h1>Fanget pokemon liste</h1>
    ${player.playerPokemon.map(pokemon => pokemon.name)}
    </div>
  </div>
  `
  openeddiv = true
  opened = true


  console.log(player.playerPokemon);
}
}

function getRandomPokemon(){
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}