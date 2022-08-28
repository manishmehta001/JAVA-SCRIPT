/*Grading System
Problem – Given a number as a score of the
student. You need to assign the grade to the student
based on the score
Grading system followed*/

function gradeSystem(score)
{
    if(score>90)
{
    console.log("A");
}
else if (score>=80 && score<=89)
{
    console.log("B");
}
else if (score>=60 && score<=79)
{
    console.log("c");
}
else if (score>=33 && score<=59)
{
    console.log("c");
}
else 
{
console.log("f");
}
}
gradeSystem(55);
gradeSystem(19);
gradeSystem(95);
