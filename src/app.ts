// intersection observer adds classes as window scrolls
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

// event listener for email-form intercepting the submit event
window.addEventListener("load", () => {
  const form = document.getElementById("email-form") as HTMLFormElement | null;

  if (form) {
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const data = new FormData(form);
      const action = (e.target as HTMLFormElement).action;

      fetch(action, {
        method: "POST",
        body: data,
      })
        .then(() => {
          alert("Success!");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
});

// event listener for inquiry-form intercepting the submit event
window.addEventListener("load", () => {
  const form = document.getElementById("inquiry-form") as HTMLFormElement | null;

  if (form) {
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const data = new FormData(form);
      const action = (e.target as HTMLFormElement).action;

      fetch(action, {
        method: "POST",
        body: data,
      })
        .then(() => {
          alert("Success!");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
});
