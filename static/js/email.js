/* Function for the contact form to send an email */

function sendMail(contactForm) {
    emailjs.send("service_7ead7y8", "discover_sydney", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "discover_sydney_feedback": contactForm.message.value
    })
        .then(
            function (response) {
                document.getElementById("myForm").reset();
                var popup = document.getElementById("myPopup");
                popup.classList.toggle("show");
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}