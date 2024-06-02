document.addEventListener("DOMContentLoaded", function() {
    // Get references to the logo and menu elements
    var logo = document.getElementById('logo');
    var menu = document.getElementById('menu');

    // Add a click event listener to the logo
    logo.addEventListener('click', function() {
        // Toggle the class to slide in/out the menu
        menu.classList.toggle('slide-in');
    });
});

function dwns() {
    var a = document.createElement("a");
    a.href = "/BatchAppEditor.zip";
    a.click();
}