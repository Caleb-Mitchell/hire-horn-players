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

      // change text of button to loading spinner
      const text = document.getElementById("email-button");

      if (text) {
        text.innerHTML = `
          <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke-width="4" stroke="#ff6123" fill="none"></circle>
            <path class="opacity-75" stroke-linecap="round" stroke="#ff6123" stroke-width="4" d="M12 2a10 10 0 0 0-5 18.66V21M12 2v3.66"></path>
          </svg>
        `;
      }

      // disable everything
      const elementsToDisable = document.querySelectorAll(
        "button, input, a, textarea, select, date",
      );

      fetch(action, {
        method: "POST",
        body: data,
      })
        .then(() => {
          const text = document.getElementById("footer-text");
          text!.innerHTML = "Thank you! You rock.";
          text!.style.padding = "1rem";
          // enable everything
          elementsToDisable.forEach((element) =>
            element.removeAttribute("disabled"),
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
});

// event listener for inquiry-form intercepting the submit event
window.addEventListener("load", () => {
  const form = document.getElementById(
    "inquiry-form",
  ) as HTMLFormElement | null;

  if (form) {
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const data = new FormData(form);
      const action = (e.target as HTMLFormElement).action;

      // change text of button to loading spinner
      const text = document.getElementById("inquire-button");

      if (text) {
        text.innerHTML = `
          <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke-width="4" stroke="#ff6123" fill="none"></circle>
            <path class="opacity-75" stroke-linecap="round" stroke="#ff6123" stroke-width="4" d="M12 2a10 10 0 0 0-5 18.66V21M12 2v3.66"></path>
          </svg>
        `;
      }

      // disable everything
      const elementsToDisable = document.querySelectorAll(
        "button, input, a, textarea, select, date",
      );
      elementsToDisable.forEach((element) =>
        element.setAttribute("disabled", "true"),
      );

      fetch(action, {
        method: "POST",
        body: data,
      })
        .then(() => {
          const text = document.getElementById("inquiry-form");
          if (!text) return;

          text.innerHTML =
            "Thank you! We’ll be in touch with you within the next 24 hours. Have a great day!";
          text.style.padding = "6rem 1rem";
          text.style.margin = "2rem 1rem";
          text.style.height = "50%";
          text.style.textAlign = "center";
          text.style.fontSize = "1rem";
          text.style.color = "#ff6123";
          text.style.font = "acumin-pro, sans-serif";
          text.style.lineHeight = "1.5";
          text.style.border = "2px solid #ff6123";

          // scroll to inquiry-form
          const inquiryForm = document.getElementById("inquiry-form");
          inquiryForm!.scrollIntoView();

          // enable everything
          elementsToDisable.forEach((element) =>
            element.removeAttribute("disabled"),
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
});
