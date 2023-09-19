// Add event listener to the donate button
const donateButton = document.getElementById("donate-button");

donateButton.addEventListener("click", () => {
    // Redirect the user to the payment page
    window.location.href = "payment.html";
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
