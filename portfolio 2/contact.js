// Initialize contact storage in localStorage
const contactStorage = {
  initialize() {
    if (!localStorage.getItem("contacts")) {
      localStorage.setItem("contacts", JSON.stringify([]));
    }
  },

  getContacts() {
    return JSON.parse(localStorage.getItem("contacts"));
  },

  addContact(contact) {
    const contacts = this.getContacts();
    contacts.push({
      ...contact,
      id: Date.now(),
      date: new Date().toISOString(),
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
  },
};

// Form handling
document.addEventListener("DOMContentLoaded", () => {
  contactStorage.initialize();

  const form = document.querySelector("form");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Disable submit button during processing
    submitButton.disabled = true;

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      // Store contact in localStorage
      contactStorage.addContact(formData);

      // Show success message
      const successMessage = document.createElement("div");
      successMessage.className =
        "p-4 mb-4 text-green-500 bg-green-100/10 rounded-lg";
      successMessage.textContent = "Message sent successfully!";
      form.insertBefore(successMessage, form.firstChild);

      // Reset form
      form.reset();

      // Remove success message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    } catch (error) {
      console.error("Error storing contact:", error);

      // Show error message
      const errorMessage = document.createElement("div");
      errorMessage.className = "p-4 mb-4 text-red-500 bg-red-100/10 rounded-lg";
      errorMessage.textContent = "Failed to send message. Please try again.";
      form.insertBefore(errorMessage, form.firstChild);

      // Remove error message after 3 seconds
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
    }

    // Re-enable submit button
    submitButton.disabled = false;
  });
});


