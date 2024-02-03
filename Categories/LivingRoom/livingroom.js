let ourimages = document.querySelectorAll(".images img");
ourimages.forEach(img => {
    img.addEventListener('click',(e) => {
        let Overlay = document.createElement("div");
        Overlay.className='popup-overlay';
        document.body.appendChild(Overlay);


        let popupBox = document.createElement("div");
        popupBox.className= 'popup-box';

        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");
        let closeButtonText = document.createTextNode("X");
        closeButton.appendChild(closeButtonText);
        closeButton.className='close-button';
        popupBox.appendChild(closeButton);

    });
});
document.addEventListener('click',function(e) {
    if(e.target.className === 'close-button') {
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();

    }
});