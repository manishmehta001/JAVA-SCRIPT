var manishData = 
{
    fname : "manish",
    lname : "mehta",
    age : 27,
    location : "lucknow",
    IsMarried : false,
    educattion : "B.tech",
    gender : "male",
    dob : "24/08/1995",
    employment : {
        compony : "google",
        dept : "google search",
        salary : 5000000,
    },
    marks : [9.5, 9.3, 10, 9.8]
}
console.log(manishData.fname);//output = manish
console.log(manishData["lname"]);//output = mehta  ....this is anather way to find the data
console.log(manishData.location);//output = lucknow
console.log(manishData.IsMarried);//output = false
console.log(manishData.dob);//output = 24/08/1995
console.log(manishData.employment.dept);//output = google search
console.log(manishData["employment"].dept);//output = google search
console.log(manishData["employment"]["dept"]);//output = google search
console.log(manishData.marks[2]);//output = 10
