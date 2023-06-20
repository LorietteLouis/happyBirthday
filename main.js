const textToDisplayDay = document.querySelector('.text-to-display-1')
const textToDisplayYear = document.querySelector('.text-to-display-2')
const input = document.querySelectorAll('.input-1')
const card = document.querySelector('.container-card')

const difference = 0;


input[0].addEventListener('change', () => {
    textToDisplayDay.textContent = `Trip last ${getDifferenceBetweenDates(input[0].value, input[1].value)} days`;
    textToDisplayYear.textContent = `Trip last ${getDifferenceBetweenYears(input[0].value, input[1].value)} years`;
})

input[1].addEventListener('change', () => {
    textToDisplayDay.textContent = `Trip last ${getDifferenceBetweenDates(input[0].value, input[1].value)} days`;
    textToDisplayYear.textContent = `Trip last ${getDifferenceBetweenYears(input[0].value, input[1].value)} years`;
})

function getDifferenceBetweenDates(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    return diffDays;
}

function getDifferenceBetweenYears(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffTime = Math.abs(date2 - date1);
    const diffYears = Math.ceil(diffTime / (1000 * 3600 * 24 *365.25));
    return diffYears;
}



    if(getDifferenceBetweenYears === 40){
        card = `Joyeux anniversaire NAME! Bravo pour tes ${getDifferenceBetweenYears} ans.`
    }
