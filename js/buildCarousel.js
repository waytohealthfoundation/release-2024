let carouselItems = [
  {
    imgSrc: "./assets/carousel/one.jpg",
    imgAlt: "all hands together",
    link:
      "https://unsplash.com/photos/Zyx1bK9mqmA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Hannah Busing",
  },
  {
    imgSrc: "./assets/carousel/two.jpg",
    imgAlt: "extended hand holding up the sunset",
    link:
      "https://unsplash.com/@aamir_in?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Aamir Suhail",
  },
  {
    imgSrc: "./assets/carousel/three.jpg",
    imgAlt: "foggy window with heart etched in the window fog",
    link:
      "https://unsplash.com/photos/0ZQ8vojHNuc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Michael Fenton",
  },
  {
    imgSrc: "./assets/carousel/four.jpg",
    imgAlt: "young Haitian student smiling",
    link:
      "https://unsplash.com/photos/5uhOqA194JQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by TopSphere Media",
  },
  {
    imgSrc: "./assets/carousel/five.jpg",
    imgAlt: "father kissing his child on the cheek",
    link:
      "https://unsplash.com/photos/0mRerwRVqVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by TopSphere Media",
  },
];

function buildCarouselItem(item) {
  let carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");

  let itemVideo = document.createElement("div");
  itemVideo.classList.add("item-video");

  let itemImg = document.createElement("img");
  itemImg.src = item.imgSrc;
  itemImg.alt = item.imgAlt;

  itemVideo.appendChild(itemImg);

  let itemTitle = document.createElement("div");
  itemTitle.classList.add("item-title");

  let itemLink = document.createElement("a");
  itemLink.href = item.link;
  itemLink.target = "_blank";
  itemLink.innerText = item.linkText;

  itemTitle.appendChild(itemLink);

  carouselItem.appendChild(itemVideo);
  carouselItem.appendChild(itemTitle);

  return carouselItem;
}

export const makeCaroButtons = () => {
  let buttonContainter = document.createElement("div");
  buttonContainter.classList.add("container__slide-buttons");

  let buttonLeft = document.createElement("button");
  buttonLeft.classList.add("slide-ctrl");
  buttonLeft.innerHTML = `<i class="fas fa-arrow-left"></i>`;

  let buttonRight = document.createElement("button");
  buttonRight.classList.add("slide-ctrl");
  buttonRight.innerHTML = `<i class="fas fa-arrow-right"></i>`;

  buttonContainter.appendChild(buttonLeft);
  buttonContainter.appendChild(buttonRight);
  return buttonContainter;
};

export function buildCarousel() {
  let carousel = document.querySelector(".videos-carousel");
  for (let item of carouselItems) {
    let carouselItem = buildCarouselItem(item);
    carousel.appendChild(carouselItem);
  }
  return carousel;
}
