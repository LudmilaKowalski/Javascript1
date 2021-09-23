// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", () => {
        fruits.forEach((fruits) => {
            if (fruits == "apple") {
                console.log("yes apple!");
              
            }

            else (fruits != "apple") {
                console.log("no, not any apple...")
            }

        });   
    })

    // your code here

})();
