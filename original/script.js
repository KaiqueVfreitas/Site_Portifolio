function toggleDarkMode() {
    var body = document.body;
    var modoToggle = document.getElementById("modo-toggle");

    body.classList.toggle("dark-mode");


    if (body.classList.contains("dark-mode")) {
        modoToggle.innerHTML = "🌙"; 
        modoToggle.style.borderColor = "#000"; 
    } else {
        modoToggle.innerHTML = "🌞"; 
        modoToggle.style.borderColor = "#fff"; 
    }
}
