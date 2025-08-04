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


/*Thanh trượt phim đang chiếu**/ 
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


/* Thanh trượt phim sắp chiếu*/
const wrapper = document.getElementById('futureWrapper');
    const prevBtn2 = document.getElementById('prevBtn2');
    const nextBtn2 = document.getElementById('nextBtn2');

    const scrollAmount2 = 1360;

    prevBtn2.addEventListener('click', () => {
        wrapper.scrollBy({ left: -scrollAmount2, behavior: 'smooth' });
    });
    nextBtn2.addEventListener('click', () => {
        wrapper.scrollBy({ left: scrollAmount2, behavior: 'smooth' });
    });

/*Thanh trượt khuyến mãi*/
const discountWrapper = document.getElementById('discountsWrapper');
    const prevDiscountBtn = document.getElementById('prevDiscountsBtn');
    const nextDiscountBtn = document.getElementById('nextDiscountsBtn');

    const discountScrollAmount = 440;
    prevDiscountBtn.addEventListener('click', () => {
        discountWrapper.scrollBy({ left: -discountScrollAmount, behavior: 'smooth' });
    });
    nextDiscountBtn.addEventListener('click', () => {
        discountWrapper.scrollBy({ left: discountScrollAmount, behavior: 'smooth' });
    });