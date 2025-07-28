let minFontSize = 12;
let maxFontSize = 28;
let defaultFontSize = 16;
let currentFontSize = defaultFontSize;

// Utility to set font size for body and main content areas
function setFontSize(size) {
    document.body.style.fontSize = size + 'px';
    // Optionally, adjust font size for main containers if needed
    document.querySelectorAll('.home-content, .content, .container-i, .footer-content')
        .forEach(el => el.style.fontSize = size + 'px');
}

// Restore font size from localStorage if available
if (localStorage.getItem('fontSize')) {
    currentFontSize = parseInt(localStorage.getItem('fontSize'), 10);
    setFontSize(currentFontSize);
} else {
    setFontSize(defaultFontSize);
}

document.getElementById('increaseText').addEventListener('click', () => {
    if (currentFontSize < maxFontSize) {
        currentFontSize += 2;
        setFontSize(currentFontSize);
        localStorage.setItem('fontSize', currentFontSize);
    }
});

document.getElementById('decreaseText').addEventListener('click', () => {
    if (currentFontSize > minFontSize) {
        currentFontSize -= 2;
        setFontSize(currentFontSize);
        localStorage.setItem('fontSize', currentFontSize);
    }
});

// Optional: Add a reset button for accessibility
if (!document.getElementById('resetText')) {
    const resetBtn = document.createElement('button');
    resetBtn.id = 'resetText';
    resetBtn.className = 'link';
    resetBtn.textContent = 'A';
    resetBtn.title = 'Reset font size';
    document.querySelector('.navbar-links').appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
        currentFontSize = defaultFontSize;
        setFontSize(currentFontSize);
        localStorage.setItem('fontSize', currentFontSize);
    });
}