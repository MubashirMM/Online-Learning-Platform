
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.toLowerCase();

    // Redirect if the user is NOT on Main.html
    if (!currentPage.endsWith("index.html")) {
        window.location.replace("/index.html");  // Ensure this is the correct path
    }
});