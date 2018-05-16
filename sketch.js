var scl = 10;
var angle = 0;
pos = 0;
var rot = false;
var grid = [];

var l = [
[0 ,0 ,0 ],
[1 ,1 ,1 ],
[0 ,0 ,0 ]];
var t = [
[0 ,1 ,0 ],
[0 ,1 ,1 ],
[0 ,1 ,0 ]];
var z = [
[0 ,0 ,1 ],
[1 ,1 ,1 ],
[1 ,0 ,0 ]];
var s = [
[1, 1 ,1 ],
[1 ,1 ,1 ],
[1 ,1 ,1 ]];
var j = [
[0 ,0 ,1 ],
[1 ,1 ,1 ],
[0 ,0 ,0 ]];
var z1 = [
[1 ,0 ,0 ],
[1 ,1 ,1 ],
[0 ,0 ,1 ]];



function setup()
{
    var c = createCanvas(500,500);
    c.position(100,100);
    var cols = floor(width/scl);
    var rows = floor(height/scl);
       angleMode(DEGREES);
       rectMode(CENTER);
       frameRate(10);
        for(y = 0;y<=width/scl;y++)
    {
        grid[y] = [];
        for(x = 0;x<=height/scl;x++)
        {
            grid[y][x] = 0;
        }
    }


}
function mousePressed()
{
    angle = angle+90;
    rot = true;
}


function show(cur,xcordinate,ycor,rot)
{
    // xcordinate = pos++;
    push();
    translate((xcordinate*(scl))+(scl/2),((pos)*(scl))+(scl/2));
    if(rot)
    {
        rotate(angle);
    }
    for(x = -(cur.length-2);x <= cur.length-2;x++)
        {    for(y = -(cur.length-2);y <= cur.length-2;y++)
            {
                if(cur[y+cur.length-2][x+cur.length-2] == 1)
                {
                    rect(x*scl,y*scl,scl,scl);
                }
            }
        }            
        pop();
        rot = false;
    }



function draw()
{
    background(51);
    //     stroke(255,255,255,3);
    // for(y = 0;y<=width/scl;y++)
    // {
    //     for(x = 0;x<=height/scl;x++)
    //     {
    //         line(x*scl,y,x*scl,height);
    //         line(x,y*scl,width,y*scl);
    //     }
    // }
        fill(0,255,60);
        stroke(0);
        pos++;
        pos = constrain(pos,0,48);
        show(j,8,pos,rot);
        show(l,3,pos,rot);
        show(t,19,pos,rot);
        show(s,14,pos,rot);
        show(z,30,pos,rot);
        show(z1,25,pos,rot);



}
