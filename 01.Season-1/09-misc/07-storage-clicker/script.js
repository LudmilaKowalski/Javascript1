// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here

    let cle = document.getElementById("target").value;
    
  

    document.getElementById("increment").addEventListener("click", () => {

        let cle = document.getElementById("target").value;
        for (let cle = 0; cle < 2; cle++) 

        
        
        document.getElementById("target").innerHTML = cle 
        sessionStorage.setItem(cle);
    
        console.log(sessionStorage.getItem(cle));
        })





})();
