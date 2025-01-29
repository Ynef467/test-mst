document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth > 1240) {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });
  }
});