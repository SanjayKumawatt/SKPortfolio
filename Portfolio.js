let scrolling = () => {
    // Buttons
    let homeButton = document.getElementById("Home-button");
    let projectButton = document.getElementById("Project-button");
    let skillsButton = document.getElementById("Skills-button");
    let emailButton = document.getElementById("Email-button");
    let viewProjects = document.querySelector(".viewProjects")
    // Locations
    let main1 = document.querySelector(".body");
    let main2 = document.getElementsByClassName("main_part2")[0];
    let main3 = document.querySelector(".main_part3");
    let emailSection = document.getElementById("Email-Section");

    // Programs
    homeButton.addEventListener('click', function () {
        main1.scrollIntoView({
            behavior: "smooth",
        });
    });

    projectButton.addEventListener("click", () => {
        main2.scrollIntoView({
            behavior: "smooth",
        });
    });
    skillsButton.addEventListener("click", () => {
        main3.scrollIntoView({
            behavior: "smooth",
        });
    });

    emailButton.addEventListener("click", () => {
        emailSection.scrollIntoView({
            behavior: "smooth"
        })
    })

    viewProjects.addEventListener("click", () => {
        main2.scrollIntoView({
            behavior: "smooth"
        })
    })


}
scrolling();

// GSAP Animations
let gsapAnimation = () => {


    let tl = gsap.timeline();


    gsap.from(".nav_part1", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "ease out"
    })

    tl.from("#details", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "ease out"
    })


    tl.from("#Home-button", {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "ease"

    })
    tl.from("#Project-button", {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "ease"

    })
    tl.from("#Skills-button", {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "ease"

    })
    tl.from("#Email-button", {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "ease"

    })

    // Scroll---Trigger
    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".box",
            start: "top 300",
        }
    });


    t2.from(".box-Line1", {
        y: 40,
        opacity: 0,

    });


    t2.from(".box-Line2", {
        y: 40,
        opacity: 0,

    });

    let t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".box-Line3",
            start: "top 300",
        }
    });

    t3.from(".box-Line3", {
        y: 50,
        opacity: 0,

    });

    t3.from(".box-Line4", {
        y: 50,
        opacity: 0,

    });


    gsap.from(".skills", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".skills",
            start: "top 400"
        }
    });

    gsap.from(".mail-Box", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: ".mail-Box",
            start: "top 300",
        }
    })
}
gsapAnimation();

//----------------------------------------Emailjs Functionality --------------------------------------

// EmailJS initialize

(function () {
    emailjs.init("bEgBDH6q0WLi1J5Wy"); // <-- yaha apna public key daal
})();

// Form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_ryl5g28", "template_xvp67w9", this)
            .then(function () {
                alert("Email sent successfully!");
                form.reset(); // form clear kar de
            }, function (error) {
                alert("Failed to send email: " + JSON.stringify(error));
            });
    });
});



// ------------------------------------- Responsiveness------------------------------

let tt = gsap.timeline();

let menuButton = document.getElementsByClassName("menu_button")[0];
let bb = 0;
menuButton.addEventListener("click", () => {


    let menu_list = document.getElementsByClassName("menu_ul")[0]
    if (bb == 0) {

        gsap.set("#menuLine1", {
            transformOrigin: "100% 50%"  // right center (x% y%)
        });

        gsap.to("#menuLine1", {
            rotation: -30,
            duration: 0.5
        });


        gsap.set("#menuLine2", {
            transformOrigin: "100% 50%"  // right center (x% y%)
        });

        gsap.to("#menuLine2", {
            rotation: 30,
            duration: 0.5
        });



        menu_list.style.display = "inline-block";
        menu_list.style.opacity = "1";

        tt.from(".menu_ul", {
            opacity: 0,
            duration: 0.2,
        })
        tt.from("#Home", {
            x: -30,
            duration: 0.2,
            opacity: 0
        })

        tt.from("#Project", {
            x: -30,
            duration: 0.2,
            opacity: 0
        })
        tt.from("#Skills", {
            x: -30,
            duration: 0.2,
            opacity: 0
        })
        tt.from("#Email", {
            x: -30,
            duration: 0.2,
            opacity: 0
        })

        bb = 1;
    }
    else {

        gsap.set("#menuLine1", {
            transformOrigin: "100% 50%"  // right center (x% y%)
        });

        gsap.to("#menuLine1", {
            rotation: 0,
            duration: 0.5
        });

        gsap.set("#menuLine2", {
            transformOrigin: "100% 50%"  // right center (x% y%)
        });

        gsap.to("#menuLine2", {
            rotation: 0,
            duration: 0.5
        });


        // menu_list.style.display = "none";
        gsap.to(".menu_ul", {
            opacity: 0,
            duration: 0.2,
            display: "none"
        })
        bb = 0;
    }
})

