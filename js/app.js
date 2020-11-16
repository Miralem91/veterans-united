const close = () => {

    const closeButton = document.querySelector('.fas');
    const popUp = document.querySelector('.pop-up');

    closeButton.addEventListener('click', () => {
        popUp.classList.add('close');
        closeButton.classList.add('close');
        console.log('ide');
    });
    closeButton.addEventListener('focus', () => {
        popUp.classList.remove('close');
        closeButton.classList.remove('close');

    });
};

close();