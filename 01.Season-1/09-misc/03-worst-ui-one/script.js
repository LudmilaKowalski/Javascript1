// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here

    /*let slide = document.getElementById("slider").innerHTML = 460000000

    

    for (slide = 0; pas < 499999999; pas++) */

    var slider = document.getElementById("slider");
var output = document.getElementById("target");
output.innerHTML = 0 + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = 0 +  this.value;
}

})();
