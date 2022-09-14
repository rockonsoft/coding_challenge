const jsonData = require("./hello.json");
//console.log(jsonData);

const propertyValues = Object.values(jsonData);

//console.log(propertyValues[0]);
const snackListProto = [];
//for (let i = 0; i < 3; i++) {
const myObj = propertyValues[0];
for (let j = 0; j < 4; j++) {
  const newObj = myObj[j];
  const toPrintArray = Object.values(newObj);
  console.log(
    toPrintArray[0] + " , " + toPrintArray[1] + " , " + toPrintArray[2]
  );
  snackListProto.push(toPrintArray[4]);
}
newSnack = [];
const snackList = myfunction(snackListProto);
//const snackList = snackListProto.map(myfunction);
for (let m = 0; m < 9; m++) {
  console.log(snackList[m]);
}

function myfunction(snackListProto) {
  for (let l = 0; l < snackListProto.length; l++) {
    for (let k = 0; k < snackListProto[l].length; k++) {
      if (!newSnack.includes(snackListProto[l][k])) {
        newSnack.push(snackListProto[l][k]);
      }
    }
  }
  return newSnack;
}
