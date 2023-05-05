const board = document.getElementById("board");
const context = board.getContext('2d');
board.width = cols * blocksize;
board.height = rows * blocksize;
context.scale(blocksize, blocksize);
let piece = new Piece(context);
gameboard = new Board(context);

const movements = {
    [key.left]: p => ({...p, x: p.x - 1}),
    [key.right]: p=> ({...p, x: p.x + 1}),
    [key.down]: p=> ({...p, y: p.y +1})
}  

document.addEventListener('keydown', event => {
    if (movements[event.keyCode]) {  
        event.preventDefault();
        let p = movements[event.keyCode](piece);
        piece.move(p);
        context.clearRect(0, 0, board.width, board.height); 
        piece.Draw();
        DetectCollision(piece, gameboard.grid)
        /* if (!DetectCollision(piece, gameboard.grid))
        {    
            piece.move(p);
            context.clearRect(0, 0, board.width, board.height); 
            piece.Draw();
        }   
        else
        {
            console.log("not allowed to move")
        }
        */
         
      } 
    })
    
function Play()
{
    console.table(gameboard.grid);
    piece.Draw();
}

