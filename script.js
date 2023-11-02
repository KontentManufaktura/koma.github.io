
//================== BUTTONS,LOAD,REDIRECT ===============================
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    window.scrollTo({
        top: contactSection.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}
function handleLinkClick(event, targetPage) {
    event.preventDefault(); // Prevent the default link behavior (page reload)

    document.body.classList.add('fade-out');

    // After a short delay, navigate to the target page
    setTimeout(function() {
        window.location.href = targetPage;
    }, 1000); // Adjust the delay (in milliseconds) as needed
}

function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            const loadPage1Button = document.getElementById('loadServices');
            const loadPage2Button = document.getElementById('loadTeam');
            const loadHomePage = document.getElementById('navbarLogo');

            // Function to handle link clicks and trigger the crossfade effect
    

            loadPage1Button.addEventListener('click', function (event) {
                handleLinkClick(event, 'services.html'); // Redirect to 'services.html'
            });

            loadPage2Button.addEventListener('click', function (event) {
                handleLinkClick(event, 'team.html'); // Redirect to 'team.html'
            });

            loadHomePage.addEventListener('click', function (event) {
                handleLinkClick(event, 'index.html'); // Redirect to 'index.html'
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Add an event listener to trigger the fade-in animation when the page is fully loaded
window.addEventListener("load", function() {
    document.body.classList.add("fade-in");
});



window.addEventListener('DOMContentLoaded', loadNavbar);

// Function to load contact.html into the contact-placeholder div
function loadContact() {
    fetch('contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading contact content:', error));
}
window.addEventListener('DOMContentLoaded', loadContact);




document.addEventListener('click', function (event) {
    if (
        event.target.classList.contains('homePageServicesImg') ||
        event.target.classList.contains('serviceOverlay') ||
        (event.target.parentElement && event.target.parentElement.classList.contains('serviceOverlay'))
    ) {
        handleLinkClick(event, 'services.html'); // Redirect to 'services.html'
    } else if (event.target.classList.contains('homePageTeamImg') ||
        event.target.classList.contains('names') ||
        event.target.classList.contains('roles')) {
            handleLinkClick(event, 'team.html'); // Redirect to 'team.html'
        }
});


//============================= CAROUSELS =======================================


const carousel1img = [
    'img/socialmediaref/aktivitasnovelo.jpg',
    'img/socialmediaref/aktivitasnovelo1.jpg',
    'img/socialmediaref/aktivitasnovelo2.jpg',
    'img/socialmediaref/aktivitasnovelo3.jpg',
    'img/socialmediaref/aktivitasnovelo4.jpg',
    'img/socialmediaref/aktivitasnovelo6.jpg',
    'img/socialmediaref/aktivitasnovelo7.jpg',
    'img/socialmediaref/aktivitasnovelo8.jpg',
    'img/socialmediaref/aktivitasnovelo9.jpg',
    'img/socialmediaref/aktivitasnovelo10.jpg',
    'img/socialmediaref/aktualitas.jpg',
    'img/socialmediaref/aktualitas1.jpg',
    'img/socialmediaref/aktualitas2.jpg',
    'img/socialmediaref/aktualitas3.jpg',
    'img/socialmediaref/aktualitas4.jpg',
    'img/socialmediaref/grapich.jpg',
    'img/socialmediaref/IG.jpg',
    'img/socialmediaref/kovetoosztonzes.jpg',
    'img/socialmediaref/kovetoosztonzes1.jpg',
    'img/socialmediaref/kovetoosztonzes2.jpg',
    'img/socialmediaref/kreativ_szovegiras.jpg',
    'img/socialmediaref/kreativ_szovegiras1.jpg',
    'img/socialmediaref/kreativ_szovegiras2.jpg',
    'img/socialmediaref/kreativ_szovegiras3.jpg',
    'img/socialmediaref/kreativ_szovegiras4.jpg',
    'img/socialmediaref/nyeremenyjatek.jpg',
    'img/socialmediaref/nyeremenyjatek1.jpg',
    'img/socialmediaref/nyeremenyjatek2.jpg',
    'img/socialmediaref/nyeremenyjatek3.jpg',
    'img/socialmediaref/nyeremenyjatek4.jpg'
];

const carousel2videos=[
    '81z1RGtGGT4',
    'nKIwGJWFRVE',
    'Fxg-DtftwEI'
]

const carousel3img = [
    'img/photoref/fotó_referencia_1.jpg',
    'img/photoref/fotó_referencia_2.jpg',
    'img/photoref/fotó_referencia_3.jpg',
    'img/photoref/fotó_referencia_4.jpg',
    'img/photoref/fotó_referencia_5.jpg',
];

const carouselImages = [
    carousel1img,
    carousel2videos,
    carousel3img
];



function initCarousel(carouselId, mediaArray) {
    const carousel = document.querySelector(carouselId);

    const indicators = carousel.querySelector(".carousel-indicators");
    if (indicators) {
        indicators.innerHTML = "";
    }


    mediaArray.forEach((media, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
            carouselItem.classList.add("active");
        }

        if (media.includes("youtube.com")) {
            const videoContainer = document.createElement("div");
            videoContainer.classList.add("embed-responsive", "embed-responsive-16by9");
            videoContainer.innerHTML = `<iframe class="embed-responsive-item" src="${media}" allowfullscreen></iframe>`;
            carouselItem.appendChild(videoContainer);
        } else {
            const image = document.createElement("img");
            image.src = media;
            image.classList.add("d-block", "w-100");
            carouselItem.appendChild(image);
        }

        if (indicators) {
            const indicator = document.createElement("li");
            indicator.setAttribute("data-target", carouselId);
            indicator.setAttribute("data-slide-to", index);
            if (index === 0) {
                indicator.classList.add("active");
            }
            indicators.appendChild(indicator);
        }

        carousel.querySelector(".carousel-inner").appendChild(carouselItem);
    });
}

function updateModalContent(imageIndex) {
    var modal = $("#modal"); // Default modal element
    const carousel = document.querySelector("#carousel");
    const imageCarousel = document.querySelector("#imageCarousel");
    const indicators = carousel.querySelector(".carousel-indicators");

    // Hide carousel2 when showing other services
    if (imageIndex !== 1) {
        $("#carousel2").addClass("d-none");
        $(".carousel2-controls").hide();
    } else {
        $("#carousel2").removeClass("d-none");
        $(".carousel2-controls").show();
    }

    imageCarousel.innerHTML = "";
    if (indicators) {
        indicators.innerHTML = "";
    }

    if (imageIndex === 1) {
        const carousel1Controls = document.querySelectorAll('.carousel1-controls');
        carousel1Controls.forEach(control => {
            control.style.visibility = 'hidden';
        });
        const carousel2Controls = document.querySelectorAll('.carousel2-controls');
        carousel2Controls.forEach(control => {
            control.style.visibility = 'visible';
        });
        modal = $("#modal2"); 
        initCarousel("#carousel2", carousel2videos.map(videoId => `https://www.youtube.com/embed/${videoId}`));
    } else {
        const carousel2Controls = document.querySelectorAll('.carousel2-controls');
        carousel2Controls.forEach(control => {
            control.style.visibility = 'hidden';
        });
        const carousel1Controls = document.querySelectorAll('.carousel1-controls');
        carousel1Controls.forEach(control => {
            control.style.visibility = 'visible';
        });
        
        initCarousel("#carousel", carouselImages[imageIndex]);
    }

    modal.modal("show");
}


const serviceLinks = document.querySelectorAll('a#modal2button');
serviceLinks.forEach((link, index) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        if (index === 2) {
            updateModalContent(1);
        } else if (index === 1) {
            updateModalContent(2);
        } else {
            updateModalContent(index);
        }
    });
});

