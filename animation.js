var scroll = window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  };

var elementsToShow = document.querySelectorAll('.show-on-scroll');
var hexagon = document.getElementById('off-viewport-animation');
var hexagon2 = document.getElementById('off-viewport-animation2');




function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('show-on-scroll-title');
    }
  })

  if (isElementInViewport(hexagon)) {
    hexagon.classList.remove('off-viewport')
  }

  if (isElementInViewport(hexagon2)) {
    hexagon2.classList.remove('off-viewport')
  }





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