const header = document.getElementById("siteHeader");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const customPopup = document.getElementById("customPopup");
const customPopupTitle = document.getElementById("customPopupTitle");
const customPopupMessage = document.getElementById("customPopupMessage");
const customPopupClose = document.getElementById("customPopupClose");
const customPopupButton = document.getElementById("customPopupButton");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function showPopup(title, message) {
    customPopupTitle.textContent = title;
    customPopupMessage.textContent = message;
    customPopup.classList.add("active");
}

function closePopup() {
    customPopup.classList.remove("active");
}

customPopupClose.addEventListener("click", closePopup);
customPopupButton.addEventListener("click", closePopup);

customPopup.addEventListener("click", event => {
    if (event.target === customPopup) {
        closePopup();
    }
});

document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
        const image = item.getAttribute("data-image");
        modalImage.src = image;
        imageModal.classList.add("active");
    });
});

closeModal.addEventListener("click", () => {
    imageModal.classList.remove("active");
    modalImage.src = "";
});

imageModal.addEventListener("click", event => {
    if (event.target === imageModal) {
        imageModal.classList.remove("active");
        modalImage.src = "";
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closePopup();

        if (imageModal.classList.contains("active")) {
            imageModal.classList.remove("active");
            modalImage.src = "";
        }
    }
});

const revealElements = document.querySelectorAll(
    ".section-heading, .feature-row article, .gallery-item, .news-card, .download-panel, .credit-line, .sponsor-panel"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.16
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

const clientButton = document.querySelector(".client-button");
const launcherButton = document.querySelector(".launcher-button");



launcherButton.addEventListener("click", () => {
    showPopup(
        "Notas de versión Beta 0.4.2",
        "Esta versión incluye mejoras en el sistema de trades, zonas urbanas, mercado de jugadores, rendimiento del cliente y ajustes visuales del mapa."
    );
});
// Cuenta regresiva a las 02:00 del 2 de marzo de 2027, hora centro de México (UTC-6).
const launchTime = new Date('2027-03-02T02:00:00-06:00').getTime();
function updateCountdown(){const remaining=Math.max(0,launchTime-Date.now());const total=Math.floor(remaining/1000);const values={days:Math.floor(total/86400),hours:Math.floor(total%86400/3600),minutes:Math.floor(total%3600/60),seconds:total%60};for(const [key,value] of Object.entries(values)){const element=document.getElementById(key);if(element)element.textContent=String(value).padStart(2,'0')}}
updateCountdown();setInterval(updateCountdown,1000);
