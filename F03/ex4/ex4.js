window.addEventListener("load", () => {
    //a.
        //ii.
        btn2.onclick = () => {
            alert("Olá Mundo!");
        }

        //iii.
        document.querySelector("#btn3").addEventListener("click", () => {
            alert("Olá Mundo!")
        });

    //b.
    const textField = document.querySelector("#textField");
    const output = document.querySelector("#output");
    const btnCharCounter = document.querySelector("#btnCharCounter");

    textField.addEventListener("keyup", function(){ // evitar função arrow
        output.innerHTML = this.value;
    });

    btnCharCounter.addEventListener("click", () => {
        output.innerHTML = textField.value.length;
    });

    //c.
    btnCharCounter.addEventListener("mouseup", () => {
        console.log("obrigado pelo clique no botão!");
    });
});