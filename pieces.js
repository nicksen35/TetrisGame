class Piece {
    constructor(context)
    {
        this.context = context;
        this.x = 3;
        this.y = 0;
        this.color = 'blue'
        this.shape = [
        [0,1,0],
        [0,1,0],
        [0,1,0]
        ];
    }
    pieces = ['t','o','l', 'j','i','s','z',]
    //piece = MakePiece(pieces[Math.floor(Math.random()*pieces.length)]);

    Draw()
    {
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
