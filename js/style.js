// ------- menu responsive -------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right = "-150px";
}

addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section")
    const menuitem = document.querySelectorAll(".menu_item")

    const functionObserver = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const itemActual = Array.from(menuitem).find(item => item.dataset.url === entry.target.id)
                itemActual.classList.add("active")
                for (const item of menuitem) {
                    if (item != itemActual) {
                        item.classList.remove("active")
                    }
                }
            }
        })
    }

    const observer = new IntersectionObserver(functionObserver, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    })

    sections.forEach(section => observer.observe(section))
})