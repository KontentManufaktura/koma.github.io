function scrollToContact() {
    const contactSection = document.getElementById('contact');
    const navbarHeight = document.querySelector('.navbar').offsetHeight; 
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




document.addEventListener("DOMContentLoaded", function () {
    const socialImage = document.getElementById("socialImage");

    socialImage.addEventListener("click", function () {
        fetch("services.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("content").innerHTML = data;
            })
            .catch(error => console.error(error));
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content');
    const loadPage1Button = document.getElementById('loadServices');
    const loadPage2Button = document.getElementById('loadTeam');
    const loadHomePage = document.getElementById('navbarLogo');



    document.getElementById('content').addEventListener('click', function (event) {
        if (event.target.id === 'socialImage') {
            loadContent('services.html', 'content');
        }
    });

    document.getElementById('content').addEventListener('click', function (event) {
        if (event.target.id === 'photoImage') {
            loadContent('services.html', 'content');
        }
    });

    document.getElementById('content').addEventListener('click', function (event) {
        if (event.target.id === 'videoImage') {
            loadContent('services.html', 'content');
        }
    });

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
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
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

