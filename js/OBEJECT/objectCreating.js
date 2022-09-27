/* Creating object using create method */
const laptop = {
  make: "Dell",
  model: "Alienware",
  memory: ["SSD", "HDD"],
  cores: 8,
  memorySize: [256, 512],
};
(laptop.display = "amoled"), (laptopObj = Object.create(laptop));
delete laptopObj.make;
console.log(laptopObj);
console.log(laptopObj.model);
console.log(laptopObj.make);
