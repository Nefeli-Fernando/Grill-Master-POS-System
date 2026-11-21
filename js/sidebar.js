const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("toggle");
const icon = toggle.querySelector("use");

toggle.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    icon.setAttribute("href", open ? "#close" : "#menu");
    toggle.setAttribute("aria-expanded", String(open));
});
