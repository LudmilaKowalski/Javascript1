// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

  


    let img = document.querySelector("img");

    img.addEventListener("mouseover", () => {
        let dataHover = img.getAttribute("data-hover");
    
        img.setAttribute("src", dataHover);
    })

    let dataHover = img.getAttribute("data-hover");

    dataHover.addEventListener("mouseout", () => {
        let img = document.querySelector("img");
    
   
    dataHover.setAttribute( "src", img);
    })

   

})();




