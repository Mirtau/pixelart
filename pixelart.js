document.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < 1026; i++) {
    let box = document.getElementsByClassName('grid')[0];
    let tile = document.createElement('div');

    tile.style.border = "1px solid black";
    tile.style.width = '20px';
    tile.style.height = '20px';
    tile.style.float = 'left';
    tile.className = 'tile';
    box.appendChild(tile);

  }
  for (var i = 0; i < 6; i++) {
    let box = document.getElementsByClassName('colors')[0];
    let tile = document.createElement('div');

    tile.style.border = "1px solid black";
    tile.style.width = '20px';
    tile.style.height = '20px';
    tile.style.float = 'left';
    tile.className = 'tile';
    box.appendChild(tile);
  }
  let grid = document.getElementsByClassName('tile');

  for (let pixel of grid) {
    pixel.addEventListener('click', function() {
      pixel.style.backgroundColor = 'black';
      console.log('event');
    })
  }

});
