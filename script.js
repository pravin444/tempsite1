/* === FUNCTIONS === */

/**
 * Resets all the switches to the "Off" position.
 */
function resetSwitches() {
    document.getElementById('profile-switch').checked = false;
    document.getElementById('project-list-switch').checked = false;
    document.getElementById('theme-switch').checked = false;
}

/**
 * Applies a flickering effect to the entire page.
 */
function flickerEffect() {
    document.body.classList.add('flicker-effect');
    setTimeout(() => {
        document.body.classList.remove('flicker-effect');
    }, 500); // Remove after the same duration as the animation
}

/* === EVENT LISTENERS === */

/**
 * Redirects to the profile page when the profile switch is turned on.
 */
document.getElementById('profile-switch').addEventListener('change', function() {
    if (this.checked) {
        flickerEffect();
        window.location.href = "profile.html"; // Assuming the profile page is named 'profile.html'
    }
});

/**
 * Redirects to the project list page when the project list switch is turned on.
 */
document.getElementById('project-list-switch').addEventListener('change', function() {
    if (this.checked) {
        flickerEffect();
        window.location.href = "project-list.html"; // Assuming the project list page is named 'project-list.html'
    }
});

/**
 * Resets switches every time the page is shown.
 * Useful when navigating back to the page using the back button.
 */
window.addEventListener('pageshow', function(event) {
    resetSwitches();
});

