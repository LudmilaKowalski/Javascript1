// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", () => {

        fruits.shift();
        fruits.pop();
        fruits.unshift('Banana');
       fruits.push('Kiwi');
   

       console.log(fruits)

       })



})();
