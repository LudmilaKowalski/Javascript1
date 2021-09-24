// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
    let me = [ {
        nom : "Kowalski",
        firstname : "Ludmila",
        age : "25 years",
        city : "Namur",
        country : "Belgium"

        
      }];

     // let resultat = `Hello my name is ${this.firstname} ${this.name}. I'm ${this.age} and I live in ${this.city} locate in  ${this.country}`;

       
    
        console.log(me);
     })


})();


