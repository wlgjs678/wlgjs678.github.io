window.onload = main;

function main() {
    // Add an event listener for scroll events
    window.addEventListener('scroll', handleScroll);
}

// Function to change the active section
function changeSection(sectionId) {
    // Remove the 'active' class from all links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
}

// Function to handle scroll events
function handleScroll() {
    // Get the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Check each section to determine which one is in view
    document.querySelectorAll('section').forEach(section => {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // The section is in view, update the active link
            changeSection(section.id);
        }
    });
}