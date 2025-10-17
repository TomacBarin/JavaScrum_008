// First button
// const buttonHtml = document.getElementById("veryButton");
// buttonHtml.addEventListener("click", () => {
//     alert("...and you just clicked it, amigo.");
// })

const buttonHtml = document.getElementById("veryButton");

// Second test
// buttonHtml.addEventListener("click", function (e) {
//     console.log(e.target);
// })

// Third and last test
buttonHtml.addEventListener("click", function (e) {
    e.target.style.background = "black";
    e.target.style.color = "#FF2B6F";
})