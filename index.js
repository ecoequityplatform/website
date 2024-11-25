// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }

// function setCookie(value) {
//   document.cookie = `userCookieConsent=${value}; path=/; max-age=31536000`;
//   closeCookieBanner();
// }

// function closeCookieBanner() {
//   document.getElementById('cookie-banner').style.display = 'none';
// }

// window.onload = function () {
//   if (!getCookie('userCookieConsent')) {
//     document.getElementById('cookie-banner').style.display = 'block';
//   }
// };

function toggleExpand(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    icon.src = './svg/minus.svg';
  } else {
    content.style.display = 'none';
    icon.src = './svg/plus.svg';
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
  const navLinks = document.querySelectorAll('.nav__item'); // Отримуємо всі елементи навігації

  const body = document.body;

  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('open');
    body.classList.toggle('no-scroll');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      headerBurger.classList.remove('active');
      headerNav.classList.remove('open');
      body.classList.remove('no-scroll');
    });
  });
});

const teamMembers = [
  {
    name: 'David Cullinan',
    title: 'Founder & Chief Executive Officer',
    description: `David is the Founder & CEO of EcoEquity, a forward-thinking climate initiative committed to utilizing blockchain technology to drive environmental sustainability. In addition to his leadership at EcoEquity, David serves as the Head of Strategy at AZUR, a leading special economic zone in the Americas that supports tech startups in scaling their operations through tailored ecosystems and strategic planning.

    With a proven track record in both the blockchain and finance sectors, David spent time at Illuvium, a blockchain gaming company that raised a historic $72 million in a virtual land sale, marking one of the most successful ventures in the blockchain gaming industry. As CMO at EQIBank, he helped lead the $13 million fundraising effort for EQIFi, the world’s first DeFi protocol backed by a licensed bank.

    David’s innovative approach to marketing was showcased in a London Underground campaign that placed EQIFi on 1100 billboards across the UK, successfully navigating strict financial advertising regulations to boost brand awareness.

    His thought leadership has been featured in prominent publications such as Entrepreneur, Yahoo Finance, and FinTech Futures, where his insights on blockchain and fintech strategy have made a significant impact on the global tech landscape. `,
    imgSrc: './images/david.jpg',
    linkedin: ' https://www.linkedin.com/in/davidcullinan1979/',
    xUrl: '#',
  },
  {
    name: 'Frank Frausto',
    title: 'Chief Marketing Officer',
    description: `Frank Frausto is a seasoned digital marketing expert with a distinguished career spanning over two decades. Beginning his journey at Google in 2003, Frank played a pivotal role in scaling the company's sales operations, notably founding the first inside sales team and becoming the head sales trainer. During his tenure at Google, he contributed significantly to the Google Partners program, helping it evolve into a cornerstone of Google's business outreach efforts. Frank has partnered with companies large and small to optimize their digital marketing strategies, personally managing over 4,500 paid ad accounts across 15 years at Google. His expertise in sales and marketing, combined with his knack for innovative strategies, earned him a reputation as a leader in the tech industry.

    In 2018, Frank transitioned from his role at Google to embark on a new entrepreneurial path, founding his own digital marketing agency. His work has since focused on leveraging his extensive knowledge of blockchain and cryptocurrency, guiding several startups in these emerging fields. Frank's approach combines deep technical understanding with strategic marketing insight, making him a sought-after consultant for businesses looking to navigate the complexities of digital transformation.

    Outside of his professional pursuits, Frank is an avid sports enthusiast, an accomplished photographer, and a certified sommelier with a passion for wine tasting. His diverse interests and commitment to excellence in both his personal and professional life continue to drive his success and influence in the industry. `,
    imgSrc: './images/frank.jpg',
    linkedin: '#',
    xUrl: '#',
  },
  {
    name: 'Stefano Tempesta',
    title: 'Chief Technical Officer',
    description: `Stefano Tempesta is a technologist working at the crossroad of Web2 and Web3, to make the Internet a more accessible, meaningful, and inclusive space. Stefano is an ambassador of the use of AI and blockchain technologies for good humanitarian purposes. A former advisor to the Department of Industry and Science, Australia, on the National Blockchain Roadmap, he is currently a lecturer at RMIT University, Australia, of courses about AI and blockchain technology.

A passionate traveller, a poor musician, and an avid learner of new technologies and (programming) languages, Stefano has co-authored the books "Blockchain Applied" and "Developing Blockchain Applications in the Cloud", holds three citizenships, and speaks fluent English, Italian, and terrible Ukrainian.`,
    imgSrc: './images/stefano.jpg',
    linkedin: 'https://linkedin.com/in/stefanotempesta',
    xUrl: 'https://x.com/stefanotempesta',
  },

  {
    name: 'Gregory Vint',
    title: 'Chief Legal & Compliance Officer',
    description: `Gregory Vint is a corporate lawyer with experience at major corporations and financial institutions in the US and EU.  He was also an attorney at the FDIC, a US banking regulatory, where he advised policy makers on legal issues related to new regulatory initiatives.  After relocating from the US to Estonia in 2018, he worked with EU companies seeking to expand in the US, including a FinTech company that has achieved "unicorn" status.  He also worked on the institutional fixed income desk at JP Morgan advising clients and collaborating with traders to structure trading and investment strategies for large fixed income investors.  Notable legal areas Gregory has addressed include: analyzing the relationship between cryptocurrency and blockchain in the financial industry with US financial laws and regulations, impact of regulatory initiatives on FinTechs and emerging technologies in financial markets, and corporate financing and structuring.

 He has a B.A. from Rice University and a J.D. from the University of Texas School of Law.  He is an active member of the State Bar of Texas and completed Level 1 of the Chartered Financial Analyst certification program.`,
    imgSrc: './images/gregory.jpg',
    linkedin: '#',
    xUrl: '#',
  },
  {
    name: 'Elay Koren',
    title: 'Strategic Partnerships & Sustainability Advisor',
    description: `Elay Koren is a seasoned environmental manager with over 13 years of experience in environmental management, including more than a decade in leadership roles. He has a proven track record in advancing compliance and sustainability, specializing in policy development related to urban planning and environmental initiatives.

Elay excels at driving cost-effective waste and energy reduction strategies that align with corporate and organizational sustainability objectives. His expertise includes managing and guiding professional teams to achieve high compliance rates, fostering both organizational and community-wide sustainability. His experience spans budgeting and executing multi-billion-dollar plans, emphasizing efficiency and impactful results.

Elay’s career has seen him appointed as an advisor on climate action and sustainability initiatives at municipal, regional, and corporate levels. Passionate about shaping human engagement in climate adaptation and mitigation, Elay remains dedicated to advancing meaningful climate actions.`,
    imgSrc: './images/elay.jpg',
    linkedin: 'https://www.linkedin.com/in/ek84/',
    xUrl: '#',
  },
  {
    name: 'Yuliia Shevchenko',
    title: 'UX/UI Design Lead',
    description: `Yuliia is a passionate UX/UI designer focused on creating digital experiences that make an impact. Design is more than just a profession—it's a way to merge creativity and functionality into seamless, user-friendly designs. From mobile apps to enterprise software, Yuliia is dedicated to delivering modern, immaculate designs of the highest standard. With a human-centered approach, Yuliia empathizes with users, identifies their pain points, and crafts solutions that enhance their experience with your brand or product. A lover of travel and living in different countries, Yuliia draws inspiration from diverse cultures to enrich the design process.`,
    imgSrc: './images/yuliia.jpg',
    linkedin: 'https://www.linkedin.com/in/uliia-shevchenko/',
    xUrl: '#',
  },
  {
    name: 'Sarah Petrik',
    title: 'Head of Recruitment',
    description: `Sarah brings over a decade of experience in talent acquisition, having worked across diverse industries and organizations of varying scale. With a proven track record of building high-performing teams, Sarah has a deep understanding of the talent landscape and a passion for attracting and retaining top talent.

As a strategic talent acquisition leader, Sarah has successfully navigated complex talent landscapes, teams and implemented innovative recruiting strategies. Her ability to foster strong relationships, identify top talent, and leverage data-driven insights has been instrumental in driving organizational growth and success.

Sarah holds her Masters of Business Administration with a concentration in Strategic Leadership from the University of Delaware and her Bachelors of Business Administration from Valparaiso University.`,
    imgSrc: './images/sarah.jpg',
    linkedin: '#',
    xUrl: '#',
  },
  {
    name: 'Kevin Tomé',
    title: 'Head of Brand & Design',
    description: `Kevin Tome is a Brand/Visual Designer based in Kitchener-Waterloo with a strong background in brand design, marketing, and content creation. He has a proven track record of leading projects, mentoring junior designers, and collaborating closely with clients. Kevin also teaches part-time at his local college, shaping the next generation of designers.

In his recent work, Kevin led branding initiatives in the web3 space at Airfoil, developing brand systems for various organizations. At ApplyBoard, he helped international students gain access to quality education by managing a wide array of design projects. His experience also includes roles at various companies where he contributed to branding and marketing efforts.`,
    imgSrc: './images/kevin.jpg',
    linkedin: 'https://www.linkedin.com/in/kevin-tome-b212a896',
    xUrl: '#',
  },
];

