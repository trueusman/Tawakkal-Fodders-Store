// Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Enhanced Hero Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
        
        // Event listeners for navigation
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto-advance slides
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-advance on hover
        const heroSection = document.querySelector('.hero');
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSection.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 3000);
        });
        
        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });


          // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
   
        
        // Google reviews //


                // Add scroll animation
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.testimonial-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => {
                card.style.opacity = '0';
                observer.observe(card);
            });

            // Add hover effect for CTA button
            const ctaButton = document.querySelector('.cta-button');
            ctaButton.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            ctaButton.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
 
    // <!-- Loading Animation Script -->
    
        // Configuration - Adjust timing here (in milliseconds)
        const MIN_LOAD_TIME = 3000; // Show for minimum 3 seconds
        const FADE_TIME = 500; // Fade out duration
        
        // Check if loader was already shown in this session
        if (!sessionStorage.getItem('loaderShown')) {
            // First load in this session
            const loader = document.getElementById('loader');
            const body = document.body;
            
            // Show loader and hide content
            if (loader) {
                loader.style.display = 'flex';
                body.classList.remove('loaded');
                
                // Set minimum display time
                setTimeout(function() {
                    loader.style.opacity = '0';
                    body.classList.add('loaded');
                    
                    // Remove loader after fade out
                    setTimeout(function() {
                        loader.style.display = 'none';
                        // Remember for this session
                        sessionStorage.setItem('loaderShown', 'true');
                    }, FADE_TIME);
                    
                }, MIN_LOAD_TIME);
            }
        } else {
            // Already shown in this session - hide immediately
            document.addEventListener('DOMContentLoaded', function() {
                const loader = document.getElementById('loader');
                const body = document.body;
                
                if (loader) {
                    loader.style.display = 'none';
                    body.classList.add('loaded');
                }
            });
        }
        
        // Fallback: Ensure loader is hidden after max time
        setTimeout(function() {
            const loader = document.getElementById('loader');
            const body = document.body;
            
            if (loader && loader.style.display !== 'none') {
                loader.style.opacity = '0';
                body.classList.add('loaded');
                
                setTimeout(function() {
                    loader.style.display = 'none';
                    sessionStorage.setItem('loaderShown', 'true');
                }, FADE_TIME);
            }
        }, 100000); // Max 10 seconds