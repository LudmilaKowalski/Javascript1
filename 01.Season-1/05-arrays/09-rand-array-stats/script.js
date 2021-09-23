// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    let number = [1,2,3,4,5,6,7,8,9,10]
    let random = Math.random(100)
    
    document.getElementById("run").addEventListener("click", () => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
       let a =  document.getElementById("n-1").innerHTML = (getRandomInt(100));
       let b = document.getElementById("n-2").innerHTML = (getRandomInt(100));
       let c = document.getElementById("n-3").innerHTML = (getRandomInt(100));
       let d = document.getElementById("n-4").innerHTML = (getRandomInt(100));
       let e = document.getElementById("n-5").innerHTML = (getRandomInt(100));
       let f = document.getElementById("n-6").innerHTML = (getRandomInt(100));
       let g = document.getElementById("n-7").innerHTML = (getRandomInt(100));
       let h = document.getElementById("n-8").innerHTML = (getRandomInt(100));
       let i = document.getElementById("n-9").innerHTML = (getRandomInt(100));
       let j = document.getElementById("n-10").innerHTML = (getRandomInt(100));
       let k = document.getElementById("min").innerHTML = Math.min(a,b,c,d,e,f,g,h,i,j);
       let l = document.getElementById("max").innerHTML = Math.max (a,b,c,d,e,f,g,h,i,j);
       let m = document.getElementById("sum").innerHTML = (a+b+c+d+e+f+g+h+i+j)
       let n = document.getElementById("average").innerHTML = ((a+b+c+d+e+f+g+h+i+j) /10)
    
      


        })



    // your code here

})();
