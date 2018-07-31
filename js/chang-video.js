'use strict'



function changeMovie() {
    let movieSquere = document.getElementsByClassName("img-and-content");
    let videoDisplay = document.getElementById("videoarea");
    let movieFullScreenImg = document.getElementById("full-description");
    let moviePoster = document.getElementById("movie-poster");

    for (var i = 0; i < movieSquere.length; i++) {
        movieSquere[i].addEventListener("click", function () {
            //            set attributes of video
            videoDisplay.setAttribute("src", this.getAttribute("movieurl"));
            videoDisplay.setAttribute("poster", this.getAttribute("movieposter"));
            //            scroll to top of page 
            document.documentElement.scrollTop = 0;
            //set background img and linear gradient to full-movie-description section and movie poster
            let movieImg = this.getAttribute("movieposter");
            movieFullScreenImg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url" + "('" + movieImg + "')";
            moviePoster.style.backgroundImage = "url" + "('" + movieImg + "')";
        })
    }
}

changeMovie();

//responsive menu control
function responsiveMenu() {
    let hamburgerMenu = document.getElementById("hamburger-menu");
    let navList = document.getElementById("responsive-list");

    hamburgerMenu.addEventListener("click", function () {
        if (navList.className === ("nav-list" + " use-flex")) {
            navList.className += " responsive-nav-list"
        } else {
            navList.className = ("nav-list" + " use-flex");
        }
    })
};
responsiveMenu();
