function toggleExpand(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    icon.src = '../svg/minus.svg';
  } else {
    content.style.display = 'none';
    icon.src = '../svg/plus.svg';
  }
}

const sliderItems = document.querySelectorAll('.slider__item');

sliderItems[0].classList.add('slider__item-active');

sliderItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    sliderItems.forEach((i) => i.classList.remove('slider__item-active'));

    item.classList.add('slider__item-active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const headerBurger = document.querySelector('.header__burger');
  const headerNav = document.querySelector('.header__nav');

  const body = document.body;

  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('open');
    body.classList.toggle('no-scroll');
  });

  headerNav.addEventListener('click', () => {
    headerBurger.classList.remove('active');
    headerNav.classList.remove('open');
    body.classList.remove('no-scroll');
  });
});
