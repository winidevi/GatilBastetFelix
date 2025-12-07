// -------- TROCA DE PÁGINAS --------
const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const page = link.dataset.page;

        // Remove active das sections
        pages.forEach(sec => sec.classList.remove("active"));

        // Remove active do menu
        links.forEach(l => l.classList.remove("active"));

        // Adiciona active na section e no menu clicado
        document.getElementById(page).classList.add("active");
        link.classList.add("active");

        // Fecha menu mobile quando clicar
        document.getElementById("navMenu").classList.remove("open");
        menuBtn.classList.remove("open");
    });
});


// -------- MENU HAMBÚRGUER --------
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
});


// -------- DARK MODE --------
const darkBtn = document.getElementById("darkModeBtn");
const body = document.body;

// Verifica preferência anterior
if (localStorage.getItem("darkmode") === "on") {
    body.classList.add("dark");
    darkBtn.textContent = "☀️";
}

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Troca de ícone e salva preferência
    if (body.classList.contains("dark")) {
        darkBtn.textContent = "☀️";
        localStorage.setItem("darkmode", "on");
    } else {
        darkBtn.textContent = "🌙";
        localStorage.setItem("darkmode", "off");
    }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let emailUsuario = document.getElementById("email").value;  // <-- e-mail do cliente
    let mensagem = document.getElementById("mensagem").value;

    let emailDestino = "bastetfelix455@gmail.com"; // email do destinatário

    let texto = 
        `Olá! Meu nome é ${nome}%0A` +
        `Email: ${emailUsuario}%0A` +
        `Mensagem:%0A${mensagem}`;

    let numero = "5511976082166"; // WhatsApp do destinatário

    // Enviar para WhatsApp
    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");

    // Enviar para e-mail
    window.open(`mailto:${emailDestino}?subject=Contato%20via%20site&body=${texto}`, "_blank");
});


