// JavaScript for Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// JavaScript for Progress Bar Animation
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
        const rating = bar.getAttribute("data-rating");
        bar.style.width = rating + "%";
        bar.textContent = rating + "%"; // Show the percentage in the bar
    });
});
