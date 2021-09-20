
(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let n = parseInt(document.getElementById("op-one").value);
    let c = parseInt(document.getElementById("op-two").value);
    
    document.getElementById("addition").addEventListener("click", function () {
       alert( n+c )

        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {
        alert(n - c)
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        alert(n * c)
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        alert(n / c)
        // perform an division
    });
})();


//return document.getElementById("p-one").value + (document.getElementById("p-two").value;)