$('.modal').on('shown.bs.modal', function () {
    var memory = $(this).html();
    
    $('.modal').on('hidden.bs.modal', function () {
        $('#imageCarousel2').html('');
    });
    
});


$('#carousel2').on('slid.bs.carousel', function () {
    var memory = $(this).html();
    $(this).html(memory);

    

});




//=================== LANG SETTINGS ========================
var languages = {
    en: {
        //navbar
        buttonText: "hu",
        loadServices: "services",
        loadTeam: "about us",
        contactButon: "contact",

        //contactform
        salesText: "If you also want to reach your target audience with content that triggers interaction, let's start working together. Write to us in the form below how we can help your business, and we will get back to you within 3 working days.",
        getInContact: "Contact us:",
        nameLabel: "Name:",
        telLabel: "Phone:",
        msgLabel: "Message:",
        interestsText: "Interests:",
        socialLabel: "Social media management",
        videoLabel: "Photo",
        photoLabel: "Video",
        contactUsTel: "Phone:",
        submitButton: "Send",


        //homepage
        greetingText: "Hello, we are KOMA. Three creative freelancers with numerous years of creative agency experience behind us have formed a team to deliver your brand's messages on social media with truly creative multimedia content and advertising campaigns. Our mission is to demonstrate that with honesty and authenticity, a new direction can be achieved for everyone in the world of marketing.",
        teamText: "team",
        edmondRole: "Social media manager",
        ingridRole: "Project manager",
        gergoRole: "Grapich designer, video producer",
        servicesText: "services",
        socialServiceText: "Social media management",
        photoServiceText: "Photography",
        videoServiceText: "Film and video production",

        //services
        servicesSubTitle: "services",
        teamTextServices: "Social media is part of our daily lives, but for us it's also our job and hobby. With our multimedia content production, our goal is to make our partners visible and their messages reach the right audience. Get to know our previous works by clicking on the pictures and let's start a new project together!",
        services1title: "Social media management",
        servies1text: "Management of social media platforms: creating a communication strategy, writing and producing posts, designing graphic and branding elements, coordinating online campaigns, monitoring results, and managing comments/messages.",
        services2title: "Film and video production",
        services2text: "Image videos, short films, product presentations movies - from ideation to full implementation: commercials, image films, TikTok videos, short films, feature films, live stream (FB, YouTube, IG), drone films",
        services3title: "Photography",
        services3text: "Photography making with our team - from idea to professional use: product photography, location photography, food photography, event photography, workplace photography, drone photography, portrait photography, team photography",
        referencetext1: "Click for references",
        referencetext2: "Click for references",
        referencetext3: "Click for references",


        //team
        teamsubTitle: "about us",
        teamTextAboutUs: "Thanks to so many coincidences, our team came together, and we started our joint work in 2020. When we founded KOMA, we pooled our knowledge, set common goals, and started to implement our plans. The field of social media has been part of our daily work for many years, and we supplement the task of video production as well. We have participated in various projects in the past, and we apply our agency experience to the best possible advantage. Fortunately, our interests are diverse, and every day, we complement each other with our knowledge to get the most out of our assignments. With our projects, the goal is to provide creative content to our customers, as well as create value and gain as much interaction as possible from the target audience.",
        edmondTeamRole: "Social media manager",
        edmondTeamText: "As a social media manager, my goal is to produce fun, but also result-oriented content. I have spent several years working at creative agencies and gained valuable experience in campaign planning, copywriting, advertising, and community management. I studied as a director and screenwriter at the Werk Academy's film school. I primarily managed the online presence of hospitality establishments, such as hotels and restaurants, but I also directed short films and wrote scripts for branding videos.",
        ingridTeamRole: "Project manager",
        ingridTextTeam: "As a project manager and copywriter, it's important to me to create value with our team. Not only to reach users with our content but to achieve interaction through it. I have worked with local small businesses and global brands, ranging from household appliances to wristwatches, so it's safe to say I've worked on almost everything. However, my heart is closest to culture and hospitality, and I'm also willing to stand up for social causes; I volunteered for several years, for example.",
        gergoTeamRole: "Grapich designer, video producer",
        gergoTextTeam: "I am responsible for the visual aspect of posts to ensure they align with the brand identity and carry the practical aspects of video projects on my shoulders, from planning to post-production. I studied at Werk Academy's film school, now finishing at MOME Media Design. My experiences include designing and executing installations, creating music videos, producing promotional campaigns for the Hungarian Orienteering Federation, live visual performances at techno events, directing shorts/image videos, and so on."

    },
    hu: {
        //navbar
        buttonText: "en",
        loadServices: "szolgáltatások",
        loadTeam: "rólunk",
        contactButon: "kapcsolat",

        //contactform
        salesText: "Ha te is szeretnéd elérni a célközönséged olyan tartalmakkal, amelyek interakciót váltanak ki, akkor kezdjük el a közös munkát. Írd meg nekünk az alábbi űrlapon, hogy miben tudunk segíteni a vállalkozásodnak és mi 3 munkanapon belül visszajelzünk.",
        getInContact: "Lépj velünk kapcsolatba!",
        nameLabel: "Név:",
        telLabel: "Telefonszám:",
        msgLabel: "Üzenet:",
        interestsText: "Érdeklődési kör:",
        socialLabel: "Közösségi média menedzsment",
        videoLabel: "Fotózás",
        photoLabel: "Film- és videógyártás",
        contactUsTel: "Telefonszám:",
        submitButton: "Küldés",

        //homepage
        greetingText: "Hello, mi vagyunk a KOMA! Három kreatív szabadúszó, többéves reklámügynökségi tapasztalattal a hátunk mögött összeálltuk egy csapatba, hogy igazán kreatív multimédiás tartalmakkal és hirdetési kampányokkal célba juttassuk a márkád üzeneteit a közösségi médiában. Küldetésünk megmutatni azt, hogy őszinteséggel, hitelességgel mindenki számára új irány érhető el a marketing világában.",
        teamText: "csapatunk",
        edmondRole: "Közösségi média menedzser",
        ingridRole: "Projekt menedzser",
        gergoRole: "Grafikus, videógyártó",
        servicesText: "szolgáltatások",
        socialServiceText: "Közösségi média menedzsment",
        photoServiceText: "Fotózás",
        videoServiceText: "Film- és videógyártás",

        //servicespage
        servicesSubTitle: "szolgáltatások",
        teamTextServices: "Mindennapjaink része a közösségi média, nekünk pedig a digitális marketing a munkánk és a hobbink is egyben. Multimédiás tartalomgyártásunkkal az a célunk, hogy partnereink láthatóvá váljanak és üzeneteik elérjék a megfelelő közönséget. Ismerd meg korábbi munkáinkat a képekre kattintva és kezdjünk bele együtt egy új projektbe! ",
        services1title: "Közösségi média menedzsment",
        servies1text: "Közösségi felületek menedzselése: kommunikációs stratégia megalkotása, szövegírás és posztok gyártása, grafikai és arculati elemek megalkotása, online kampányok koordinálása, eredmények nyomon követése, valamint kommentek/üzenetek kezelése.",
        services2title: "Filmek és videók",
        services2text: "Image videók, kisfilmek, termékbemutatók az ötleteléstől a teljes kivitelezésig: reklámfilmek, imázsfilmek, TikTok videók, rövidfilmek, játékfilmek, live stream (FB, YouTube, IG), drónvideók.",
        services3title: "Fotózás",
        services3text: "Fotózás a csapatunkkal az ötlettől a professzionális felhasználásig: termékfotózás, helyszínfotózás, ételfotózás, eseményfotózás, werkfotózás, drónfotózás, portréfotózás, csapatfotózás",
        referencetext1: "Kattints a referenciákért",
        referencetext2: "Kattints a referenciákért",
        referencetext3: "Kattints a referenciákért",


        //team
        teamsubTitle: "rólunk",
        teamTextAboutUs: "Csapatunk számos véletlennek köszönhetően sodródott össze, a közös munkánkat pedig 2020-ban kezdtük el. A KOMA megalapításakor összegyúrtuk tudásunkat, közös célokat állítottunk magunk elé és nekivágtunk megvalósítani terveinket. A social media területe sok éve mindennapi munkánk része, ezt később kiegészítettük a videókészítés feladatával. Korábban változatos projektekben vettünk részt, ügynökségi tapasztalatunkat pedig próbáljuk a lehető legelőnyösebben felhasználni. Szerencsére sokrétű az érdeklődési körünk, tudásunkkal igyekszünk kiegészíteni egymást és a maximálisat kihozni a megbízásainkból. Projektjeink által a célunk, hogy ne csupán kreatív tartalmakkal lássuk el ügyfeleinket, hanem értéket is teremtsünk és minél több interakciót váltsunk ki az adott célközönségből.",
        edmondTeamRole: "Közösségi média menedzser",
        edmondTeamText: "Közösségi média menedzserként célom, hogy szórakoztató, mégis eredményorientált tartalmakat állítsak elő. Több évet töltöttem el kreatív ügynökségeknél, ahol értékes tapasztalatokat szereztem kampánytervezésben, szövegírásban, hirdetéskezelésben és community managementben. A Werk Akadémia filmes szakján tanultam rendezőként és forgatókönyvíróként. Leginkább vendéglátóegységek, például hotelek és éttermek oldalait menedzseltem, de rendeztem rövidfilmeket és forgatókönyveket írtam imázsfilmekhez.",
        ingridTeamRole: "Projekt menedzser",
        ingridTextTeam: "Projekt menedzserként és szövegíróként fontos számomra, hogy csapatunkkal értéket hozzunk létre, amelyekkel nemcsak eljussunk tartalmainkkal a felhasználókhoz, hanem interakciót érjünk el általa. Dolgoztam hazai kisvállalkozásokkal és világmárkákkal egyaránt, háztartási gépektől kezdve karórákig, tehát szinte tényleg mindenen. A szívemhez mégis legközelebb a kultúra és a vendéglátás áll, de társadalmi ügyek mellett is szívesen kiállok, több évig önkénteskedtem például.",
        gergoTeamRole: "Grafikus, videógyártó",
        gergoTextTeam: "Én felelek a posztok kinézetéért, figyelek arra, hogy minden klappoljon a megrendelő arculatával, és nem utolsósorban, én viszem a hátamon a videós projektek gyakorlati részét, a tervezéstől az utómunkáig. Korábban a Werk Akadémia filmes szakára jártam, most a MOME Média Design utolsó éves hallgatója vagyok. Tapasztalataim igen sokszínűek: installációk tervezése és kivitelezése, videóklip-készítés, a Magyar Tájékozódási Futó Szövetség videós népszerűsítő kampányai, live vizuál techno bulin, rövid- és imázsfilmrendezés stb. "
    }
};





