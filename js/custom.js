$(document).ready(function() {

    // Handler object;
    const MENU_INFO = {
        navLink: $('nav ul li a[href^="#"]'),
        activeClassName: 'active',
        scrollTime: 500,
        offsetTop: 100,
    }

    // Smooth Scroll;
    MENU_INFO.navLink.click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - MENU_INFO.offsetTop, 
        }, MENU_INFO.scrollTime);
    });

    // Active link when scrolling;
    function activeNavLink() {
        let scrollFromTop = $(this).scrollTop();
        MENU_INFO.navLink.each(function(e) {
            let sectionOffset = $(this.hash).offset().top;
            if(sectionOffset <= scrollFromTop + MENU_INFO.offsetTop) {
                $(this).parent().addClass(MENU_INFO.activeClassName);
                $(this).parent().siblings().removeClass(MENU_INFO.activeClassName);
            }
        });
    } activeNavLink();
    $(window).scroll(function() {
        activeNavLink(); 
    });
});