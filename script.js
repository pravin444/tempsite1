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


/* === MATRIX RAIN ANIMATION === */

var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#f4427d";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);
/* === END OF MATRIX RAIN ANIMATION === */
