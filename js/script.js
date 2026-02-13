// Welcome Text
let userName = prompt("Masukkan nama kamu:");

if (userName && userName !== "") {
    document.getElementById("welcomeText").innerText = "Hi " + userName;
}

// Form Validation
const form = document.getElementById("messageForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let birth = document.getElementById("birth").value;
    let message = document.getElementById("message").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!nama || !birth || !gender || !message) {
        alert("Semua field harus diisi!");
        return;
    }

    let currentTime = new Date();

    document.getElementById("resultBox").innerHTML = `
        <p><strong>Current time:</strong> ${currentTime}</p>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${birth}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

    form.reset();
});
