var pieces = [
  {
   name: 'Swan Lake',
   composer: 'Tchaikovsky' 
  }
];

function findValues (pieceInt, compInt) {
  for (var i = 0; i < pieces.length; i ++) {
    if (pieceInt in pieces[i].name) {

    } else if (compInt in pieces[i].composer) {
      
    }
  }
}

$('#submit').submit(function(event) {
  event.preventDefault();
  findValues(document.getElementById(name), document.getElementById(composer))
});