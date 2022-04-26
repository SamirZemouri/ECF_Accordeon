let acc = document.getElementsByClassName("qst");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        (document.querySelector('.qst-bold')) ? document.querySelector('.qst-bold').classList.remove('qst-bold') : '';
        this.classList.add('qst-bold');


        for (j = 0; j < acc.length; j++) {
            if (j !== i)
                acc[j].nextElementSibling.style.maxHeight = null;


        }
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";

        }
    })
}
