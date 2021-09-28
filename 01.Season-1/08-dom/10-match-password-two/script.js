// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


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
        passone.classList.add("error")
        passtwo.classList.add("error")

    }
})
 

})();
