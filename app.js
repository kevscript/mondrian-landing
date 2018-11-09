sideFooterWrap = document.querySelector('.sidebar__footer__wrapper');
sideSquareWrap = document.querySelector('.sidebar__square__wrapper');
sideMainWrap = document.querySelector('.sidebar__main__wrapper');

mainBgWrap = document.querySelector('.main__bg__wrapper');
mainBoxWrap = document.querySelector('.main__box__wrapper');

heroTextOne = document.querySelector('.hero__text-1');
heroTextTwo = document.querySelector('.hero__text-2');

function onWheelScroll() {
  sideFooterWrap.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'
  sideSquareWrap.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'
  sideMainWrap.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'
  mainBgWrap.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'
  mainBoxWrap.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'
  heroTextOne.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)' 
  heroTextTwo.style.transition = 'all 0.8s cubic-bezier(.64,1.05,.89,.95)'


  console.log(window.getComputedStyle(sideFooterWrap).getPropertyValue('transform'))

  if (window.getComputedStyle(sideFooterWrap).getPropertyValue('transform') == 'matrix(1, 0, 0, 1, 0, 0)'
    || window.getComputedStyle(sideFooterWrap).getPropertyValue('transform') == 'none') {
    sideFooterWrap.style.transform = 'translateX(-50%)'
    sideSquareWrap.style.transform = 'translateX(0)'
    sideMainWrap.style.transform = 'translateX(0)'
    mainBgWrap.style.transform = 'translateX(0)'
    mainBoxWrap.style.transform = 'translateX(0)'
    
    heroTextOne.style.opacity = '0'
    heroTextOne.style.visibility = 'hidden'
    heroTextTwo.style.visibility = 'visible'
    heroTextTwo.style.opacity = '1'


  } else {
    sideFooterWrap.style.transform = 'translateX(0)'
    sideSquareWrap.style.transform = 'translateX(-50%)'
    sideMainWrap.style.transform = 'translateX(-50%)'
    mainBgWrap.style.transform = 'translateX(-50%)'
    mainBoxWrap.style.transform = 'translateX(-50%)'

    heroTextTwo.style.opacity = '0'
    heroTextTwo.style.visibility = 'hidden'
    heroTextOne.style.visibility = 'visible'
    heroTextOne.style.opacity = '1'
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