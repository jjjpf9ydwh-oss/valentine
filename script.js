const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, SAY YES PLEASE! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('#noButton');
    const yesButton = document.querySelector('#yesButton');
    
    // Change "No" button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make "Yes" button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Redirect to a "success" page or change the content
    document.querySelector('.container').innerHTML = `
        <h1 class="header_text">Knew you would say yes!</h1>
        <div class="gif_container">
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXpqcDliaGJnazh5ZDk3c2ZsdW9tZTN2Ym1qY2RkNnRicXJubzc2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ytu2GUYbvhz7zShGwS/giphy.gif" alt="Celebration Gif">
        </div>
    `;
}

// Attach the functions to the buttons
document.getElementById('noButton').addEventListener('click', handleNoClick);
document.getElementById('yesButton').addEventListener('click', handleYesClick);