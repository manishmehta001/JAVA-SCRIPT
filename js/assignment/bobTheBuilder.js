function calculateBrick()
{
    let lengthOfWall = 24;
    let hightOfWall = 8;
    let thickness = 0.6;
    let valumeOfwall = lengthOfWall*hightOfWall*thickness;
    let valumeOfBrick = 24*12*8;
    let mortar = 15;     
    let noOfbricks = ((100-mortar)/100)*valumeOfwall*(100*100*100)/valumeOfBrick;
    console.log(Math.ceil(noOfbricks));
// Meth.ceil will give the higher round up value 
}
calculateBrick();

