const cdiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
 
 
  cdiv.appendChild(div);
}
const tiles = document.querySelectorAll('.container>div');
tiles.forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    // do something when tile is hovered over
    tile.style.backgroundColor = 'yellow';
})});

