window.addEventListener('DOMContentLoaded', () => {
    let popup1 = new Andpopup('.open-popup-1', {
        popupSelector: '.popup-1'
    });

    let popup2 = new Andpopup('.open-popup-2', {
        popupSelector: '.popup-2',
        sendForm: {
            handler: './obr.php',
            formSelector: '#submit-form'
        }
    });

    let popup3 = new Andpopup('.open-popup-3', {
        popupSelector: '.popup-3',
        sendForm: {
            filePath: './obr.php',
            formSelector: '#submit-form-2',
            successImage: 'url(https://hetic.in/wp-content/uploads/2018/02/check.gif)',
            successText: 'Form submit',
            errorImage: 'url(https://unowp.com/wp-content/uploads/2017/08/white-screen-of-death.png)',
            errorText: 'Error!!!',
            loadImage: 'url(https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif)'
        }
    });
});