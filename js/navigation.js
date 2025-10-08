// Navigation Active State Management
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#navigation-items a');

    // Function to remove active class from all links
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Function to add active class to clicked link
    function setActiveLink(clickedLink) {
        removeActiveClass();
        clickedLink.classList.add('active');
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Only prevent default if it's not a hash link
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            setActiveLink(this);
        });
    });

    // Optional: Update active state based on scroll position
    // This requires you to have sections with IDs that match your navigation links
    function updateActiveOnScroll() {
        const sections = document.querySelectorAll('section[id], div[id]');
        const scrollPos = window.scrollY + 100; // Offset for better UX

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Find corresponding nav link
                const correspondingLink = document.querySelector(`#navigation-items a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    removeActiveClass();
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Uncomment the line below if you want scroll-based active state
    // window.addEventListener('scroll', updateActiveOnScroll);
});

// Alternative: Simple hash-based active state
// This works if your navigation links use hash fragments (#about, #work, etc.)
window.addEventListener('hashchange', function () {
    const hash = window.location.hash;
    const navLinks = document.querySelectorAll('#navigation-items a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
});
