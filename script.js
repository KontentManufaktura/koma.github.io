function scrollToServices() {
    const servicesSection = document.getElementById('services');
    const navbarHeight = document.querySelector('.navbar-content').offsetHeight;
    window.scrollTo({
        top: servicesSection.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}

function scrollToTeam() {
    const teamSection = document.getElementById('team');
    const navbarHeight = document.querySelector('.navbar-content').offsetHeight;
    window.scrollTo({
        top: teamSection.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    const navbarHeight = document.querySelector('.navbar-content').offsetHeight;
    window.scrollTo({
        top: contactSection.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}
