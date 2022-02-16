'use strict';
//Переменные
const profilePopup = document.querySelector('#popupProfile');
const galeryPopup = document.querySelector('#popupGalery');
const imagePopup = document.querySelector('imagePopup');
const profileEditButton = document.querySelector('.profile__edit-button');
const galeryEditButton = document.querySelector('.profile__add-button');
const galeryImage = document.querySelector('galery__image');
const profileCloseButton = document.querySelector('#profileClose');
const galeryCloseButton = document.querySelector('#galeryClose');
const imageCloseButton = document.querySelector('#imageClose')
//Функция открыть попап
function openPopup(popupId) {
  popupId.classList.add('popup_opened');
};

//Функция закрыть попап
function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
};

//Открыть попап профиля
profileEditButton.addEventListener('click', function () { openPopup(profilePopup) });
//Закрыть попап профиля
profileCloseButton.addEventListener('click', function () { closePopup(profilePopup) });
//Открыть попап карточек
galeryEditButton.addEventListener('click', function () { openPopup(galeryPopup) });
//Закрыть попап карточек
galeryCloseButton.addEventListener('click', function () { closePopup(galeryPopup) });
//открыть попап картинки
//galeryImage.addEventListener('click', function () { openPopup(imagePopup) });
//Закрыть попап картинки
imageCloseButton.addEventListener('click', function () { closePopup(imagePopup) });

