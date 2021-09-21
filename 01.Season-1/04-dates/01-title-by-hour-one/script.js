
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    



    
        var heure = new Date().getHours();
        switch(true){
            case heure < 18:
                return document.getElementById("target").innerHTML = "Hello";
            case heure > 18:
                return document.getElementById("target").innerHTML = "Good evening";
        
        }
    
    


   // getHours()
    //var = Date.now()

   
    

})();
