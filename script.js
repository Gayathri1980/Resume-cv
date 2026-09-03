function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const themeButton = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "☀️ Light Mode";
    } else {
        themeButton.innerHTML = "🌙 Dark Mode";
    }
}

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
        "Thank you, " + name + "! Your message has been received.";

}