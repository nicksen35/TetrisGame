class Piece {
    constructor(context)
    {
        this.newpiece = pieces[Math.floor(Math.random()*pieces.length)];
        this.context = context;
        this.x = 3;
        this.y = 0;
        this.color = this.newpiece.color;
        this.shape = this.newpiece.shape;
    };

    Draw()
    {
        console.log(this.newpiece)
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
