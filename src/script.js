/*NowNews */
const slider = document.getElementById('sliderWrapper');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        const scrollAmount = 1210;

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });


/*Phim đang chiếu**/ 
const slide = document.getElementById('Wrapper');
        const prevButn = document.getElementById('prevButn');
        const nextButn = document.getElementById('nextButn');

        const Amount = 1365;

        prevButn.addEventListener('click', () => {
            slide.scrollBy({ left: -Amount, behavior: 'smooth' });
        });

        nextButn.addEventListener('click', () => {
            slide.scrollBy({ left: Amount, behavior: 'smooth' });
        });