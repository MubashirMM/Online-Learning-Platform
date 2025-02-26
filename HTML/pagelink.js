function loadPage(pageLink) {
    // Use a relative path instead of an absolute path
    fetch(pageLink)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading page: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("html-content").innerHTML = data;
            window.history.pushState({ path: pageLink }, "", pageLink);
        })
        .catch(error => {
            document.getElementById("html-content").innerHTML = "<p>Error loading content.</p>";
            console.error("Error:", error);
        });
}

// ✅ Handle back/forward navigation correctly
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.path) {
        loadPage(event.state.path);
    }
});
