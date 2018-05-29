function Block()
{
    this.curr_shape = "undefined";
    this.SHAPEx = 5;
    this.SHAPEy = 0;
    this.shape_size = 0;
    this.grid = [];
    this.grid.length = cols*rows;

    this.chooseshape = function()
    {
        var idx_next = parseInt(random(shapelist.length));
        this.curr_shape = shapelist[idx_next].slice();
        this.shape_size = 3;

    }
      this.rotateShapeDir = function(CW){

    var size = this.shape_size;
    var cpy = this.curr_shape.slice(0);

    if(CW){
      var ib = 0, ia = size * size;
      for(var y = 1; y <= size; y++, ia++){
        for(var x = 1; x <= size; x++, ib++){
          this.curr_shape[ib] = cpy[ia - x * size];
        }
      }
    } else {
      var ib = 0, ia = -1;
      for(var y = 1; y <= size; y++, ia--){
        for(var x = 1; x <= size; x++, ib++){
          this.curr_shape[ib] = cpy[ia + x * size];
        }
      }
    }
  }
  
  



    this.initGrid = function()
    {
        for(let i = 0;i<this.grid.length;i++)
        {
            this.grid[i] = 0;
        }
    }

    this.getshapeval = function(x,y)
    {   
        if(x < 0 || y < 0 || x > this.shape_size -1 || y > this.shape_size-1 )
        {
            return -1;
        }
        return this.curr_shape[x + this.shape_size * y];
    }

    this.index = function(i,j)
    {
        if(i < 0 || j < 0 || i > cols -1 || j > rows-1 )
        {
            return -1;
        }
        var index = i + j * cols;
        return index;
    }

    this.displayShape = function()
    {
        for(var y = 0;y<this.shape_size;y++)
        {
            for(var x = 0;x<this.shape_size;x++)
            {
                var sval = this.getshapeval(x,y);
                // var gval = grid[index(x,y)];
                if(sval != 0)
                    fill(0,132,0);
                else
                    fill(0);
                var xcor =(this.SHAPEx + x)*scl ;
                var ycor =(this.SHAPEy + y)*scl ;
                rect(xcor,ycor,scl,scl);


            }
        }

    }

    this.displayGrid = function()
    {
        for(var y = 0;y<rows;y++)
        {
            for(var x = 0;x<cols;x++)
            {
                stroke(0,255,0);
                if(this.grid[this.index(x,y)] == 0)
                    fill(0);
                else if(this.grid[this.index(x,y)] == 1)
                    fill(255);
                else
                    fill(255,0,0);
                xcor = x*scl;
                ycor = y*scl;
                rect(xcor,ycor,scl,scl);
            }
        }


    }


}
