/*Distance to Office (15 min):
Problem Statement:
A man reaches his office `y` min late when he travels at x km/hr. If he travels at x+2 km/hr then he
reaches the office `y-10` min early. Find the distance between his home and office given the value
of x and y.
Example:
Input x=4, y=20
Output 6 */


function distance(x,y)
{
    let t = y*(x+1) - 5*(x+2);
    let d = ((t+y)/60)*x;
    console.log("distance from office and home is: ", d ,"km");
}
distance(4,20);