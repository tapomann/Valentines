const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", function() {
    message.innerText = "Yay! ❤️ I love you!";
    message.style.display = "block";
    createHearts();
});

noBtn.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    let speed = Math.random() * 500 + 200;
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transition = `all ${speed}ms ease`;
});

// Heart animation
function createHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        let x = Math.random() * window.innerWidth;
        let y = window.innerHeight - 50;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        setTimeout(() => heart.remove(), 1000);
    }
}
