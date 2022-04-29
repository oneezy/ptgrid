/* Request Fullscreen
*********************************/
var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};


/* Exit Fullscreen
*********************************/
var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};


/* Template
*********************************/
var fullscreenToggle = `

        <div id="buttonFullScreen" class="reveal-item fullscreen-mode">
            <span class="item-label">Go Fullscreen</span>
            <button class="mdc-fab mini-fab">
                <i class="material-icons">fullscreen</i>
            </button>
        </div>`;


/* Add Fullscreen Button
*********************************/
function addFullscreen() {
    $('.toggle-editor .reveal-container').append(fullscreenToggle);
}


var buttonFullScreen       = document.getElementById('buttonFullScreen');
var buttonExitFullScreen   = document.getElementById('buttonExitFullScreen');

// buttonFullScreen.addEventListener('click', function(e) {
// 	e.preventDefault();
// 	requestFullscreen(document.documentElement);
// });

/* Expand Page Editor
*********************************/
function toggleFullscreen() {

    $('#buttonFullScreen').on('click', function (e){
        e.preventDefault();
        requestFullscreen(document.documentElement);
    });
}


//buttonExitFullScreen.addEventListener('click', function(e) {
//	e.preventDefault();
//	exitFullscreen();
//});




/* Expand Page Editor
*********************************/
// function toggleFullscreen() {

//     $('.toggle-editor').on('click', function (e){
//         e.preventDefault();

//         $(this).toggleClass('active');
//         $('.mdc-icon-toggle').toggle();
//     });
// }


    /* RUN FUNCTIONS
=========================================================== */
    $(document).ready(function() {

        addFullscreen();

    });