// Function to render team members
function renderTeamMembers() {
  const teamItemsContainer = document.getElementById('teamItems');

  teamMembers.forEach((member) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('slick__item');

    const linkedinIcon =
      member.linkedin && member.linkedin.trim() !== '#'
        ? `<a target="_blank" href="${member.linkedin}"><img src="./svg/li.svg" alt="linkedin" /></a>`
        : '';
    const xIcon =
      member.xUrl && member.xUrl.trim() !== '#'
        ? `<a target="_blank" href="${member.xUrl}"><img src="./svg/x.svg" alt="x" /></a>`
        : '';

    itemDiv.innerHTML = `
          <div class="team__item">
            <div class="team__img-wrapper">
              <img class="team__img" src="${member.imgSrc}" alt="${member.name}" />
            </div>
            <span class="team__title">${member.title}</span>
            <p class="team__name">${member.name}</p>
            <div class="team__actions">
              <div class="team__links">
                ${linkedinIcon}
                ${xIcon}
              </div>
              <button class="team__button">
                <img src="./svg/team-plus.svg" alt="plus" />
              </button>
            </div>
          </div>
      `;

    teamItemsContainer.appendChild(itemDiv);
  });
}

// Function to open popup
// Function to open popup
function openPopup(member) {
  document.getElementById('popupImg').src = member.imgSrc;
  document.getElementById('popupName').innerText = member.name;
  document.getElementById('popupTitle').innerText = member.title;
  document.getElementById('popupDescription').innerText = member.description;

  const linksContainer = document.querySelector('.popup__links');
  linksContainer.innerHTML = ''; // Очищаємо попередній вміст

  // Додаємо іконку LinkedIn, якщо посилання існує
  if (member.linkedin && member.linkedin !== '#') {
    const linkedinLink = document.createElement('a');
    linkedinLink.href = member.linkedin;
    linkedinLink.target = '_blank';
    linkedinLink.innerHTML = `<img src="./svg/li-green.svg" alt="linkedin" />`;
    linksContainer.appendChild(linkedinLink);
  }

  // Додаємо іконку X, якщо посилання існує
  if (member.xUrl && member.xUrl !== '#') {
    const xLink = document.createElement('a');
    xLink.href = member.xUrl;
    xLink.target = '_blank';
    xLink.innerHTML = `<img src="./svg/x-green.svg" alt="x" />`;
    linksContainer.appendChild(xLink);
  }

  document.getElementById('popup').style.display = 'flex';
}

