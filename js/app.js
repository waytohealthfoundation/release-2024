import { buildCarousel, makeCaroButtons } from "./buildCarousel.js";

const body = document.body;
const navToggle = document.querySelector("#navToggle");
const nav = document.getElementById("navLinks");
const viewSize = window.innerWidth;

let lastScroll = 0;
try {
  const caroHolder = document.getElementById("videos-carousel-wrapper"); // This is a slightly safer way to get a single reference to the carousel holder
  let caro = buildCarousel();

  caroHolder.appendChild(caro);

  let caroButtons = makeCaroButtons();
  caroHolder.appendChild(caroButtons);
} catch (e) {
  console.error(e);
}

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) return body.classList.remove("scroll-up");
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

if (viewSize > 920 && nav.classList.contains("nav-active")) {
  nav.classList.remove("nav-active");
}
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
nav.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

// *** POP-UP MODALS ***

const btnFormsDownloads = document.getElementById("formsDownloads");
const dialogFormsDownloads = document.getElementById("formsDownloadsDialog");
const closeFD = document.getElementById("closeFD");

btnFormsDownloads.addEventListener("click", () => {
  dialogFormsDownloads.showModal();
});
closeFD.addEventListener("click", () => {
  dialogFormsDownloads.close();
});

//  *** Accordions ***
const toggleClasses = (element, remove, add) => {
  element.classList.remove(remove);
  element.classList.add(add);
};

function toggleAccordion(element, open, close) {
  if (Array.from(element.classList).includes("expanded")) {
    element.parentElement.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
    toggleClasses(element, open, close);
  } else {
    toggleClasses(element, close, open);
  }

  toggleButtonText(element);
}

const toggleButtonText = (element) => {
  let newText =
    element.nextElementSibling.innerText === "Read More..."
      ? "Read Less \u2303"
      : "Read More...";
  element.nextElementSibling.innerText = newText;
};
