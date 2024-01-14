
// Pop up form on home page //
function togglePopup() {
    var popup = document.getElementById("popupForm");
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  }

  // Checks whether all required input fields in the form are filled. If they are, it enables the submit button; otherwise, it keeps it disabled //
  document.addEventListener("input", function () {
    var submitButton = document.getElementById("submitButton");
    var requiredInputs = document.querySelectorAll("#popupForm [required]");
    var allFilled = Array.from(requiredInputs).every(function (input) {
      return input.value.trim() !== "";
    });

    submitButton.disabled = !allFilled;
  });