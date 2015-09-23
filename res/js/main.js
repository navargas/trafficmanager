$(function() {
  var TILE_SIZE = 48;
  var SPRITES = 'res/svg/tiles_vector.svg#'
  var iconMap = {
    "-":[8,1],
    "=":[0,1],
    "r":[1,0],
    "n":[2,0],
    "j":[2,1],
    "i":[1,1],
    "|":[0,0]
  };
  var asciiMap =
    "-------------------\n" +
    "-------------------\n" +
    "--r==========n-----\n" +
    "--|----------|-----\n" +
    "--|----------|-----\n" +
    "--|----------|-----\n" +
    "--|----------|-----\n" +
    "--|----------|-----\n" +
    "--|----------|-----\n" +
    "--|----------|-----\n" +
    "--i==========j-----\n" +
    "-------------------\n" +
    "-------------------";

  tileDomMap = [];
  window.tileDomMap = tileDomMap;
  function loadAscii(asciimap) {
    var lines = asciimap.split('\n');
    var x = 0;
    var y = 0;
    for (var i in lines) {
      tileDomMap.push([]);
      for (c in lines[i]) {
        var character = lines[i][c];
        var pos = iconMap[character];
        if (! pos ) {
          console.error('Unrecognized character <' + character + '> at ');
          continue;
        }
        var index = pos[0] + '-' + pos[1];
        var tile = $('<img>')
          .attr('width', TILE_SIZE)
          .attr('height', TILE_SIZE)
          .attr('z-index', 1000)
          .css('position', 'absolute')
          .css('top',y)
          .css('left',x)
          .attr('src', SPRITES + 'coord' + index);
        $('#bgDiv').append(tile);
        tileDomMap[tileDomMap.length-1].push(tile);
        x += TILE_SIZE-1;
      }
      y += TILE_SIZE;
      x = 0;
    }
  };
  loadAscii(asciiMap);
  var car1 = addCar(0, [13,2]);
  var car2 = addCar(1, [2,2]);
  var car3 = addCar(3, [2,10]);
  var car4 = addCar(4, [13,10]);
});
