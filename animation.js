var scroll = window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  };

var elementsToShow = document.querySelectorAll('.show-on-scroll');
var hexagonFirst = document.getElementById('off-viewport-animation');
var hexagonLast = document.getElementById('off-viewport-animation2');
let hex = document.querySelectorAll('.hex-anim')




function loop() {

  elementsToShow.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('show-on-scroll-title');
    }
  })

  hex.forEach(el => {
    if (isElementInViewport(el) && !el.classList.contains('off-viewport')) {
      el.classList.add('off-viewport')
      console.log('aaa')
    }
  })

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  /*   if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    } */
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0 - rect.height / 2) ||
    (rect.bootom - rect.height / 2 >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 && rect.bottom - rect.height / 2 <= (window.innerHeight || document.documentElement.clientHeight))
  );
}