function updatePageContent(language) {
    var languageObject = languages[language];
    for (var key in languageObject) {
      var translatedText = languageObject[key];
      var element = document.getElementById(key);
      if (element) {
        element.textContent = translatedText;
      }
    }
  }

  var currentLanguage = "hu";
  
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hu' : 'en';
    document.getElementById("i18nbutton").textContent = languages[currentLanguage].buttonText;
    updatePageContent(currentLanguage);

    // Store the current language preference in localStorage
    localStorage.setItem('currentLanguage', currentLanguage);
}


document.addEventListener('DOMContentLoaded', function () {
    const storedLanguage = localStorage.getItem('currentLanguage');
    if (storedLanguage && languages[storedLanguage]) {
        currentLanguage = storedLanguage;
       //document.getElementById('i18nbutton').textContent = languages[currentLanguage].buttonText;
        updatePageContent(currentLanguage);
    }
    
});

setTimeout(function() {
    // Check if a language preference is stored in local storage
    const storedLanguage = localStorage.getItem('currentLanguage');
    if (storedLanguage && languages[storedLanguage]) {
        currentLanguage = storedLanguage;
        document.getElementById('i18nbutton').textContent = languages[currentLanguage].buttonText;
        updatePageContent(currentLanguage);
    }
}, 50); // Add a 1000ms (1 second) delay

