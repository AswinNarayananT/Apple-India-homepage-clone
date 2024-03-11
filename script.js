let currentSlide = 0;
        const totalSlides = document.querySelectorAll('.slide').length;
        const slideWidth = document.querySelector('.slide').offsetWidth;

        function showSlide(index) {
            currentSlide = index;
            document.querySelector('.slides').style.transform = `translateX(-${slideWidth * index}px)`;
        }

        function autoPlay() {
            setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            }, 6000); // Adjust the interval as needed (in milliseconds)
        }

        autoPlay(); // Start autoplay