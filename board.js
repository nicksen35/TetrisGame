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
            if (boardrow < 0 || boardrow >= board.length - 1 )
            {
                return true;
            }
            else if (boardcolumn == board[0].length - piece.width + piece.boundary)
            {
                return piece.x = boardcolumn-piece.boundary;
            }
            else if (boardcolumn < 1)
            {
                return piece.x = 1;
            }
            //else if (piece.newpiece.shape[row][col] && board[boardrow][boardcolumn])
            //{
                //return true;
            //}
        }
        
    }
    return false;
}
