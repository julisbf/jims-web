const header = document.querySelector('.header');
const spiderweb = document.querySelector('#spiderweb');
const mentorshipTitle = document.querySelector('#mentorship-title');
const jimPhoto = document.querySelector('.jim-photo');
let position = getPosition(spiderweb);

window.addEventListener('scroll', updatePosition, false);

mentorshipTitle.addEventListener('mouseenter', () => {
  jimPhoto.classList.add('show');
  jimPhoto.classList.remove('hide');
});

mentorshipTitle.addEventListener('mouseleave', () => {
  jimPhoto.classList.add('hide');
  jimPhoto.classList.remove('show');
});

function updatePosition() {
  // add your code to update the position when your browser
  // is resized or scrolled
  position = getPosition(spiderweb);
  if (Math.abs(position.y) >= spiderweb.clientHeight / 2) {
    if (!header.classList.contains('header--fixed')) {
      header.classList.add('header--fixed');
    }
  } else {
    if (header.classList.contains('header--fixed')) {
      header.classList.remove('header--fixed');
    }
  }
}

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == 'BODY') {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