// Function to close popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Attach event listeners to buttons
function attachEventListeners() {
  const buttons = document.querySelectorAll('.team__button');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => openPopup(teamMembers[index]));
  });
}

// Initialize the team section
function init() {
  renderTeamMembers();
  attachEventListeners();
}

// Event listener for closing the popup
document.getElementById('popupClose').addEventListener('click', closePopup);

// Initialize the app
init();

$(document).ready(function () {
  function initSlick() {
    if ($(window).width() > 1200) {
      if ($('.team__items').hasClass('slick-initialized')) {
        $('.team__items').slick('unslick'); // Вимкнути слайдер
      }
    } else {
      if (!$('.team__items').hasClass('slick-initialized')) {
        $('.team__items').slick({
          dots: true,
          arrows: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow:
            '<button type="button" class="slick-prev"><img src="./svg/arrow_left.svg" alt="Previous" /></button>',
          nextArrow:
            '<button type="button" class="slick-next"><img src="./svg/arrow_right.svg" alt="Next"</button>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
              },
            },
          ],
        });
      }
    }
  }

  initSlick();

  $(window).resize(function () {
    initSlick();
  });
});

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', function () {
  if (!emailInput.checkValidity()) {
    emailInput.classList.add('error');
    emailError.style.display = 'block';
  } else {
    emailInput.classList.remove('error');
    emailError.style.display = 'none';
  }
});
