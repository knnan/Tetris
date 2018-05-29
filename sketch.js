var scl,B,cols,rows;
scl = 50;
cols = 10;
rows = 10;



var shapelist = 
  [
    [   0, 0, 0,
        0, 8, 0,
        0, 0, 0,    
    ],
    [   0, 2, 0,
        2, 2, 0,
        0, 0, 0,
    ],
    [   0, 0, 0,
        7, 7, 7,
        7, 7, 0, 
    ],
    [   0, 3, 0, 
        3, 3, 3, 
        0, 3, 0, 
    ],
    [   0, 2, 0, 
        0, 2, 0, 
        0, 2, 2, 
    ],
    [   0, 4, 0, 
        0, 4, 0, 
        4, 4, 0, 
    ],
    [   4, 4, 0, 
        0, 4, 4, 
        0, 0, 0,
    ],
    [
        0, 5, 5, 
        5, 5, 0, 
        0, 0, 0, 
    ],
    [  
        0, 0, 0, 
        6, 6, 6, 
        0, 6, 0, 
    ],
    [   0, 0, 0, 
        7, 7, 7, 
        7, 0, 7, 
    ],
    [    0, 1, 0, 
         0, 1, 0, 
         0, 1, 0, 
    ],
];






function setup()
{
  C = createCanvas(650,650);
  C.position(100,100);
  B = new Block();
  B.initGrid();
  B.grid[10] = 1;
  B.chooseshape();
  frameRate(3);



}




function draw()
{
  background(51);
// ellipse(100,100,5*s20,20); 
B.displayGrid();  
B.displayShape();
B.SHAPEy++;
B.SHAPEy = constrain(B.SHAPEy,0,rows)
// fill(244);
// rect(15*scl,14*scl,scl,scl);
}
function mousePressed()
{
  B.rotateShapeDir(true);
}

