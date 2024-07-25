export function hamBuger() {
  const mobileMenu = document.getElementById("mobile-menu");
  const nav = document.querySelector(".nav");

  mobileMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });
  return
}