// Mobile-- Scrolling

// Buttons
let homeButton = document.getElementById("Home");
let projectButton = document.getElementById("Project");
let skillsButton = document.getElementById("Skills");
let emailButton = document.getElementById("Email");
// Locations
let main1 = document.querySelector(".body");
let main2 = document.getElementsByClassName("main_part2")[0];
let main3 = document.querySelector(".main_part3");
let emailSection = document.getElementById("Email-Section");

// Programs
homeButton.addEventListener('click', function () {
    main1.scrollIntoView({
        behavior: "smooth",
    });
    tt.to(".menu_ul", {
        opacity: 0,
        duration: 0.2,
    })

    gsap.set("#menuLine1", {
        transformOrigin: "100% 50%"  // right center (x% y%)
    });

    gsap.to("#menuLine1", {
        rotation: 0,
        duration: 0.5
    });

    gsap.set("#menuLine2", {
        transformOrigin: "100% 50%"  // right center (x% y%)
    });

    gsap.to("#menuLine2", {
        rotation: 0,
        duration: 0.5
    });

    bb = 0;
});

projectButton.addEventListener("click", () => {
    main2.scrollIntoView({
        behavior: "smooth",
    });
    tt.to(".menu_ul", {
        opacity: 0,
        duration: 0.2,
    })

    gsap.set("#menuLine1", {
        transformOrigin: "100% 50%"  // right center (x% y%)
    });

    gsap.to("#menuLine1", {
        rotation: 0,
        duration: 0.5
    });

    gsap.set("#menuLine2", {
        transformOrigin: "100% 50%"  // right center (x% y%)
    });

    gsap.to("#menuLine2", {
        rotation: 0,
        duration: 0.5
    });

    bb = 0;
});
skillsButton.addEventListener("click", () => {
    main3.scrollIntoView({
        behavior: "smooth",
    });
    tt.to(".menu_ul", {
        opacity: 0,
        duration: 0.2,
    })


    gsap.set("#menuLine1", {
        transformOrigin: "100% 50%"  // right center (x% y%)
    });

    gsap.to("#menuLine1", {
        rotation: 0,
        duration: 0.5
    });

    gsap.set("#menuLine2", {
        transformOrigin: "100% 50%"  // right center (x% y%)
    });

    gsap.to("#menuLine2", {
        rotation: 0,
        duration: 0.5
    });

    bb = 0;
});

emailButton.addEventListener("click", () => {
    emailSection.scrollIntoView({
        behavior: "smooth"
    })
    tt.to(".menu_ul", {
        opacity: 0,
        duration: 0.2,
    })


    gsap.set("#menuLine1", {
        transformOrigin: "100% 50%"  // right center (x% y%)
    });

    gsap.to("#menuLine1", {
        rotation: 0,
        duration: 0.5
    });

    gsap.set("#menuLine2", {
        transformOrigin: "100% 50%"  // right center (x% y%)
    });

    gsap.to("#menuLine2", {
        rotation: 0,
        duration: 0.5
    });

    bb = 0;
})








// ---------------------- Guitar wavy line -----------------------

let string = document.querySelector('.string');
let initialPath = "M 10 100 Q 250 100 1200 100";

string.addEventListener("mousemove", function (e) {
    const bounds = string.getBoundingClientRect();
    let relativeX = e.clientX - bounds.left;
    let relativeY = e.clientY - bounds.top;

    let path = `M 10 100 Q ${relativeX} ${relativeY} 1200 100`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.8,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 1.8,
        ease: "elastic.out(1, 0.2)"
    });
});

// -------------------------------  Responsive GSAP -------------------------


