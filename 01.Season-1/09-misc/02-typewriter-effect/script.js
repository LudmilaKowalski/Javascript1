// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect





(() => {



        let target = document.getElementById("target");
        let text = target.innerHTML;
        let speed = 80;
        let x = 0;
    
        target.innerHTML = "";
        
        function typeWriter() {
            if (x < text.length) {
              target.innerHTML += text.charAt(x);
              x++;
            } setTimeout(typeWriter, speed);
        }
        typeWriter();
        
      })(); 
