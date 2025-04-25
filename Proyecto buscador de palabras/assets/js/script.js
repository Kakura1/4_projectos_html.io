window.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector(".main__input");
    let title = document.querySelector(".main__title");
    let text = document.querySelector(".main__text")

    input.addEventListener("keydown", (e) => {

        let search = input.value;

        if(search.trim() != "" && e.code == "Enter"){
            let regExp = new RegExp(search, "gi");

            text.innerHTML = text.textContent.replace(regExp, "<span class='text__search'>$&</span>");
        }

    });
});