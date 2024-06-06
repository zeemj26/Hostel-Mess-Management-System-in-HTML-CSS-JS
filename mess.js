// JavaScript for the Hostel Mess Management System

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var meal = document.getElementById('meal').value;
    var date = document.getElementById('date').value;
    var name = document.getElementById('name').value;

    alert('Meal booked successfully!\n' + 'Name: ' + name + '\nMeal: ' + meal + '\nDate: ' + date);
});

// Feedback Form Submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var feedback = document.getElementById('feedback').value;

    alert('Feedback submitted successfully!\n' + 'Name: ' + name + '\nFeedback: ' + feedback);
});

// Image Carousel (from the existing script)
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
}
