const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

let text = "";

for (let i = 0; i < 670; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;