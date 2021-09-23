
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {




   
    let date = new Date() 
    let heure = date.getHours();
    let minute = date.getMinutes();
    
    
    if (heure < 17 && minute < 30) {
       
        document.getElementById("target").innerHTML = "Hello";
        }
        else if (heure < 16 && minute > 30){
            document.getElementById("target").innerHTML = "Hello";
    }
        else {
            document.getElementById("target").innerHTML = "Good evening";

        }

/*




        switch(true){
            case minute < 30 :
                return document.getElementById("target").innerHTML = "Hello";
            case minute > 30 :
                return document.getElementById("target").innerHTML = "Good evening";
    
            }
*/
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
