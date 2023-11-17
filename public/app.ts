const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-slide_in');
    } else {
      entry.target.classList.remove('animate-slide_in');
    }
  });
});

const hiddenElements = document.querySelectorAll('.slide_in');
hiddenElements.forEach((element) => observer.observe(element));
