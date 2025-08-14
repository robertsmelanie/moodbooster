const boosters = [
    "You are capable of amazing things! 💪",
    "Why don’t skeletons fight each other? They don’t have the guts. 😂",
    "Believe you can and you’re halfway there. 🌈",
    "Did you know? Honey never spoils — archaeologists found 3,000-year-old honey still edible!",
    "Keep going, you’re closer than you think! 🚀",
    "What’s a programmer’s favorite snack? Cookies. 🍪",
    "Every day may not be good… but there’s something good in every day. 🌞"
];

function newBooster() {
    const boosterDiv = document.getElementById("booster");
    boosterDiv.style.opacity = 0;
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * boosters.length);
        boosterDiv.textContent = boosters[randomIndex];
        boosterDiv.style.opacity = 1;
    }, 300);
}