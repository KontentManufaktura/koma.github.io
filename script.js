function scrollToContact() {
    const contactSection = document.getElementById('contact');
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Use .navbar to select the navbar
    window.scrollTo({
        top: contactSection.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
    const contactLink = document.querySelector('.nav-link[onclick="scrollToContact()"]');
    if (contactLink) {
        contactLink.addEventListener('click', scrollToContact);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    loadcontact();
});


document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content');
    const loadPage1Button = document.getElementById('loadServices');
    const loadPage2Button = document.getElementById('loadTeam');
    const loadHomePage = document.getElementById('navbarLogo');



    // // Load initial content
    loadContent('home.html');

    // Button click event handlers
    loadPage1Button.addEventListener('click', function () {
        loadContent('services.html');
    });

    loadPage2Button.addEventListener('click', function () {
        loadContent('team.html');
    });

    loadHomePage.addEventListener('click', function () {
        loadContent('home.html');
    });

    // Function to load content from an external HTML file
    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentContainer.innerHTML = data;
                scrollToTop();
            });
    }
});

function scrollToTop() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the navbar
    window.scrollTo({
        top: -navbarHeight,
        behavior: 'smooth'
    });
}
document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
    const contactLink = document.querySelector('.nav-link[onclick="scrollToContact()"]');
    if (contactLink) {
        contactLink.addEventListener('click', scrollToContact);
    }

    // Add event listeners to the buttons to scroll to the top
    const loadPage1Button = document.getElementById('loadServices');
    const loadPage2Button = document.getElementById('loadTeam');
    const loadHomePage = document.getElementById('navbarLogo');

    loadPage1Button.addEventListener('click', scrollToTop);
    loadPage2Button.addEventListener('click', scrollToTop);
    loadHomePage.addEventListener('click', scrollToTop);
});



document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    window.addEventListener('scroll', function () {
        // Check if the collapsible navbar is open
        if (navbarCollapse.classList.contains('show')) {
            // Close the collapsible navbar
            navbarCollapse.classList.remove('show');
        }
    });
});