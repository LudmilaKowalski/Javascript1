() => { console.log("test")
    // to get the value of an input: document.getElementById("element-id").value
    var n = parseInt(document.getElementById("op-one").value);
    var c = parseInt(document.getElementById("op-two").value);
    let value1 = parseInt(document.getElementById("addition").value);
    let value2 = parseInt(document.getElementById("substraction").value);
    let value3 = parseInt(document.getElementById("multiplication").value);
    let value4 = parseInt(document.getElementById("division").value);

    const performOperation = operation => {
        switch (operation)  {
            case "addition" :
                alert(n + c);
              //Statements executed when the
              //result of expression matches value1
              break;
            case "substraction":
                alert(n - c);
              //Statements executed when the
              //result of expression matches value2
              break;
            
            case "multiplication":
                alert(n * c);
              //Statements executed when the
              //result of expression matches valueN
              break;

              case "division":
                alert(n / c);
                //Statements executed when the
                //result of expression matches value2
                break;
              
            default:
              //Statements executed when none of
              //the values match the value of the expression
              break;
          }
          
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () =>  (performOperation($btn.id), false),
        ),
    );
};;