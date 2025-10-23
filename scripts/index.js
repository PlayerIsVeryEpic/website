var stickyEl = document.querySelector(".sticky")
var stickyPosition = stickyEl.getBoundingClientRect().top;
var offset = 0
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= stickyPosition + offset) {
        stickyEl.style.position = 'fixed';
        stickyEl.style.top = '0px';
    } else {
        stickyEl.style.position = 'static';
        stickyEl.style.top = '';
    }
});

/* adjusted page size */
var hero = document.querySelector(".hero")
window.addEventListener('resize', function() {
    resizeImage()
})

function resizeImage() {
    var body = document.querySelector("body")
    var bodyH = body.offsetHeight
    var bodyW = body.offsetWidth

    hero.style.height = bodyH + 'px';
    hero.style.width = bodyW + 'px';
}

resizeImage()