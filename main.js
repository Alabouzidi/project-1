const ham = document.querySelector('.nav-list .hamburger');

const navbar = document.querySelector('.nav-list ul ');

ham.addEventListener("click" , () => {
  navbar.classList.toggle('active');
});