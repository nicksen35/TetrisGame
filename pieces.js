class Piece {
    constructor(context)
    {
        this.newpiece = pieces[Math.floor(Math.random()*pieces.length)];
        this.context = context;
        this.width = getPieceWidth(this.newpiece);
        getPieceWidth(this.newpiece);
        this.boundary = this.newpiece.boundary;
        this.x = 3;
        this.y = 0;
        this.color = this.newpiece.color;
        this.shape = this.newpiece.shape;
    };

    Draw()
    {
        console.log(this.width)
        this.context.fillStyle = this.color;
        this.shape.forEach((row, y)=> {
            row.forEach((value, x) => {
                if (value > 0 ){
                    this.context.fillRect(this.x + x, this.y+y, 1, 1)
                }
            });
        });
    }
    move(p) {
        if (!this.hardDropped) {
          this.x = p.x;
          this.y = p.y;
        }
        this.shape = p.shape;
      }
}

function getPieceWidth(piece) {
    let width = 0;
    const shape = piece.shape;
    for (let i = 0; i < shape.length; i++) {
      const row = shape[i];
      console.log(shape[i])
      const rowWidth = row.reduce((acc, val) => acc + (val !== 0 ? 1 : 0), 0);
      width = Math.max(width, rowWidth);
    }
    return width;
  }
