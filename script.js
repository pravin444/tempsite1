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
function flickerEffect(callback) {
    document.body.classList.add('flicker-effect');
    setTimeout(() => {
        document.body.classList.remove('flicker-effect');
        if (callback) callback();
    }, 0.7 * 1000); // Flicker duration of 1 second
}

/* === EVENT LISTENERS === */

/**
 * Redirects to the profile page when the profile switch is turned on.
 */
document.getElementById('profile-switch').addEventListener('change', function() {
    if (this.checked) {
        flickerEffect(() => {
            setTimeout(() => {
                window.location.href = "profile.html";
            }, 0.7 * 1000); // Delay redirection just a bit more than the flicker duration if needed
        });
    }
});

/**
 * Redirects to the project list page when the project list switch is turned on.
 */
document.getElementById('project-list-switch').addEventListener('change', function() {
    if (this.checked) {
        flickerEffect(() => {
            setTimeout(() => {
                window.location.href = "project-list.html";
            }, 0.7 * 1000); // Delay redirection just a bit more than the flicker duration
        });
    }
});

/**
 * Resets switches every time the page is shown.
 * Useful when navigating back to the page using the back button.
 */
window.addEventListener('pageshow', function(event) {
    resetSwitches();
});
