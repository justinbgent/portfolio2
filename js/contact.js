// Contact Form Email Submission using EmailJS
document.addEventListener('DOMContentLoaded', function () {
    // EmailJS configuration - YOU NEED TO UPDATE THESE VALUES
    // Get these from https://www.emailjs.com/ after creating an account
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

    // Initialize EmailJS with public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    const emailInput = document.getElementById('email-input');
    const rightArrowIcon = document.getElementById('right-arrow-icon');
    const inputWrapper = document.querySelector('.input-wrapper');

    // Function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to show feedback message
    function showFeedback(message, isError = false) {
        // Remove existing feedback if any
        const existingFeedback = document.getElementById('form-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Create feedback element
        const feedback = document.createElement('p');
        feedback.id = 'form-feedback';
        feedback.textContent = message;
        feedback.style.cssText = `
            position: relative;
            width: 100%;
            color: ${isError ? 'rgba(255, 100, 100, 1)' : 'rgba(100, 255, 100, 1)'};
            font-size: 0.875rem;
            margin-top: 0.5rem;
            margin-bottom: 0;
        `;

        // Insert feedback after the input wrapper
        inputWrapper.parentNode.insertBefore(feedback, inputWrapper.nextSibling);

        // Remove feedback after 5 seconds
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.remove();
            }
        }, 5000);
    }

    // Function to handle form submission
    function handleSubmit() {
        const email = emailInput.textContent.trim();

        // Validate email
        if (!email || email === 'Enter your email...') {
            showFeedback('Please enter a valid email address', true);
            return;
        }

        if (!isValidEmail(email)) {
            showFeedback('Please enter a valid email address', true);
            return;
        }

        // Check if EmailJS is loaded
        if (typeof emailjs === 'undefined') {
            showFeedback('Email service not loaded. Please check your configuration.', true);
            return;
        }

        // Show loading state
        rightArrowIcon.style.opacity = '0.5';
        rightArrowIcon.style.cursor = 'wait';

        // Prepare email parameters
        const templateParams = {
            from_email: email,
            to_email: 'justinbgent@gmail.com', // Your email address
            message: `New contact form submission from: ${email}`,
            reply_to: email
        };

        // Send email using EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(function (response) {
                // Success
                showFeedback('Thank you! Your email, ' + email + ', was received.', false);
                emailInput.textContent = 'Enter your email...';
                rightArrowIcon.style.opacity = '1';
                rightArrowIcon.style.cursor = 'pointer';
            }, function (error) {
                // Error
                console.error('EmailJS Error:', error);
                showFeedback('Failed to send message. Please try again later.', true);
                rightArrowIcon.style.opacity = '1';
                rightArrowIcon.style.cursor = 'pointer';
            });
    }

    // Add click handler to right arrow icon
    if (rightArrowIcon) {
        rightArrowIcon.style.cursor = 'pointer';
        rightArrowIcon.addEventListener('click', handleSubmit);
    }

    // Add Enter key support
    if (emailInput) {
        emailInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
            }
        });

        // Handle placeholder behavior
        emailInput.addEventListener('focus', function () {
            if (this.textContent === 'Enter your email...') {
                this.textContent = '';
            }
        });

        emailInput.addEventListener('blur', function () {
            if (this.textContent.trim() === '') {
                this.textContent = 'Enter your email...';
            }
        });
    }
});

