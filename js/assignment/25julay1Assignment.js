/*Assignment 1

Requirements:
"Given 3 numbers. You need to find the smallest of three numbers without using comparison
operators
Input -> 12,44,2
Output -> 2"     */

function smallest(x, y, z)
{
    let c = 0;
    while (x && y && z) {
        x--;
        y--;
        z--;
        c++;
    }
    return c;
}
console.log("Minimum of 3 numbers is " + smallest(12, 44, 2));