
const cdiv = document.querySelector('.container');
function createGrid(number){
  
  for (let i = 0; i < (number * number); i++) {
    const div = document.createElement("div");
   
   
    cdiv.appendChild(div);
  }
trail();
}



function trail() {
const tiles = document.querySelectorAll('.container>div');
tiles.forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    // do something when tile is hovered over
    tile.style.backgroundColor = 'yellow';
})});
}



const button = document.querySelector(".ask");
button.addEventListener("click", () => {
  const tiles = document.querySelectorAll('.container>div');
  tiles.forEach(tile => {
    tile.remove();
  });

let answer = prompt("number of grids? maximum 100");
if(answer >=100){
  alert("select a lesser number");
  return;
}
else
{

  createGrid(answer);
}

});


createGrid(16);