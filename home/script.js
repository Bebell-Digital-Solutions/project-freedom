
        // Back to Top Functionality

        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            var backToTopButton = document.getElementById("back-to-top");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "flex";
            } else {
                backToTopButton.style.display = "none";
            }
        }

        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }



    // Back to Top Button
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        window.addEventListener('scroll', function() {
            const backToTopButton = document.getElementById('back-to-top');
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });










        // Navigation Menu Toggle
        const navbarBtn = document.getElementById('navbar-btn');
        const navIcon = document.getElementById('nav-icon3');
        const menu = document.querySelector('.menu');
        const menuBc = document.querySelector('.menu-bc');
        const menuItems = document.querySelector('.menu-items');
        
        navbarBtn.addEventListener('click', function() {
            navIcon.classList.toggle('open');
            
            if (navIcon.classList.contains('open')) {
                menu.style.display = 'block';
                menuBc.style.animation = 'menu 0.5s forwards';
                setTimeout(() => {
                    menuItems.style.animation = 'menu-items 0.5s forwards';
                    menuItems.style.opacity = '1';
                }, 500);
            } else {
                menuItems.style.animation = 'menu-items2 0.5s forwards';
                menuBc.style.animation = 'menu2 0.5s forwards';
                setTimeout(() => {
                    menu.style.display = 'none';
                }, 500);
            }
        });








        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-header');
            
            header.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });








        // Carousel Functionality
        const carouselList = document.querySelector('.carousel__list');
        const carouselItems = document.querySelectorAll('.carousel__item');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        
        let currentIndex = 4; // Start with the active item
        
        function updateCarousel() {
            const itemWidth = carouselItems[0].offsetWidth + 32; // width + margin
            const offset = -currentIndex * itemWidth;
            carouselList.style.transform = `translateX(${offset}px)`;
            
            // Update active state
            carouselItems.forEach((item, index) => {
                if (index === currentIndex) {
                    item.setAttribute('data-active', '');
                } else {
                    item.removeAttribute('data-active');
                }
            });
        }
        
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        nextButton.addEventListener('click', () => {
            if (currentIndex < carouselItems.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });






    

        // Video Modal
        const playButton = document.querySelector('.play-but');
        const videoModal = document.querySelector('.video-modal-wrapper');
        
        playButton.addEventListener('click', function(e) {
            e.preventDefault();
            videoModal.style.display = 'flex';
        });
        
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                videoModal.style.display = 'none';
            }
        });











