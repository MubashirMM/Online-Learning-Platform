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
 
// function loadPage(pageLink, targetElementId) {
//     // Create an iframe element
//     const iframe = document.createElement("iframe");

//     // Set the iframe source to the page link
//     iframe.src = pageLink;

//     // Set iframe styles to make it fit the container
//     iframe.style.width = "100%";
//     iframe.style.height = "100%";
//     iframe.style.border = "none";

//     // Clear the target element and append the iframe
//     const targetElement = document.getElementById(targetElementId);
//     targetElement.innerHTML = ""; // Clear existing content
//     targetElement.appendChild(iframe);

//     // Push state to history
//     window.history.pushState({ path: pageLink }, "", pageLink);
// }