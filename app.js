document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.getElementById("explore-btn");

    exploreBtn.addEventListener("click", () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    });

    const footerYear = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} GDG UNSRI. All rights reserved.`;
});
