const messages = [
    "Kok gitu sih...",
    "SERIUS NJIR??",
    "DIH MINIT GITU???",
    "Dedeeeeee...",
    "AYOLAH WOI!",
    "GAMAU PENCET YES ITU...???",
    "SEDIH NIH AKU...",
    ":(",
    "fine gpp",
    "BERCANDA, SAY YES PLEASE ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}