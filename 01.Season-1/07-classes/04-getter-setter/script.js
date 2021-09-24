// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    document.getElementById("run").addEventListener("click", () => {
        class person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
        
        }
        
        let people = new person("John", "Smith");
        let people1 = new person("Jane", "Smith");
        console.log( people);
        console.log( people1);
       
    
        
    })
    // your code here
})();
