// Open Modal function
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Close Modal function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};

// Add event listener to the Terms and Policies link to open the modal when clicked
document.getElementById("terms-link").onclick = function(event) {
    event.preventDefault();  // Prevent the default action (following the link)
    openModal('terms-modal');  // Open the Terms and Policies modal
}

// Close modal when clicking anywhere outside the modal
window.onclick = function(event) {
    var modal = document.getElementById("terms-modal");
    if (event.target === modal) {
        closeModal('terms-modal');
    }
}

document.getElementById("aboutus").onclick = function(event) {
    event.preventDefault();  // Prevent the default action (following the link)
    openModal('aboutusModal');  // Open the about us modal
}
