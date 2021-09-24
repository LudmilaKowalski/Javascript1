// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    document.getElementById("run").addEventListener("click", () => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
    }
    
    let Cat1 = new Cat("Skitty", 9);
    
    console.log( Cat1);

    let Cat2 = new Cat("Pixel", 6);
   
    console.log(Cat2);
})
    // your code here
})();



  
  