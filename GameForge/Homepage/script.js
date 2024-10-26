// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        closeButton.closest('.modal').style.display = "none";
    });
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

// Function to show Steam link in modal
function ShowGotSteamModal(steamURL, gameTitle, message) {
    // Open Steam link in a new window
    window.open(steamURL, '_blank');
    alert(message);
}
