// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {



    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    let index = 0;

    document.getElementById("next").addEventListener("click", () => {

        if (index + 1 < gallery.length) {
            index++
        }
        else {
            index = 0;
        }

        document.querySelector("img").setAttribute("src", gallery[index]);
    })

    // your code here

})();
