(function(){
    var nav = document.getElementById('nav');
    window.onscroll = function(){
        nav.style.backgroundColor = 'rgba(17, 17, 17, ' + Math.min(window.pageYOffset / window.innerHeight, 0.95) + ')';
    };

    var about = document.getElementById('about');
    function gotoAbout (event) {
        event.preventDefault();
        this.blur();
        window.scroll({ behavior: 'smooth', top: about.offsetTop - nav.offsetHeight, left: 0 })
    }
    document.getElementById('about-link').onclick = gotoAbout;
    document.getElementById('about-link2').onclick = gotoAbout;
})();
