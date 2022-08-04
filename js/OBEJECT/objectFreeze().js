//==========================object.freez(); function=============================//

const edTechObj =
{
    name : "relevel",
}
Object.freeze(edTechObj);//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
edTechObj.website = "www.relevel.com";// adding new object
edTechObj.name = "unacadmy"// change the obejct
console.log(edTechObj);//output without using .freez() methods = { name: 'unacadmy', website: 'www.relevel.com' }
                    ////output  using .freez() methods =  { name: 'relevel' }