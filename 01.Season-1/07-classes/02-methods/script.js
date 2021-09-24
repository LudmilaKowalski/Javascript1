//07-classes/02-methods/script.js - 7.2: methods


(() => {

    document.getElementById("run").addEventListener("click", () => {
        class Person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
        
        }
        
        let P1 = new Person("John", "Smith");
        console.log("Hello")
        console.log(P1);
    
        
    })


    // your code here
})();
