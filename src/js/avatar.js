// Avatar Stuff
let avatar = document.querySelector(".avatar");
var closeEyes = document.querySelector(".close");
let LDL = document.querySelector(".lookDownLeft");
let LURs = document.querySelectorAll(".lookUpRight, .hamburger");
let LDR = document.querySelector('.lookDownRight');

let isHovering = false; // Introduce a flag to keep track of hovering state

// lookDownLeft
LDL.addEventListener("mouseenter", () => {
	avatar.style.backgroundPosition = "-318px 0px";
	isHovering = true; // set hovering to true when mouse enters
});
LDL.addEventListener("mouseleave", () => {
	avatar.style.backgroundPosition = "0px 0px";
	isHovering = false; // set hovering to false when mouse leaves
});
// lookUpRight
LURs.forEach((LUR) => {
    LUR.addEventListener("mouseenter", () => {
        avatar.style.backgroundPosition = "-954px 0px";
        isHovering = true; // set hovering to true when mouse enters
    });
    LUR.addEventListener("mouseleave", () => {
        avatar.style.backgroundPosition = "0px 0px";
        isHovering = false; // set hovering to false when mouse leaves
    });
});
// lookDownRight
LDR.addEventListener("mouseenter", () => {
	avatar.style.backgroundPosition = "-1272px 0px";
	isHovering = true; // set hovering to true when mouse enters
});
LDR.addEventListener("mouseleave", () => {
	avatar.style.backgroundPosition = "0px 0px";
	isHovering = false; // set hovering to false when mouse leaves
});

// Start Blinking
window.onload = startFunc;

function startFunc() {
    const avatar = document.getElementById('avatarSprite'); // get the avatar 

    // Start with open eyes
    let timer = Math.round(Math.random() * 2000);

    setInterval(() => {
        timer = Math.round(Math.random() * 2000);

        if (!isHovering) { // Only blink if not hovering
            // Close eyes
            setTimeout(() => {
                avatar.style.backgroundPosition = "-159px 0px";

                setTimeout(() => {
                    // Open eyes again
                    avatar.style.backgroundPosition = "0px 0px";
                }, 160);
            }, timer);
        }
    }, 7000);
    // End Blinking
}



// // Avatar Stuff
// let avatar = document.querySelector(".avatar");
// var closeEyes = document.querySelector(".close");
// let LDL = document.querySelector(".lookDownLeft");
// let LURs = document.querySelectorAll(".lookUpRight, .hamburger");

// // lookDownLeft
// LDL.addEventListener("mouseenter", () => {
// 	avatar.style.backgroundPosition = "-318px 0px";
// });
// LDL.addEventListener("mouseleave", () => {
// 	avatar.style.backgroundPosition = "0px 0px";
// });
// // lookUpRight
// LURs.forEach((LUR) => {
//     LUR.addEventListener("mouseenter", () => {
//         avatar.style.backgroundPosition = "-954px 0px";
//     });
//     LUR.addEventListener("mouseleave", () => {
//         avatar.style.backgroundPosition = "0px 0px";
//     });
// });
// // Start Blinking
// window.onload = startFunc;

// function startFunc() {
//     const avatar = document.getElementById('avatarSprite'); // get the avatar 

//     // Start with open eyes
//     let timer = Math.round(Math.random() * 2000);

//     setInterval(() => {
//         timer = Math.round(Math.random() * 2000);
//         // Close eyes
//         setTimeout(() => {
//             avatar.style.backgroundPosition = "-159px 0px";

//             setTimeout(() => {
//                 // Open eyes again
//                 avatar.style.backgroundPosition = "0px 0px";
//             }, 160);
//         }, timer);
//     }, 7000);
//     // End Blinking
// }