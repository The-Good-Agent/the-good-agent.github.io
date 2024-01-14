// Pop up form on home page //
function togglePopup() {
    var popupContainer = document.querySelector(".pop-up-form-container");
    popupContainer.style.display = popupContainer.style.display === "none" ? "block" : "none";

    var overlay = document.querySelector(".pop-up-overlay");
    overlay.classList.toggle("show");
}

// Checks whether all required input fields in the form are filled. If they are, it enables the submit button; otherwise, it keeps it disabled //
document.addEventListener("input", function () {
    var submitButton = document.getElementById("submitButton");
    var requiredInputs = document.querySelectorAll(".pop-up-form [required]");
    var allFilled = Array.from(requiredInputs).every(function (input) {
        return input.value.trim() !== "";
    });

    submitButton.disabled = !allFilled;
});

// New function to close the popup when clicking outside the form
function closePopup() {
    var overlay = document.querySelector(".pop-up-overlay");
    overlay.classList.remove("show");
}
