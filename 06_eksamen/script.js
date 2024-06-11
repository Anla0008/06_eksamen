function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  var mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.display = mobileMenu.style.display === "none" || mobileMenu.style.display === "" ? "flex" : "none";
}

// Hent knappen
let mybutton = document.getElementById("myBtn");

// Når brugeren scroller ned 20px fra toppen af dokumentet, vis knappen
window.onscroll = function () {
  scrollFunction();
};

// Definerer funktionen der håndterer scroll-events
function scrollFunction() {
  // Henter footer-elementet
  let footer = document.querySelector("footer");
  // Beregner afstanden fra toppen af dokumentet til toppen af footeren
  let footerOffset = footer.offsetTop;
  // Beregner brugerens nuværende scroll-position plus højden af vinduet
  let scrollPosition = window.scrollY + window.innerHeight;
  // Angiver afstanden over footeren, hvor knappen skal stoppe
  let buffer = 20;

  // Hvis brugeren scroller mere end 20px fra toppen, vis knappen
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    // Hvis brugeren er tættere på toppen end 20px, skjul knappen
    mybutton.style.display = "none";
  }

  // Hvis scroll-positionen er tæt på eller overskrider footerens position minus buffer
  if (scrollPosition >= footerOffset + buffer) {
    // Juster knappen, så den sidder fast 20px over footeren
    mybutton.style.bottom = `${scrollPosition - footerOffset + buffer}px`;
  } else {
    // Ellers, hold knappen fast i bunden af vinduet
    mybutton.style.bottom = "20px";
  }
}

// Når brugeren klikker på knappen, scroll til toppen af dokumentet
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE og Opera
}
