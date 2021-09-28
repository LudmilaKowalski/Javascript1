// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            for (let article of articles) {
                console.log(article);
            } 
        })
    })

})();
