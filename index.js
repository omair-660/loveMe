var question = document.querySelector("#question");
var container = document.querySelector(".container");
var yesBtn = document.querySelector("#yesBtn");
var noBtn = document.querySelector("#noBtn");
var img = document.querySelector("img");
var tow = document.querySelector(".tow");
var angry = document.querySelector(".angry");
var containerRect = container.getBoundingClientRect();
var noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", function() {
    question.innerHTML = `<i class="fa-solid fa-heart"></i> I love you too <i class="fa-solid fa-heart"></i>`;
    img.classList.add("open");
    tow.classList.add("open");
    angry.classList.remove("open");
});

noBtn.addEventListener("mouseover", function() {
    var i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;
    var y = Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = y + "px";
});

noBtn.addEventListener("click", function() {
    question.innerHTML = `<i class="fa-solid fa-face-angry"></i> I Hate you too <i class="fa-solid fa-face-angry"></i>`;
    img.classList.remove("open");
    tow.classList.remove("open");
    angry.classList.add("open");
});