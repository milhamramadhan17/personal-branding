//Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu (github) di klick
document.querySelector("#github").onclick = () => {
  navbarNav.classList.toggle("active");
};


//klik di luar sidebar untuk menghilangkan nav

const github = document.querySelector
('#github');

document.addEventListener('click', function(e) {
    if(!github.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})