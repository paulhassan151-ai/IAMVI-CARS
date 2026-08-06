// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to IAMVI CARS");
});

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Booking form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        alert(
            "Thank you for choosing IAMVI CARS!\n\nYour test drive request has been received. Our team will contact you shortly."
        );

        form.reset();
    });
}

// View Details buttons
document.querySelectorAll(".car-card button").forEach(button => {
    button.addEventListener("click", function() {
        alert("Vehicle details feature will be available in the next update.");
    });
});
