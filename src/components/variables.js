//Переменные
const profilePopup = document.querySelector('#popupProfile');
const galeryPopup = document.querySelector('#popupGalery');
const imagePopup = document.querySelector('#imagePopup');
const avatarPopup = document.querySelector('#popupAvatar')
const galeryForm = galeryPopup.querySelector('#galeryForm')
const profileEditButton = document.querySelector('.profile__edit-button');
const galeryEditButton = document.querySelector('.profile__add-button');
const profileCloseButton = profilePopup.querySelector('#profileClose');
const avatarCloseButton = document.querySelector('#avatarClose')
const galeryCloseButton = galeryPopup.querySelector('#galeryClose');
const imageCloseButton = imagePopup.querySelector('#imageClose');
const galeryAddButton = galeryPopup.querySelector('#addButton')
const profileAvatar = document.querySelector('.profile__photo')
const profileAvatarButton = document.querySelector('.profile__photo-edit-button')
const avatarSaveButton = document.querySelector('#avatarSaveButton')
const avatarLink = document.querySelector('#avatarLink')
const avatarForm = document.querySelector('#avatarForm')
const profileTitle = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.popup__form');
const profileSaveButton = document.querySelector('#profileSaveButton')
const nameInput = profilePopup.querySelector('#name');
const aboutInput = profilePopup.querySelector('#about');
const imageInPopup = imagePopup.querySelector('.popup__picture');
const imageTextInPopup = imagePopup.querySelector('.popup__text');
const galeryTemplate = document.querySelector('#galeryTemplate').content;
const galeryContainer = document.querySelector('.galery__list');
const cardTitle = document.querySelector('#imageTitle');
const cardLink = document.querySelector('#imageLink');
const deletePopup = document.querySelector('#deletePopup')
const deletePopupClose = document.querySelector('#deletePopupClose')
const deletePopupButton = document.querySelector('deletePopupButton')

//картинки в переменных
const loadingImage = new URL('../images/loading.gif', import.meta.url);
const galeryErrorImage = new URL('../images/galery-error-image.jpg', import.meta.url)
const profileErrorImage = new URL('../images/error.png', import.meta.url)


//опции функции валидации
const validationOptions = ({
  formItem: '.popup__form',
  inputItem: '.popup__item',
  buttonClasss: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item-error',
  errorClass: 'popup__input-error',
});

//переменные для api
const apiUrl = 'https://nomoreparties.co/v1/plus-cohort-9/';
const token = '216df393-80a6-469f-9917-af68970bf2f0';
const answerCheck = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Что-то пошло не так: ${res.status}`);
}

//экспорты
export {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton,
  galeryCloseButton, imageCloseButton, profileAvatar, profileAvatarButton,
  profileTitle, profileAbout, profileForm, nameInput, aboutInput,
  imageInPopup, imageTextInPopup, galeryTemplate, galeryContainer, cardTitle, cardLink,
  validationOptions, apiUrl, token, avatarPopup, avatarCloseButton, avatarSaveButton,
  avatarLink, avatarForm, loadingImage, galeryErrorImage, profileErrorImage, profileSaveButton,
  galeryAddButton, deletePopup, deletePopupClose, deletePopupButton, answerCheck
}


