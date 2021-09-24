// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

   
        class Cat  extends Animal{
            static greeting = "Meow";

        constructor(name) {
            super();
            this.name = name;
        }
        
        }

        class Dog extends Animal{
            static greeting = "Woof";

            constructor(name) {
                super();
                this.name = name;
            }
        
        }
        document.getElementById("run").addEventListener("click", () => {
        let Cat1 = new Cat("Skitty");
        
        console.log( Cat1);
    
        let Dog2 = new Dog("Doggy");
       
        console.log(Dog2);
    })
    // your code here
})();
