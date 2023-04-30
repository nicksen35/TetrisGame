const board = document.getElementbyId("board")
const context = board.getContext('2d');
board.width = cols * blocksize;
board.height = rows * blocksize;
context.scale(blocksize, blocksize);

function Play()
{
    gameboard = new Board(context);
    console.table(gameboard.grid)
}