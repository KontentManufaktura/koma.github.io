function scrollToContact() {
    const contactSection = document.getElementById('contact');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    window.scrollTo({
        top: contactSection.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    //loadNavbar();
    const contactLink = document.querySelector('.nav-link[onclick="scrollToContact()"]');
    if (contactLink) {
        contactLink.addEventListener('click', scrollToContact);
    }
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
                document.getElementById('content').innerHTML = data;
                // After loading content, call the updateContent function with the loaded page name
                updateContent(currentLanguage, page);
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
    //loadNavbar();
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



var languages = {
    en: {
        buttonText: "HUN",
        navbarServices: "Services",
        navbarAbout: "About us",
        navbarContact: "Contact",
        contactSalesText: "If you also want to reach your target audience with content that triggers interaction, let's start working together. Write to us in the form below how we can help your business, and we will get back to you within 3 working days.",
        contactGetInContactText: "Contact us:",
        contactFormName: "Name",
        contactFormTel: "Phone",
        contactFromMessage: "Message",
        contactFormInterests: "Interests",
        contactFormSocial: "Social media management",
        contactFormVideo: "Video",
        contactFormPhoto: "Photo",
        contactPageTel: "Phone",

        //homepage
        greetingTextHomePage: "Hello, we are KOMA. Three creative freelancers with numerous years of creative agency experience behind us have formed a team to deliver your brand's messages on social media with truly creative multimedia content and advertising campaigns.",
        homePageTeamText: "Team",
        homePageIngridText: "Project coordinator",
        homePageGergoText: "Graphic designer",
        homePageServicesText: "Services",
        homePageSocialServiceText: "Social media management",
        homePagePhotoServiceText: "Photography",
        homePageVideoServiceText: "Film and video production",
        submitButtonText: "Send",

        //services
        servicesSubTitle: "Services",
        servicesGreeting: "Social media is part of our daily lives, but for us it's also our job and hobby. With our multimedia content production, our goal is to make our partners visible and their messages reach the right audience.Get to know our previous works by clicking on the pictures and let's start a new project together!",
        servicesSocialtitle: "Social media management",
        servicesSocialText: "Social media is part of our daily lives, but for us it's also our job and hobby. With our multimedia content production, our goal is to make our partners visible and their messages reach the right audience.Get to know our previous works by clicking on the pictures and let's start a new project together!",
        servicesVideoTitle: "Film and video production",
        servicesVideoText: "Image videos, short films, product presentations movies - from ideation to full implementation.",
        servicesPhotoTitle: "Photography",
        servicesPhotoText: "Photography making with our team - from idea to professional use.",


        //team
        teamsubTitle: "About us",
        teamTextAboutUs: "Thanks to so many coincidences, our team came together, and we started our joint work in 2020.When we founded KOMA, we pooled our knowledge, set common goals, and started to implement our plans.The field of social media has been part of our daily work for many years, and we supplement the task of video production as well.We have participated in various projects in the past, and we apply our agency experience to the best possible advantage.Fortunately, our interests are diverse, and every day, we complement each other with our knowledge to get the most out of our assignments.With our projects, the goal is to provide creative content to our customers, as well as create value and gain as much interaction as possible from the target audience.",
        edmondTeamText: "As a social media manager, my goal is to produce fun, but also result-oriented content. I have spent several years working at creative agencies and gained valuable experience in campaign planning, copywriting, advertising, and community management. I studied as a director and screenwriter at the Werk Academy's film school. I primarily managed the online presence of hospitality establishments, such as hotels and restaurants, but I also directed short films and wrote scripts for branding videos.",
        ingridTeamRole: "Project coordinator",
        ingridTextTeam: "As a project coordinator and copywriter, it's important to me to create value with our team. Not only to reach users with our content but to achieve interaction through it. I have worked with local small businesses and global brands, ranging from household appliances to wristwatches, so it's safe to say I've worked on almost everything. However, my heart is closest to culture and hospitality, and I'm also willing to stand up for social causes; I volunteered for several years, for example.",
        gergoTeamRole: "Graphic designer",
        gergoTextTeam: "I am responsible for the visual aspect of posts to ensure they align with the brand identity and handle the practical aspects of video projects from pre- to post-production. I studied at Werk Academy's film school, now finishing at MOME Media Design. My experiences include designing and executing installations, creating music videos, producing promotional campaigns for the Hungarian Orienteering Federation, live visual performances at techno events, directing shorts/image videos, and so on."

    },
    hu: {
        buttonText: "EN",
        navbarServices: "Szolgáltatások",
        navbarAbout: "Rólunk",
        navbarContact: "Kapcsolat",
        contactSalesText: "Ha te is szeretnéd elérni a célközönséged olyan tartalmakkal, amelyek interakciót váltanak ki, akkor kezdjük el a közös munkát. Írd meg nekünk az alábbi űrlapon, hogy miben tudunk segíteni a vállalkozásodnak és mi 3 munkanapon belül visszajelzünk.",
        contactGetInContactText: "Lépj velünk kapcsolatba!",
        contactFormName: "Név",
        contactFormTel: "Telefonszám",
        contactFromMessage: "Üzenet",
        contactFormInterests: "Érdeklődési kör",
        contactFormSocial: "Közösségi média menedzsment",
        contactFormVideo: "Videózás",
        contactFormPhoto: "Fotózás",
        contactPageTel: "Telefonszám",
        submitButtonText: "Küldés",

        //homepage
        greetingTextHomePage: "Hello, mi vagyunk a KOMA! Három kreatív szabadúszó, többéves reklámügynökségi tapasztalattal a hátunk mögött összeálltuk egy csapatba, hogy igazán kreatív multimédiás tartalmakkal és hirdetési kampányokkal célba juttassuk a márkád üzeneteit a közösségi médiában.",
        homePageTeamText: "Csapat",
        homePageIngridText: "Projekt koordinátor",
        homePageGergoText: "Grafikus",
        homePageServicesText: "Szolgáltatások",
        homePageSocialServiceText: "Közösségi média menedzsment",
        homePagePhotoServiceText: "Fotózás",
        homePageVideoServiceText: "Film- és videógyártás",

        //servicespage
        servicesSubTitle: "Szolgáltatások",
        servicesGreeting: "Mindennapjaink része a közösségi média, nekünk pedig a digitális marketing a munkánk és a hobbink is egyben. Multimédiás tartalomgyártásunkkal az a célunk, hogy partnereink láthatóvá váljanak és üzeneteik elérjék a megfelelő közönséget.Ismerd meg korábbi munkáinkat a képekre kattintva és kezdjünk bele együtt egy új projektbe!",
        servicesSocialtitle: "Közösségi média menedzsment",
        servicesSocialText: "A közösségi felületek menedzselése: kommunikációs stratégia megalkotása, szövegírás és posztok gyártása, grafikai és arculati elemek megalkotása, online kampányok koordinálása, eredmények nyomon követése, valamint kommentek/üzenetek kezelése.",
        servicesVideoTitle: "Filmek és videók",
        servicesVideoText: "Image videók, kisfilmek, termékbemutatók az ötleteléstől a teljes kivitelezésig.",
        servicesPhotoTitle: "Fotózás",
        servicesPhotoText: "Fotózás a csapatunkkal az ötlettől a professzionális felhasználásig.",


        //team
        teamsubTitle: "Rólunk",
        teamTextAboutUs: "Csapatunk számos véletlennek köszönhetően sodródott össze, a közös munkánkat pedig 2020-ban kezdtük el. A KOMA megalapításakor összegyúrtuk tudásunkat, közös célokat állítottunk magunk elé és nekivágtunk megvalósítani terveinket. A social media területe sok éve mindennapi munkánk része, ezt később kiegészítettük a videókészítés feladatával. Korábban változatos projektekben vettünk részt, ügynökségi tapasztalatunkat pedig próbáljuk a lehető legelőnyösebben felhasználni. Szerencsére sokrétű az érdeklődési körünk, tudásunkkal igyekszünk kiegészíteni egymást és a maximálisat kihozni a megbízásainkból.Projektjeink által a célunk, hogy ne csupán kreatív tartalmakkal lássuk el ügyfeleinket, hanem értéket is teremtsünk és minél több interakciót váltsunk ki az adott célközönségből.",
        edmondTeamText: "Közösségi média menedzserként célom, hogy szórakoztató, mégis eredményorientált tartalmakat állítsak elő. Több évet töltöttem el kreatív ügynökségeknél, ahol értékes tapasztalatokat szereztem kampánytervezésben, szövegírásban, hirdetéskezelésben és community managementben. A Werk Akadémia filmes szakján tanultam rendezőként és forgatókönyvíróként. Leginkább vendéglátóegységek, például hotelek és éttermek oldalait menedzseltem, de rendeztem rövidfilmeket és forgatókönyveket írtam imázsfilmekhez.",
        ingridTeamRole: "Projekt koordinátor",
        ingridTextTeam: "Projekt koordinátorként és szövegíróként fontos számomra, hogy csapatunkkal értéket hozzunk létre, amelyekkel nemcsak eljussunk tartalmainkkal a felhasználókhoz, hanem interakciót érjünk el általa. Dolgoztam hazai kisvállalkozásokkal és világmárkákkal egyaránt, háztartási gépektől kezdve karórákig, tehát szinte tényleg mindenen. A szívemhez mégis legközelebb a kultúra és a vendéglátás áll, de társadalmi ügyek mellett is szívesen kiállok, több évig önkénteskedtem például.",
        gergoTeamRole: "Grafikus",
        gergoTextTeam: "Én felelek a posztok kinézetéért, hogy minden klappoljon a megrendelő arculatával és én viszem a videós projektek gyakorlati részét a forgatás megtervezésétől az utómunkáig. Korábban a Werk Akadémia filmes szakára jártam, most a MOME Média Design utolsó éves hallgatója vagyok. Tapasztalataim igen sokszínűek: installációk tervezése és kivitelezése, videóklip-készítés, a Magyar Tájékozódási Futó Szövetség videós népszerűsítő kampányai, live vizuál techno bulin, rövid- és imázsfilmrendezés stb. "
    }
};



var currentLanguage = 'hu'; // Change this to 'en'
function toggleLanguage() {
    // Toggle the current language
    currentLanguage = currentLanguage === 'en' ? 'hu' : 'en';

    // Update the button label
    document.getElementById("i18nbutton").textContent = languages[currentLanguage].buttonText;

    // Determine the currently displayed page based on the content of the #content element
    var currentPage = getCurrentPage();

    // Call the updateContent function to update the text on the currently displayed page
    updateContent(currentLanguage, currentPage);
}

// Function to determine the current page based on the content of #content
function getCurrentPage() {
    var contentElement = document.getElementById("content");
    var contentText = contentElement.textContent;

    // Check if the content includes both "Rólunk" and "About us" text
    if (contentText.includes("Hello, mi vagyunk a KOMA!") || contentText.includes("Hello, we are KOMA.")) {
        return "home.html";
    } else if (contentText.includes("Rólunk") || contentText.includes("About us")) {
        return "team.html";
    } else if (contentText.includes("Services") || contentText.includes("Szolgáltatások")) {
        return "services.html";
    } else {
        // Default to the home page if none of the page contents match
        return "home.html";
    }
}

var elementsToTranslate = {
    "i18nbutton": "buttonText",
    "loadServices": "navbarServices",
    "loadTeam": "navbarAbout",
    "contactButon": "navbarContact",
    "salesText": "contactSalesText",
    "getInContact": "contactGetInContactText",
    "nameLabel": "contactFormName",
    "telLabel": "contactFormTel",
    "msgLabel": "contactFromMessage",
    "interestsText": "contactFormInterests",
    "socialLabel": "contactFormSocial",
    "videoLabel": "contactFormVideo",
    "photoLabel": "contactFormPhoto",
    "submitButton": "submitButtonText",
    "contactUsTel": "contactPageTel"
};

var elementsToTranslateHomePage = {
    "greetingText": "greetingTextHomePage",
    "teamText": "homePageTeamText",
    "ingridRole": "homePageIngridText",
    "gergoRole": "homePageGergoText",
    "servicesText": "homePageServicesText",
    "socialServiceText": "homePageSocialServiceText",
    "photoServiceText": "homePagePhotoServiceText",
    "videoServiceText": "homePageVideoServiceText"
};

var elementsToTranslateServicesPage = {
    "servicesSubTitle": "servicesSubTitle",
    "teamTextServices": "servicesGreeting",
    "services1title": "servicesSocialtitle",
    "servies1text": "servicesSocialText",
    "services2title": "servicesVideoTitle",
    "services2text": "servicesVideoText",
    "services3title": "servicesPhotoTitle",
    "services3text": "servicesPhotoText"
};

var elementsToTranslateTeamPage = {
    "teamsubTitle": "teamsubTitle",
    "teamTextAboutUs":  "teamTextAboutUs",
    "edmondTeamText":  "edmondTeamText",
    "ingridTeamRole": "ingridTeamRole",
    "ingridTextTeam":  "ingridTextTeam",
    "gergoTeamRole":  "gergoTeamRole",
    "gergoTextTeam":"gergoTextTeam"
}

function updateContent(language) {
    var languageData = languages[language];
    var elementsToTranslateCommon = elementsToTranslate;
    var elementsToTranslatePage;

    // Determine the page-specific elements based on the current page
    var currentPage = getCurrentPage();

    if (currentPage === "home.html") {
        elementsToTranslatePage = elementsToTranslateHomePage;
    } else if (currentPage === "services.html") {
        elementsToTranslatePage = elementsToTranslateServicesPage;
    } else if (currentPage === "team.html") {
        elementsToTranslatePage = elementsToTranslateTeamPage;
    }

    // Merge common and page-specific elements
    var mergedElementsToTranslate = { ...elementsToTranslateCommon, ...elementsToTranslatePage };

    // Iterate through the merged mapping and update content for each element
    for (var elementId in mergedElementsToTranslate) {
        var languageKey = mergedElementsToTranslate[elementId];
        var element = document.getElementById(elementId);
        if (element) {
            element.textContent = languageData[languageKey];
        }
    }
}

// Usage example for dynamically determining the current page
updateContent(currentLanguage);

