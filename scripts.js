// scripts.js - Bean Boutique Home Page

// Modal Popup for First-Time Visitors (Discount for Email Signup)
window.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('beanboutiqueModalShown')) {
        var modal = document.getElementById('signup-modal');
        if (modal) {
            modal.style.display = 'block';
        }
        localStorage.setItem('beanboutiqueModalShown', 'true');
    }
    var closeBtn = document.getElementById('close-modal');
    if (closeBtn) {
        closeBtn.onclick = function() {
            document.getElementById('signup-modal').style.display = 'none';
        };
    }
    var signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Thank you for signing up! Your discount code is: BEAN10');
            document.getElementById('signup-modal').style.display = 'none';
        };
    }
});

// Slideshow Logic
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}
// Auto slideshow
setInterval(function() { plusSlides(1); }, 5000);

// Expose plusSlides to global for HTML onclick
window.plusSlides = plusSlides; 