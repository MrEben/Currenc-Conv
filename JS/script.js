const navSlide = () => {
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.links');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
  nav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};
navSlide();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const updateDate = () => {
  const todaysDate = document.querySelector('.todays-date');
  const todaysTime = document.querySelector('.todays-time');
  const today = new Date();
  console.log(today.getTime());
  todaysDate.innerHTML = `<h4>${
    months[today.getMonth()]
  } ${today.getDate()},${today.getFullYear()}</h4>`;
  todaysTime.innerHTML = `<h4>${today.getHours()}:${today.getMinutes()} GMT</h4>`;
};
updateDate();
