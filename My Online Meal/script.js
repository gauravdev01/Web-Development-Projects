document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggle for mobile view
    const navbar = document.querySelector('#navbar');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Order Now button click event
    const orderButton = document.querySelector('#home .btn');
    orderButton.addEventListener('click', () => {
        alert('Order Now feature coming soon!');
    });

    // Contact form submission
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // You can add your form submission logic here (e.g., AJAX request)
        alert('Form submission coming soon!');
        // Clear form fields if needed
        clearFormFields();
    });

    function clearFormFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
    }
});
