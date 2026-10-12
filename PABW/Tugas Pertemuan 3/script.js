console.log("JavaScript Cikadongdong aktif!");

const hero = document.querySelector("#beranda");

const fotoHero = [
    "images/foto-sungai-1.jpg",
    "images/foto-sungai-2.jpg"
];

let indeksFoto = 0;

fotoHero.forEach((src) => {
    const gambar = new Image();
    gambar.src = src;
});

setInterval(() => {
    indeksFoto = (indeksFoto + 1) % fotoHero.length;

    hero.style.backgroundImage = `
        linear-gradient(
            90deg,
            rgba(20, 25, 65, 0.82) 0%,
            rgba(20, 25, 65, 0.48) 55%,
            rgba(20, 25, 65, 0.12) 100%
        ),
        url("${fotoHero[indeksFoto]}")
    `;
}, 5000);

/* Slideshow foto galeri */
document.querySelectorAll(".gambar-galeri").forEach((galeri) => {
    const foto = galeri.querySelectorAll("img");

    if (foto.length < 2) return;

    let indeks = 0;

    foto.forEach((gambar, i) => {
        gambar.classList.toggle("foto-aktif", i === 0);
    });

    setInterval(() => {
        foto[indeks].classList.remove("foto-aktif");

        indeks = (indeks + 1) % foto.length;

        foto[indeks].classList.add("foto-aktif");
    }, 4000);
});

/* Lightbox galeri */
const lightbox = document.querySelector("#lightboxGaleri");
const fotoLightbox = document.querySelector("#fotoLightbox");
const tombolTutup = document.querySelector("#tutupLightbox");

document.querySelectorAll(".gambar-galeri img").forEach((gambar) => {
    gambar.addEventListener("click", () => {
        fotoLightbox.src = gambar.src;
        fotoLightbox.alt = gambar.alt;

        lightbox.classList.add("aktif");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        tombolTutup.focus();
    });
});

function tutupFotoBesar() {
    lightbox.classList.remove("aktif");
    lightbox.setAttribute("aria-hidden", "true");
    fotoLightbox.src = "";
    document.body.style.overflow = "";
}

tombolTutup.addEventListener("click", tutupFotoBesar);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        tutupFotoBesar();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        lightbox.classList.contains("aktif")
    ) {
        tutupFotoBesar();
    }
});

/* Mode terang dan gelap */
const tombolTema = document.getElementById("tombol-tema");
const ikonTema = document.getElementById("ikon-tema");
const teksTema = document.getElementById("teks-tema");

if (tombolTema && ikonTema && teksTema) {
    tombolTema.addEventListener("click", function () {
        const modeGelap = document.body.classList.toggle("mode-gelap");

        if (modeGelap) {
            ikonTema.textContent = "☀";
            teksTema.textContent = "Mode Terang";
            tombolTema.setAttribute(
                "aria-label",
                "Aktifkan mode terang"
            );
        } else {
            ikonTema.textContent = "☾";
            teksTema.textContent = "Mode Gelap";
            tombolTema.setAttribute(
                "aria-label",
                "Aktifkan mode gelap"
            );
        }
    });
}