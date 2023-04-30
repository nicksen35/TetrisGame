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


