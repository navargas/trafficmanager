$(function () {
  var CARS = [
    'res/png/Ambulance.png',
    'res/png/Audi.png',
    'res/png/Mini_truck.png',
    'res/png/Police.png',
    'res/png/taxi.png'
  ];

  function move(x, y) {
    var tile = window.tileDomMap[y][x];
    this.dom
      .css('top', tile.css('top'))
      .css('left', tile.css('left'));
  };

  function addCar(carID, tileCoord) {
    car = {move:move};
    var tile = window.tileDomMap[tileCoord[1]][tileCoord[0]];
    console.log(tile.css('top'), tile.css('left'));
    rot = 90;
    car.dom = $('<img>')
      .attr('src', CARS[carID])
      .attr('z-index', 100)
      .css('top', tile.css('top'))
      .css('left', tile.css('left'))
      .css('position', 'absolute')
      .css('-ms-transform', 'rotate(' + rot + 'deg)')
      .css('-webkit-transform', 'rotate(' + rot + 'deg)')
      .css('transform', 'rotate(' + rot + 'deg)')
      .css('width', tile.css('width'));
    $('#bgDiv').append(car.dom);
    return car;
  };

  window.addCar = addCar;
});
