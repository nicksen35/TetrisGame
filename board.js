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
    for (let row = 0; row < piece.newpiece.shape.length; row++)
    {
        for(let col=0; col < piece.newpiece.shape[row].length; col++)
        {
            const boardrow = piece.y + row;
            const boardcolumn = piece.x + col;
            console.log(boardrow, board.length, board[0].length, boardcolumn);
            console.log(board[0].length - piece.width)
            if (boardrow < 0 || boardrow >= board.length - 1 )
            {
                return true;
            }
            else if (boardcolumn >= board[0].length - piece.width + piece.boundary)
            {
                return piece.x  = board[0].length - piece.width + piece.boundary;
            }
            else if (boardcolumn <= 0)
            {
                return piece.x = 0;
            }
            //else if (piece.newpiece.shape[row][col] && board[boardrow][boardcolumn])
            //{
                //return true;
            //}
        }
        
    }
    return false;
}
