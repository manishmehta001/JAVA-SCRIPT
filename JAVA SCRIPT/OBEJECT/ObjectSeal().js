//==========================object.seal(); function=============================//

const edTechObj =
{
    name : "relevel",
}
delete edTechObj.name;//using delete any properties of object.
Object.seal(edTechObj);//it is allow to only upadtion of exsiting properties not for add or deleting any new or existing properties.
edTechObj.website = "www.relevel.com";// adding new object
edTechObj.name = "unacadmy"// change the obejct

console.log(edTechObj);//output without using .seal() methods = { name: 'unacadmy', website: 'www.relevel.com' }
                    //output after using .seal() methods =  { name: 'unacamy' }
                    //output using .delete() methods =  {}

//====================how to check if object sealed or not =============================//
console.log(Object.isSealed(edTechObj));