document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";

    document.querySelectorAll(".navigate-btn").forEach(button => {
        button.addEventListener("click", function () {
            let page = this.getAttribute("data-page");
            window.location.href = page;
        });
    });

    let elements = document.querySelectorAll(".animate");
    function checkScroll() {
        let screenHeight = window.innerHeight;
        elements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            if (position < screenHeight - 50) {
                element.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
