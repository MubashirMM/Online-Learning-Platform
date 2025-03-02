function loadPage(pageLink, targetElementId) {
    fetch(pageLink)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading page: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Create a temporary container to extract content
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;

            // Extract the main content without footer
            const newContent = tempDiv.querySelector("#content");
            if (newContent) {
                document.getElementById(targetElementId).innerHTML = newContent.innerHTML;
            } else {
                document.getElementById(targetElementId).innerHTML = data; // Fallback if #content isn't found
            }

            // Push state to history
            window.history.pushState({ path: pageLink }, "", pageLink);
        })
        .catch(error => {
            document.getElementById(targetElementId).innerHTML = "<p>Error loading content.</p>";
            console.error("Error:", error);
        });
}










// ...........................................................
// let currentPage = ""; // Track currently loaded page

// function loadPage(pageLink, targetElementId) {
//     let iframe = document.getElementById("dynamic-iframe");

//     if (!iframe) {
//         iframe = document.createElement("iframe");
//         iframe.id = "dynamic-iframe";
//         iframe.style.width = "100%";
//         iframe.style.height = "100%";
//         iframe.style.border = "none";

//         const targetElement = document.getElementById(targetElementId);
//         if (!targetElement) {
//             console.error("Target element not found:", targetElementId);
//             return;
//         }

//         targetElement.innerHTML = ""; // Clear previous content
//         targetElement.appendChild(iframe);
//     }

//     // Prevent unnecessary reloads
//     if (currentPage === pageLink) return;
//     currentPage = pageLink;

//     iframe.src = "";
//     setTimeout(() => iframe.src = pageLink, 10);

//     // Update browser history
//     window.history.pushState({ path: pageLink }, "", pageLink);
// }

// // Handle browser back/forward buttons
// window.addEventListener("popstate", function (event) {
//     if (event.state && event.state.path) {
//         loadPage(event.state.path, "content");
//     }
// });

// // Load the initial page after DOM is loaded
// document.addEventListener("DOMContentLoaded", function () {
//     loadPage("index.html", "content");
// });
