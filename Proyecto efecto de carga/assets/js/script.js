window.addEventListener("load", () => {
    // Variables de Elementos
    let number = document.querySelector(".load__number");
    let btn = document.querySelector(".load__btn");
    let text = document.querySelector(".load__complete");
    let background = document.querySelector(".main__background")
    // Variables Contadoras
    let percent = 1;
    let blur = 25;
    // Evento click al boton
    btn.addEventListener("click", (event) => {
        btn.style.display = "none";
        // Variable temporal para controlar intervalos de tiempo
        let temp = setInterval(() => {
            percent+=1;
            blur-=25/100;
            if (percent > 100){
                clearInterval(temp);
                text.style.display = "block";
            } else {
                number.innerHTML = percent+"%";
                background.style.filter = `blur(${blur}px)`
            }
        }, 20);
    });
});