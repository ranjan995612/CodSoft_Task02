document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("header a, footer a");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");

            if (href.startsWith("http")) {
                return;
            }
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
