//Переменные
const profilePopup = document.querySelector('#popupProfile');
const galeryPopup = document.querySelector('#popupGalery');
const imagePopup = document.querySelector('#imagePopup');
const galeryForm = galeryPopup.querySelector('#galeryForm')
const profileEditButton = document.querySelector('.profile__edit-button');
const galeryEditButton = document.querySelector('.profile__add-button');
const profileCloseButton = profilePopup.querySelector('#profileClose');
const galeryCloseButton = galeryPopup.querySelector('#galeryClose');
const imageCloseButton = imagePopup.querySelector('#imageClose');
const profileTitle = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.popup__form');
const nameInput = profilePopup.querySelector('#name');
const aboutInput = profilePopup.querySelector('#about');
const imageInPopup = imagePopup.querySelector('.popup__picture');
const imageTextInPopup = imagePopup.querySelector('.popup__text');
const galeryTemplate = document.querySelector('#galeryTemplate').content;
const galeryContainer = document.querySelector('.galery__list');
const cardTitle = document.querySelector('#imageTitle');
const cardLink = document.querySelector('#imageLink');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationOptions = ({
  formItem: '.popup__form',
  inputItem: '.popup__item',
  buttonClasss: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item-error',
  errorClass: 'popup__input-error',
});

export {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton,
  galeryCloseButton, imageCloseButton, profileTitle, profileAbout,
  profileForm, nameInput, aboutInput, imageInPopup, imageTextInPopup,
  galeryTemplate, galeryContainer, cardTitle, cardLink, initialCards,
  validationOptions
}


