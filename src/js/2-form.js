
const formData = {
    email: "",
    message: "",
};


const feedbackForm = document.querySelector(".feedback-form");
window.addEventListener("DOMContentLoaded", () => {
   const savedData = localStorage.getItem("feedback-form-state");
   if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    feedbackForm.email.value = formData.email;
    feedbackForm.message.value = formData.message;
   }
});

feedbackForm.addEventListener("input", (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    formData[fieldName] = fieldValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (feedbackForm.email.value.trim() === "" || feedbackForm.message.value.trim() === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    feedbackForm.reset();
});

