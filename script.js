const sections = document.querySelectorAll('section');

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  const startPosition = window.scrollY;
  const targetPosition = targetSection.getBoundingClientRect().top;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    let progress = timeElapsed / 500; // 500ms de duração da animação
    if (progress > 1) progress = 1;

    const newPosition = startPosition + (targetPosition * easeInOutQuad(progress));
    window.scrollTo(0, newPosition);

    if (progress < 1) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + ((4 - (2 * t)) * t);
}

sections.forEach((section) => {
  const scrollLink = document.createElement('a');
  scrollLink.classList.add('scroll-link');
  scrollLink.textContent = `Ir para ${section.id}`;
  scrollLink.href = `#${section.id}`;
  scrollLink.addEventListener('click', scrollToSection);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});




window.onscroll = function() {grudarNavBar()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function grudarNavBar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



