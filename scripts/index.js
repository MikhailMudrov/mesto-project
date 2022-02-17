'use strict';
//Переменные
const profilePopup = document.querySelector('#popupProfile');
const galeryPopup = document.querySelector('#popupGalery');
const imagePopup = document.querySelector('#imagePopup');
const galeryForm = galeryPopup.querySelector('#galeryForm')
const profileEditButton = document.querySelector('.profile__edit-button');
const galeryEditButton = document.querySelector('.profile__add-button');
const galeryImage = document.querySelector('galery__image');
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

//Функция открыть попап
function openPopup(popupId) {
  popupId.classList.add('popup_opened');
};

//Функция закрыть попап
function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
};
//функфия редактирования формы
function submitFormHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}
//Функция актуализации формы профиля
function actualizationForm() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileAbout.textContent;
}
//Функция очистки формы
function clearForm(formId) {
  formId.reset();
}


//Функция создания карточки
function addCard(name, link) {
  const galeryElement = galeryTemplate.cloneNode(true);
  const galeryImage = galeryElement.querySelector('#galeryImage');
  galeryElement.querySelector('#galeryTitle').textContent = name;
  galeryImage.setAttribute('src', link);
  galeryImage.setAttribute('alt', name);

  //Подключить лайк
  galeryElement.querySelector('.galery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('galery__like_active');
  })
  //Удалить карточку
  galeryElement.querySelector('#delButton').addEventListener('click', function (evt) {
    evt.target.closest('#galeryItem').remove();
  })

  //Функция добавления картинки в попап галереи
  function addImageToPopup() {
    openPopup(imagePopup);

    imageInPopup.src = link;
    imageInPopup.alt = name;
    imageTextInPopup.textContent = name;
  }
  //Открыть попап галереи
  galeryImage.addEventListener('click', addImageToPopup);
  return galeryElement;
}
//Добавление карточки из формы
galeryPopup.addEventListener('submit', function (evt) {
  evt.preventDefault();
  galeryContainer.prepend(addCard(cardTitle.value, cardLink.value));

  clearForm(galeryForm)

  closePopup(galeryPopup)
})

//Открыть попап профиля и заполнить полея
profileEditButton.addEventListener('click', function () {
  actualizationForm();
  openPopup(profilePopup);
});
//Закрыть попап профиля
profileCloseButton.addEventListener('click', function () { closePopup(profilePopup) });
//Открыть попап карточек
galeryEditButton.addEventListener('click', function () { openPopup(galeryPopup) });
//Закрыть попап карточек и очистить форму
galeryCloseButton.addEventListener('click', function () {
  clearForm(galeryForm);
  closePopup(galeryPopup);
});
//Сохранение формы профиля
profileForm.addEventListener('submit', submitFormHandler);
//Закрытие формы профиля при сохранении
profileForm.addEventListener('submit', function () { closePopup(popupProfile) });
//добавление карточек из массива
initialCards.forEach(function (item) { galeryContainer.prepend(addCard(item.name, item.link)) });
//Закрыть попап картинки
imageCloseButton.addEventListener('click', function () { closePopup(imagePopup) });
