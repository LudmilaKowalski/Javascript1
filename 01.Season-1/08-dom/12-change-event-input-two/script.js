// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here

    document.getElementById("pass-one").addEventListener("keyup", (e) => {

        let passone = document.getElementById("pass-one").value;
        let val = document.getElementById("validity");        
        let numbers = [0-9][0-9]


//var numbers = /[0-9]/g;

if (passone.match(numbers))  {
    document.getElementById("validity").innerHTML = "ok"
} else {
    document.getElementById("validity").innerHTML = "not ok"
}

if (passone.length >= 8) {
    document.getElementById("validity").innerHTML = "ok"
} else {
    document.getElementById("validity").innerHTML = "not ok"
}

})

})();


