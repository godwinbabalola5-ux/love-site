// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "🌹";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);

// ===============================
// COUNTDOWN
// ===============================

// July 15, 2026
const meetDate = new Date("July 15, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = meetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    const timer = document.getElementById("timer");

    if (distance <= 0) {

        timer.innerHTML =
        "❤️ Today is finally here. ❤️";

    } else {

        timer.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    }

}

updateCountdown();

setInterval(updateCountdown,1000);

// ===============================
// BUTTON ANIMATION
// ===============================

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.08)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

});

// ===============================
// FADE IN
// ===============================

const hero = document.querySelector(".hero-content");

hero.animate(
[
    {
        opacity:0,
        transform:"translateY(50px)"
    },
    {
        opacity:1,
        transform:"translateY(0)"
    }
],
{
    duration:1800,
    fill:"forwards"
}
);// MUSIC PLAYER

const playBtn = document.getElementById("playMusic");

const music = document.getElementById("loveSong");

playBtn.addEventListener("click",function(){

music.play();

playBtn.innerHTML="💙 Playing...";

});const message = `

Dear Ali Akbar,

Some people become special without ever standing beside us.

You are one of those people.

Every conversation with you has become a memory I treasure.

Even though we haven't met in person, I appreciate the kindness, respect and happiness you've brought into my life.

Meeting you someday is something I genuinely look forward to.

Until then...

May this little website remind you that someone is praying for your happiness every day.

Love Always,

❤️ Cinderella

`;

const typingLetter = document.getElementById("typingLetter");

let i = 0;

function typeLetter(){

    if(i < message.length){

        typingLetter.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeLetter,45);

    }

}

typeLetter();// ===========================
// SCROLL ANIMATION
// ===========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>observer.observe(el));// =====================
// LOVE QUOTES
// =====================

const quotes = [

"Distance means so little when someone means so much. ❤️",

"Some hearts recognize each other long before two people meet.",

"The best love stories begin with hope.",

"You may be far away, but you are never far from my thoughts.",

"Every conversation with you becomes one of my favorite memories.",

"Perhaps our greatest adventure is still waiting for us."

];

let quoteIndex = 0;

const quote = document.getElementById("quote");

function changeQuote(){

    quote.style.opacity = 0;

    setTimeout(()=>{

        quote.innerHTML = quotes[quoteIndex];

        quote.style.opacity = 1;

        quoteIndex++;

        if(quoteIndex >= quotes.length){

            quoteIndex = 0;

        }

    },500);

}

changeQuote();

setInterval(changeQuote,5000);// ==========================
// SPARKLING STARS
// ==========================

const stars = document.getElementById("stars");

for(let i=0;i<80;i++){

    const star = document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});