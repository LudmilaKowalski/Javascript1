// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here

  /*  document.getElementById("part-one").addEventListener("click", () => {

        let one = document.getElementById("part-one").innerHTML
        

         for (one = 460; one < 499; one++) {
          one++
         }

        
    

    })

    document.getElementById("part-two").addEventListener("click", () => {

        let two = document.getElementById("part-two").innerHTML

    for (two = 00; two < 99; two++) {
        two++
    }

    })

    document.getElementById("part-three").addEventListener("click", () => {

        let three = document.getElementById("part-three").innerHTML

    for (three = 00; three < 99; three++) {
        three++

    }

    })

    document.getElementById("part-four").addEventListener("click", () => {

        let four = document.getElementById("part-four").innerHTML

    for (four = 460; four < 499; four++) {
        four++
    }

    })
*/

let partOne = document.getElementById("part-one");
    let partTwo = document.getElementById("part-two");
    let partThree = document.getElementById("part-three");
    let partFour = document.getElementById("part-four");

    let target = document.getElementById("target");

    let partOneDataMin = parseInt(partOne.getAttribute("data-min"));
    let partOneDataMax = parseInt(partOne.getAttribute("data-max"));
    let partOneValue = partOneDataMin;

    let partTwoDataMin = parseInt(partTwo.getAttribute("data-min"));
    let partTwoDataMax = parseInt(partTwo.getAttribute("data-max"));
    let partTwoValue = partTwoDataMin;

    let partThreeDataMin = parseInt(partThree.getAttribute("data-min"));
    let partThreeDataMax = parseInt(partThree.getAttribute("data-max"));
    let partThreeValue = partThreeDataMin;

    let partFourDataMin = parseInt(partFour.getAttribute("data-min"));
    let partFourDataMax = parseInt(partFour.getAttribute("data-max"));
    let partFourValue = partFourDataMin;
    
    partOne.addEventListener("click", () => {
        if (partOneValue == partOneDataMax) {
            partOneValue = partOneDataMin;
        } else {
            partOneValue++;
        }

        target.innerHTML = 0 + `${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`
    })

    partTwo.addEventListener("click", () => {
        if (partTwoValue == partTwoDataMax) {
            partTwoValue = partTwoDataMin;
        } else {
            partTwoValue++;
        }

        target.innerHTML = 0 + `${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`
    })

    partThree.addEventListener("click", () => {
        if (partThreeValue == partThreeDataMax) {
            partThreeValue = partThreeDataMin;
        } else {
            partThreeValue++;
        }

        target.innerHTML = 0 + `${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`
    })

    partFour.addEventListener("click", () => {
        if (partFourValue == partFourDataMax) {
            partFourValue = partFourDataMin;
        } else {
            partFourValue++;
        }

        target.innerHTML = 0 + `${partOneValue} ${partTwoValue} ${partThreeValue} ${partFourValue}`
    })
    

})();
