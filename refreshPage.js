
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.toLowerCase();

    // Redirect if the user is NOT on Main.html
    if (!currentPage.endsWith("main.html")) {
        window.location.replace("/Main.html");  // Ensure this is the correct path
    }
});