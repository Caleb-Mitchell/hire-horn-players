const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide_in");
    }
  });
});

const myHiddenElements = document.querySelectorAll(".slide_in");
myHiddenElements.forEach((element) => myObserver.observe(element));
