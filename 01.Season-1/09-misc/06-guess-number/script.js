// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here



/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  alert("Guess the number")



  alert(getRandomInt(100));
*/

let randomNumber = Math.floor(Math.random() * 100);
let guess = 0;
let userNumber = parseInt(prompt("Number: "));

while (userNumber != randomNumber) {
    console.log(userNumber);
    console.log(randomNumber);

    if (userNumber > randomNumber) {
        alert("higher");
    } else if (userNumber < randomNumber) {
        alert("lower");
    }
    

    else if ((userNumber === randomNumber)) {

        alert(`correct !`);
        
        }
        userNumber = parseInt(prompt("Number: "));
        guess++;
       
}




})();
