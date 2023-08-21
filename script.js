document.getElementById('profile-switch').addEventListener('change', function() {
    if (this.checked) {
        window.location.href = "profile.html"; // Assuming the profile page is named 'profile.html'
    }
});

document.getElementById('project-list-switch').addEventListener('change', function() {
    if (this.checked) {
        window.location.href = "project-list.html"; // Assuming the project list page is named 'project-list.html'
    }
});

function resetSwitches() {
    document.getElementById('profile-switch').checked = false;
    document.getElementById('project-list-switch').checked = false;
    document.getElementById('theme-switch').checked = false;
}

window.addEventListener('pageshow', function(event) {
    resetSwitches();
});

