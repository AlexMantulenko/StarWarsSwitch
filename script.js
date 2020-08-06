const sw = document.getElementById('switch');
const bg = document.querySelector('body');

const sword1 = document.getElementById('sw1');
const sword2 = document.getElementById('sw2');

sw.addEventListener('click', () => {
    if(sw.checked) {
        bg.style.transition = '.7s';
        bg.style.backgroundColor = 'rgb(36, 36, 36)';

        sword1.style.transition = 'height .5s';
        sword1.style.height = '0px';
       
        sword2.style.transition = 'height .5s';
        sword2.style.height = '100px';
    }
    else {
        bg.style.transition = '.7s';
        bg.style.backgroundColor = 'white';

        sword1.style.transition = 'height .5s';
        sword1.style.height = '100px';

        sword2.style.transition = 'height .5s';
        sword2.style.height = '0px';
    }
})