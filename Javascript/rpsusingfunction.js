let computerMove = '';

function pickComputerMove(){
    const RANDOM_MOVE = Math.random();
    if(RANDOM_MOVE >= 0 && RANDOM_MOVE < 1/3){
        computerMove = 'Rock';
    }else if(RANDOM_MOVE >= 1/3 && RANDOM_MOVE < 2/3){
        computerMove = 'Paper';
    }else{
        computerMove = 'Scissor';
    }
}