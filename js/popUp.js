const projects = [
  {
    title: 'Hotel Reservation',
    devs: ['• Spring Boot', ' • Bootstrap', ' • MySQL WorkBench'],
    description:
      "This application is a web application for final capstone project that you can find your favorite Hotel around the world and reserve it for a specific date, find information about a hotel at details page and cancel a reservation.",
    tags: ['HTML/CSS', 'javascript','jQuery', 'CRUD'],
    image: 'img/Snapshoot.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: '/img/Vector(2).png',
    btnImg2: '/img/Vector(1).png',
    link: 'https://hotel-frontend-ui.vercel.app/index.html',
    srcLink: 'https://github.com/anshita-21/Hotel-Frontend'
    // eslint-disable-next-line linebreak-style
  },
  {
    title: 'Weather App',
    devs: ['• React', ' • PWA', ' • Service Worker'],
    description:
      "SkyVue, your go-to Progressive Web Application for quick and accurate weather updates. With SkyVue, you can easily check the temperature and weather conditions for any location.",
    tags: ['html5', 'css3', 'react', 'API'],
    image: 'img/Snapshoot(1).png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: '/img/Vector(2).png',
    btnImg2: '/img/Vector(1).png',
    link: 'https://sky-vue.vercel.app/',
    srcLink: 'https://github.com/anshita-21/SkyVue',
    // eslint-disable-next-line linebreak-style
  },
  {
    title: 'Journal Junction',
    devs: ['• MERN', '• Redux', ' • JWT'],
    description:
      "It is a Blog project built with the following technologies:React and React Router for the frontend Express and Mongoose for the backend Other technologies used Tailwind css Redux Toolkit",
    tags: ['Tailwind', 'Mongoose', 'Redux', 'Express'],
    image: 'img/Snapshoot(3).png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: '/img/Vector(1).png',
    btnImg2: '/img/Vector(2).png',
    link: '',
    srcLink: 'https://github.com/anshita-21/Journal-Junction',
  },

  // {
  //   title: 'Leader Board',
  //   devs: ['• HTML/CSS', ' • JavaScript', ' • 2022'],
  //   description:
  //     "This project contains a leader board for a game which contains players name and list and store them on API build with HTML, CSS, JS and API.",
  //   tags: ['html', 'css', 'javascript', 'bootstrap'],
  //   image: 'img/Snapshoot(3).png',
  //   liveVersion: 'See Live',
  //   sourceLink: 'See Source',
  //   btnImg1: '/img/Vector(1).png',
  //   btnImg2: '/img/Vector(2).png',
  //   link: 'https://sahar-se.github.io/Leaderboard/docs/',
  //   srcLink: 'https://github.com/Sahar-SE/Leaderboard',
  // },
  {
    title: 'Regional Transport System',
    devs: ['• Google Auth', ' • React', ' • Firbase'],
    description:
      "This project is a Regional Transport Office (RTO) Management System designed to streamline and automate the processes involved in managing vehicle registrations, licenses, and related activities.",
    tags: ['react', 'Javascript', 'HTML/CSS','Firebase'],
    image: 'img/Snapshoot(4).png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: '/img/Vector(1).png',
    btnImg2: '/img/Vector(1).png',
    link: 'https://rto-1107-main.vercel.app/',
    srcLink: 'https://github.com/anshita-21/RTO_1107-main',
  },
];

const buttonOne = document.querySelectorAll('.btn');

const headersection = document.querySelector('header');

function open(index) {
  const {
    title, devs, description, tags, image, liveVersion, sourceLink, link, srcLink,
  } = projects[index];
  const dev1 = devs[0];
  const dev2 = devs[1];
  const dev3 = devs[2];
  const tags1 = tags[0];
  const tags2 = tags[1];
  const tags3 = tags[2];
  const tags4 = tags[3];
  const container = document.querySelector('.popup-menus');
  container.innerHTML = `
  <div class="popup-main-container">
  <div class="popup-content ">
  <div class="popup-heading">
  <h1 class="popup-project1-title">${title}</h1>
  <a="button" class="popup-close">&times;</a>
  </div>
  <ul class="popup-example-dev">
  <li class="dev1">${dev1}</li>
  <li class="dev2">${dev2}</li>
  <li class="dev2">${dev3}</li>
  </ul>
  <div class="popup-container-img">
  <img src=${image} alt="card-img1" class="card-img">
  </div>
  <div class="popup-desktop">
  <p class="project-popup-info1">${description}</p>
  <div class="project-popup-info2">
  <ul class="popup-tags">
  <li class="popup-tag">${tags1}</li>
  <li class="popup-tag">${tags2}</li>
  <li class="popup-tag">${tags3}</li>
  <li class="popup-tag">${tags4}</li>
  </ul>

  <div class="popup-button">
  <a href=${link}><button type="button" class="popup-button1">${liveVersion}<img class="" src='img/Icone.png'></button></a>
  <a href=${srcLink}><button type="button" class="popup-button1">${sourceLink}<img class=""  src='img/Vectors.png'></button></a>
  </div>
  </div>
  </div>
  </div>
  </div>
`;

  headersection.appendChild(container.firstChild);

  container.style.display = 'block';

  const buttonClose = document.querySelector('.popup-close');
  buttonClose.addEventListener('click', () => {
    const popup = document.querySelector('.popup-menus');
    popup.style.display = 'none';
  });
}

for (let i = 0; i < buttonOne.length; i += 1) {
  buttonOne[i].addEventListener('click', () => open(i));
}
