document.addEventListener("DOMContentLoaded", function () {
  // 1. Deklarasi Menu Hamburger
  const tombolMenuMobile = document.querySelector(".tombol-menu-mobile input");
  const daftarMenuUtama = document.querySelector(".daftar-menu-utama");
  tombolMenuMobile.addEventListener("click", function () {
    daftarMenuUtama.classList.toggle("slide");
  });

  const tautanMenu = document.querySelectorAll(".daftar-menu-utama li a");
  tautanMenu.forEach((link) => {
    link.addEventListener("click", function () {
      if (daftarMenuUtama.classList.contains("slide")) {
        daftarMenuUtama.classList.remove("slide");
        tombolMenuMobile.checked = false;
      }
    });
  });

  const tombolToggleEdu = document.querySelectorAll(".judul-toggle-edu");
  tombolToggleEdu.forEach((toggleButton) => {
    toggleButton.addEventListener("click", function () {
      const details = this.nextElementSibling;
      details.classList.toggle("active");
      this.classList.toggle("expanded");
    });
  });
});
