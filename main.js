let imgOne = document.getElementById('el1');
let imgTwo = document.getElementById('el2');
let imgThree = document.getElementById('el3');
let imgFour = document.getElementById('el4');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

window.onscroll = function () {
  let rect1 = imgOne.getBoundingClientRect();
  let rect2 = imgTwo.getBoundingClientRect();
  let rect3 = imgThree.getBoundingClientRect();
  let rect4 = imgFour.getBoundingClientRect();

  let angle = 21.6 - (rect2.top - rect1.height) / 7;
  let opac = ((rect2.top - rect1.height) * 2) / rect4.height;

  overlap(rect1, rect2, angle, opac, img1);

  if ((rect2.top = rect1.bottom)) {
    let angleSecond = 21.6 - (rect3.top - rect2.height) / 7;
    let opacSecond = ((rect3.top - rect2.height) * 2) / rect4.height;
    overlap(rect2, rect3, angleSecond, opacSecond, img2);
  }
  if ((rect3.top = rect2.bottom)) {
    let angleThird = 21.6 - (rect4.top - rect3.height) / 7;
    let opacThird = ((rect4.top - rect3.height) * 2) / rect4.height;
    overlap(rect3, rect4, angleThird, opacThird, img3);
  }
};

const overlap = (firstBox, secondBox, angle, opac, img) => {
  if (secondBox.top < firstBox.bottom - firstBox.height / 2.5) {
    img.style.transform = `rotateX(${angle}deg)`;
    img.style.opacity = `${opac}`;
  }
  if (secondBox.top === firstBox.top) {
    img.style.transform = `rotateX(${angle}deg)`;
    img.style.opacity = `0`;
  }
  if (secondBox.top > firstBox.bottom - firstBox.height / 2.5) {
    img.style.transform = `rotateX(0deg)`;
    img.style.opacity = `1`;
  }
};
