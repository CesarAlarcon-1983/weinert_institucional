'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    //Heder scroll logic
    if(window.scrollY > 0) {
        header.addClass('-scrolled');
    } else {
        header.removeClass('-scrolled');
    }

    $(window).on('scroll', function() {
        if(window.scrollY > 0) {
            header.addClass('-scrolled');
        } else {
            header.removeClass('-scrolled');
        }
    })

    //Estilo data switcher logic
    var contents = $('[data-content]');
    var targets = $('[data-target]');
    var closeButtons = $('.estilo__map__close-button');

    closeButtons.on('click', function(e) {
        e.preventDefault();
        contents.removeClass('-active');
        scrollControl.removeClass('-hidden');
    })

    targets.on('click', function(e) {
        e.preventDefault();

        targets.removeClass('-active');
        contents.removeClass('-active');

        $(this).addClass('-active');
        scrollControl.addClass('-hidden');

        var targettedContent = $(this).data('target');

        contents.filter(function(content) {
            return content == targettedContent;
        }).addClass('-active');
    })

    //Estilo horizontal scroll logic
    var scrollControl = $('.estilo__map__scroll-button');
    var container = $('.estilo__map__container');
    var xMovement;

    scrollControl.on('mousedown', function(e) {
        var xInitialPosition = e.pageX;

        $(document).on('mousemove', function(event) {
            xMovement = xInitialPosition - event.pageX;
            
            if(xMovement <= 0) {
                var currentScroll = container.scrollLeft();
                container.scrollLeft(currentScroll - 10);
            } else {
                var currentScroll = container.scrollLeft();
                container.scrollLeft(currentScroll + 10);
            }

            xInitialPosition =  event.pageX;
        })
    })

    $(document).on('mouseup', function(e) {
        $(this).unbind('mousemove');
    })
};

module.exports = Header;
