'use strict';

const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popupProfile');
const profileCloseButton = document.querySelector('#profileClose');

const galeryAddButton = document.querySelector('.profile__add-button');
const popupGalery = document.querySelector('#popupGalery');
const galeryCloseButton = document.querySelector('#galeryClose');

//Открытие закрытие попапа
function popupOpenClose(popupId) {
  popupId.classList.toggle('popup_opened');
};

profileEditButton.addEventListener('click', function () { popupOpenClose(popupProfile) });
profileCloseButton.addEventListener('click', function () { popupOpenClose(popupProfile) });

galeryAddButton.addEventListener('click', function () { popupOpenClose(popupGalery) });
galeryCloseButton.addEventListener('click', function () { popupOpenClose(popupGalery) });



//редактирование формы
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#about');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', function () { popupOpenClose(popupProfile) });

//актуализация формы
function actualizationForm() {
  document.querySelector('#name').value = title.textContent;
  document.querySelector('#about').value = subtitle.textContent;
}

profileEditButton.addEventListener('click', actualizationForm);


//Галерея
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

const galeryContainer = document.querySelector('.galery__list')
const galeryTemplate = document.querySelector('#galeryItem').content;

// Добавление катрочек из массива
initialCards.forEach(function (element) {

  const galeryElement = galeryTemplate.cloneNode(true);

  galeryElement.querySelector('.galery__title').textContent = element.name
  galeryElement.querySelector('.galery__image').src = element.link
  galeryElement.querySelector('.galery__image').alt = element.name

  galeryContainer.append(galeryElement)
})




