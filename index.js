const squares = document.querySelectorAll('.square');

//Iterate over each square and add event listener.
squares.forEach((square) => {
  square.addEventListener('click', handleClick);
});

//Event listener that handles the click on a square.
function handleClick(event) {
  //get info from the square clicked.
  const clickedSquare = event.target;
  // console.log(clickedSquare);
  const squareId = clickedSquare.id;
  console.log(squareId);
}
