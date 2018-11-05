footerWrap = document.querySelector('.footer__wrapper');
squareWrap = document.querySelector('.square__wrapper');
mainWrap = document.querySelector('.main__wrapper');

function onWheelScroll() {
  footerWrap.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'
  squareWrap.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'
  mainWrap.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'

  console.log(window.getComputedStyle(footerWrap).getPropertyValue('transform'))

  if (window.getComputedStyle(footerWrap).getPropertyValue('transform') == 'matrix(1, 0, 0, 1, 0, 0)'
      || window.getComputedStyle(footerWrap).getPropertyValue('transform') == 'none') {
    footerWrap.style.transform = 'translateX(-50%)'
    squareWrap.style.transform = 'translateX(0)'
    mainWrap.style.transform = 'translateX(-0)'

  } else {
    footerWrap.style.transform = 'translateX(0)'
    squareWrap.style.transform = 'translateX(-50%)'
    mainWrap.style.transform = 'translateX(-50%)'
  }
}

function throttle(fn, wait) {
  let time = Date.now()

  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now()
    }
  }
}

window.addEventListener('wheel', throttle(onWheelScroll, 1000))