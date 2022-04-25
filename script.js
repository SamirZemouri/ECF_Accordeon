let acc = document.getElementsByClassName("qst");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.classList.toggle("qst-bold");




        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }


        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {


        // acc[i].classList.remove('panel');
        // this.classList.toggle("panel");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }











































    })
}
