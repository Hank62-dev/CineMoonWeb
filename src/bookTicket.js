
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


/*Phim sắp chiếu*/
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