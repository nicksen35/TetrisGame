class Board {
    constructor(context) {
        context = this.context;
        this.grid = this.getEmptyBoard();
    }
        getEmptyBoard() 
        {
            return Array.from (
            {length: rows}, () => Array(cols).fill(0) 
            );
        }
    }
function DetectCollision(piece, board)
{
    console.log(piece.newpiece.shape.length)
    for (let row = 0; row < piece.newpiece.shape.length; row++)
    {
        for(let col=0; col < piece.newpiece.shape[row].length; col++)
        {
            const boardrow = piece.y + row;
            const boardcolumn = piece.x + col;
            console.log(boardrow, board.length, board[0].length, boardcolumn);
            if (boardrow < 0 || boardrow >= board.length || boardcolumn <= 0 || boardcolumn >= board[0].length)
            {
                return true;
            }
            if (piece.newpiece.shape[row][col] && board[boardrow][boardcolumn])
            {
                return true;
            }
        }
        
    }
    return false;
}
