document.addEventListener('DOMContentLoaded',()=>{

  let squares = document.querySelectorAll('.square');
  let restartBtn = document.querySelector('.restart');

  squares.forEach((square) =>{
    square.addEventListener('click', handleClick);
  });

  restartBtn.addEventListener('click', restartSquares);

});

function handleClick(event){

  let square = event.target;
  let position = square.id;

  if(handleMove(position)){
    setTimeout(() => {
      alert("O Jogo Acabou - O Vencedor Foi O Jogador "+playerTime);
    }, 20);

  };
  updateSquare(position);

}

function updateSquare(position){
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div`;
}

function restartSquares(){

  let squares = document.querySelectorAll('.square');

  squares.forEach((square) =>{
    let position = square.id;
    let symbol = board[position]

    if(symbol != ''){
      square.innerHTML = `<div class=''></div`;
    }

  });

  restartGame();

}