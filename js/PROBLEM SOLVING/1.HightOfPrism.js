/*1. Height Of Prism (15 min):
Problem Statement:
Given the volume and perimeter of the triangular base of the prism, and the circumference of the
inner circle. Calculate the height of the prism.
Example:
Input radius=3, perimeter=15, Volume=270
Output 12
Explanation:
The radius of the triangle is given as ` area / semi perimeter `. And the semi perimeter of the triangle is
half the triangle perimeter. Substituting the values we can get the area of the triangle i.e.
area = Inradius * semi perimeter 
hight = volume/area      */

function FindHightOfPrism(radius,perimeter,volume){
    let semiperimeter = perimeter/2;
    let area = radius * semiperimeter;
    let height = volume/area;
    return "hight of prism", height;
}
console.log(FindHightOfPrism(3,15,270));