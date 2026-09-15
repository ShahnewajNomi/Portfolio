$(document).ready(function(){

    // ==========================================
    // 1. Theme Switcher Logic (Dark & Light Mode)
    // ==========================================
    const $html = $('html');
    const $heroThemeToggle = $('#hero-theme-toggle');
    const $navThemeToggle = $('#nav-theme-toggle');
    const $themeStatusText = $('#theme-status-text');

    function setTheme(theme) {
        $html.attr('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        
        if (theme === 'light') {
            $themeStatusText.text('Light Mode Active');
        } else {
            $themeStatusText.text('Dark Mode Active');
        }
    }

    // Initialize Theme from localStorage or Default to Dark Mode
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);

    // Toggle Theme Handler
    function toggleTheme() {
        const currentTheme = $html.attr('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    $heroThemeToggle.on('click', toggleTheme);
    $navThemeToggle.on('click', toggleTheme);

    // ==========================================
    // 2. Sticky Navbar & Scroll Up Button
    // ==========================================
    $(window).scroll(function(){
        // Sticky Navbar
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-Up Button Visibility
        if (this.scrollY > 400) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll to Top Click Event
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    // ==========================================
    // 3. Mobile Navigation Menu Toggle
    // ==========================================
    $('#mobile-menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $(this).find('i').toggleClass("fa-bars fa-xmark");
    });

    // Close Mobile Menu when clicking menu item
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('#mobile-menu-btn i').removeClass("fa-xmark").addClass("fa-bars");
    });

    // Close Mobile Menu on Click Outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.navbar .menu').removeClass("active");
            $('#mobile-menu-btn i').removeClass("fa-xmark").addClass("fa-bars");
        }
    });

    // ==========================================
    // 4. Typing Animation Script
    // ==========================================
    if (typeof Typed !== 'undefined') {
        new Typed(".typing", {
            strings: ["Web Developer", "Graphics Designer", "UI/UX Enthusiast", "Creative Techie"],
            typeSpeed: 90,
            backSpeed: 50,
            loop: true
        });

        new Typed(".typing-2", {
            strings: ["Web Developer", "Graphics Designer", "Frontend Designer"],
            typeSpeed: 90,
            backSpeed: 50,
            loop: true
        });
    }

    // ==========================================
    // 5. Owl Carousel Script for Teams/Showcase
    // ==========================================
    if ($.fn.owlCarousel) {
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    }
});