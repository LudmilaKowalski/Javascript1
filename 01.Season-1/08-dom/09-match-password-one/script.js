// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {

        let passone = document.getElementById("pass-one");
        let passtwo = document.getElementById("pass-two");

    if (passone.value === passtwo.value) {
        passone.style.borderColor = "green";
        passtwo.style.borderColor = "green";
    }

    else {
        passone.style.borderColor = "red";
        passtwo.style.borderColor = "red";
    }
})
 



})();




