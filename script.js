document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", validateForm);

  function validateForm(event) {
      event.preventDefault();

      let isValid = true;
      const errorMessages = document.querySelectorAll(".error-message");

      // Reset error messages
      errorMessages.forEach(msg => {
          msg.style.display = "none";
          msg.textContent = "";
      });

      // Validate name
      const name = document.getElementById("name");
      if (name.value.trim().length < 2) {
          showError(name, "Name must be at least 2 characters long");
          isValid = false;
      }

      // Validate email
      const email = document.getElementById("email");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
          showError(email, "Please enter a valid email address");
          isValid = false;
      }

      // Validate subject
      const subject = document.getElementById("subject");
      if (subject.value.trim().length < 5) {
          showError(subject, "Subject must be at least 5 characters long");
          isValid = false;
      }

      // Validate message
      const message = document.getElementById("message");
      if (message.value.trim().length < 10) {
          showError(message, "Message must be at least 10 characters long");
          isValid = false;
      }

      // Submit the form if valid
      if (isValid) {
          alert("Message sent successfully!");
          form.submit();
      }
  }

  function showError(input, message) {
      const errorElement = input.parentElement.querySelector(".error-message");
      if (errorElement) {
          errorElement.textContent = message;
          errorElement.style.display = "block";
      }
      input.focus();
  }
});
