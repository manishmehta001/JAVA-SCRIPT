/*Assignment 1

Requirements:
"1. Write a function astroguru that:
A. Takes four arguments: number of children, spouses name, location and job
B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”"*/

function astroguru(job,location,spousersname,numkids)
{
    console.log(
      " you will be a "
      +job,
      " in "
      +location,
      " and married to " 
      +spousersname,
       " with " 
      +numkids,
      "child."
      );
}
astroguru("Engineer","lucknow","chudail",11);


