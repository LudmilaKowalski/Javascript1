/*const readlineSync = require("readline-sync");
let name= readlineSync.question("Whats your favorite series ?");
let prod= readlineSync.question("When she was product ? ");
let who= readlineSync.question("Who played in this series ?");
*/
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}
