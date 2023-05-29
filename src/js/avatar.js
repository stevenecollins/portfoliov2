// // Avatar Stuff
// let avatar = document.querySelector(".avatar");
// var closeEyes = document.querySelector(".close");
// let lookRight = document.querySelector(".lookRight");
// let lookLeft = document.querySelector(".lookLeft");
// let lookUp = document.querySelector(".lookUp");
// let lookDown = document.querySelector(".lookDown");

// // // lookLeft
// // lookLeft.addEventListener("mouseenter", () => {
// // 	avatar.style.backgroundPosition = "-328px, 0px";
// // });
// // lookLeft.addEventListener("mouseleave", () => {
// // 	avatar.style.backgroundPosition = "0px, 0px";
// // });

// // lookDown
// lookDown.addEventListener("mouseenter", () => {
// 	avatar.style.backgroundPosition = "-1335px, 0px";
// });
// lookDown.addEventListener("mouseleave", () => {
// 	avatar.style.backgroundPosition = "0px, 0px";
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
//             avatar.style.backgroundPosition = "-166px 0px";

//             setTimeout(() => {
//                 // Open eyes again
//                 avatar.style.backgroundPosition = "0px 0px";
//             }, 150);
//         }, timer);
//     }, 7000);
//     // End Blinking
// }