function attendClass(userType)
{
    if(userType=="student")
    { 
    console.log("allow");
}
    else if(userType=="instructor")
{
    console.log("allow");
}
else
{
    console.log("deny");
}
}
attendClass("student");
attendClass("instructor");
attendClass("lion");