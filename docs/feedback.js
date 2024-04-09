// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the feedback form element by its ID
    var feedbackForm = document.getElementById('feedbackForm');

    // Add an event listener for the 'submit' event on the feedback form
    feedbackForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior to handle submission with JavaScript
        event.preventDefault();
        
        // Get the value of the 'name', 'rating', and 'message' fields from the form, trimming any whitespace
        var name = document.getElementById('name').value.trim();
        var rating = document.getElementById('rating').value;
        var message = document.getElementById('message').value.trim();
        
        // Check if all fields have values before proceeding
        if (name && rating && message) {
            // If valid, get the container where testimonials will be displayed
            var testimonialsDisplay = document.getElementById('testimonialsDisplay');
            
            // Create a new div element to hold the individual testimonial
            var testimonialCard = document.createElement('div');
            // Add a class to the new div for styling
            testimonialCard.classList.add('testimonial-card');
            // Set the innerHTML of the div to include the message and the user's name and rating
            testimonialCard.innerHTML = `
                <p>${message}</p>
                <span>${name}, ${rating} stars</span>
            `;
            // Append the new testimonial card to the testimonials display container
            testimonialsDisplay.appendChild(testimonialCard);
            
            // Reset the form fields to empty after successful submission
            feedbackForm.reset();

            // Show an alert to thank the user for their feedback
            alert('Thank you for your feedback!');
        } else {
            // If any field is empty, alert the user to fill in all the fields
            alert('Please fill in all the fields.');
        }
    });
});
