document.addEventListener("DOMContentLoaded", function() {
    var clickedColor = "purple";
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
  var psel = ["red", "blue", "green", "yellow", "orange", "pink"];

  for (var i = 0; i < 6; i++) {
    let box = document.getElementsByClassName('colors')[0];
    let palette = document.createElement('div');

    palette.style.border = "1px solid black";
    palette.style.width = '20px';
    palette.style.height = '20px';
    palette.style.float = 'left';
    palette.className = 'palette';
    palette.style.backgroundColor = psel[i];
    box.appendChild(palette);

  }
  let plate = document.getElementsByClassName('palette')
  for (let picker of plate){
   picker.addEventListener('click', function(event) {
   clickedColor = event.target.style.backgroundColor;
   console.log(event.target);
 })
}
  let grid = document.getElementsByClassName('tile');

  for (let pixel of grid) {
    pixel.addEventListener('click', function() {
      pixel.style.backgroundColor = clickedColor;

    })
  }

});
