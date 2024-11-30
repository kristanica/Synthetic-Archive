document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0; // Track the last scroll position

    window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Determine scroll direction
    const scrollingDown = currentScroll > lastScrollTop;
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Reset for top of page

    if (scrollingDown) {
        document.querySelectorAll('.reveal').forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('appear'); // Add the reveal effect
        }
        });
    }
    });
});