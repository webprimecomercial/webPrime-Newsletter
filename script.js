const navMenu = document.getElementById("nav_menu");
const toggleButton = document.getElementById("toggle_btn");
const closeButton = document.getElementById("close_btn");

// VVERIFICAÇÃO DE ELEMENTOS
if (toggleButton && navMenu && closeButton) {
  toggleButton.addEventListener("click", () => {
    navMenu.classList.add("show");
  });

  closeButton.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}

AOS.init();

// ANIMAÇOES
const animateElement = (selector, options) => {
  gsap.from(selector, options);
};

animateElement(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

animateElement(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});

animateElement(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

animateElement(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});

animateElement(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

animateElement(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

animateElement(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
