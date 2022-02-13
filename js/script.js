'use strict';
const element = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')

function popupOpen(a) {
  a.classList.toggle('popup_opened');
};

element.addEventListener('click', function () { popupOpen(popup) })
popupClose.addEventListener('click', function () { popupOpen(popup) })

