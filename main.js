const imgOne = document.getElementById('el1');
const imgTwo = document.getElementById('el2');
const imgThree = document.getElementById('el3');
const imgFour = document.getElementById('el4');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

window.onscroll = function () {
  const rect1 = imgOne.getBoundingClientRect();
  const rect2 = imgTwo.getBoundingClientRect();
  const rect3 = imgThree.getBoundingClientRect();
  const rect4 = imgFour.getBoundingClientRect();

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


// toggle menu

const menuBtn = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

const toggleMenu = () => {

  if (!menuBtn.classList.contains('active-button')) {

  }

  if (!menu.classList.contains('active-menu')) {
    menu.classList.add('active-menu');
    menuBtn.classList.add('active-menu-button')
  } else {
    menu.classList.remove('active-menu');
    menuBtn.classList.remove('active-menu-button');
  }
}

menuBtn.addEventListener('click', toggleMenu)

// Close menu on outside click

window.addEventListener('click', (e) => {
  if (menu.classList.contains('active-menu')
    && e.target.id !== 'menu-layer'
    && e.target.id !== 'menu-btn'
    && e.target.id !== 'icon') {
    console.log('ins', e)
    menu.classList.remove('active-menu');
    menuBtn.classList.remove('active-menu-button');
  }
})