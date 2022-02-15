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

const galeryContainer = document.querySelector('.galery__list');
const galeryTemplate = document.querySelector('#galeryItem').content;
const deleteButton = document.querySelector('#delButton');

// Добавление катрочек из массива
initialCards.forEach(function (element) {

  const galeryElement = galeryTemplate.cloneNode(true);

  galeryElement.querySelector('.galery__title').textContent = element.name;
  galeryElement.querySelector('.galery__image').src = element.link;
  galeryElement.querySelector('.galery__image').alt = element.name;
  galeryElement.querySelector('.galery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('galery__like_active');
  });

  galeryContainer.append(galeryElement)
  //удаление элеиента
  const galeryDel = function (evt) {
    evt.target.closest(".galery__item").remove()
  };

  document.querySelectorAll("#delButton").forEach(function (item) {
    item.addEventListener("click", galeryDel)
  });


});



//Добавление карточки пользователем

const cardlink = document.querySelector('#imageLink');
const cardtitle = document.querySelector('#imageTitle');
const galeryForm = document.querySelector('#galeryForm');

function addCard(titleValue, linkValue) {
  const galeryElement = galeryTemplate.cloneNode(true);

  galeryElement.querySelector('.galery__title').textContent = titleValue;
  galeryElement.querySelector('.galery__image').alt = titleValue;
  galeryElement.querySelector('.galery__image').src = linkValue;
  galeryElement.querySelector('.galery__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('galery__like_active');
  });

  galeryContainer.prepend(galeryElement)
  //удаление элеиента
  const galeryDel = function (evt) {
    evt.target.closest(".galery__item").remove()
  };

  document.querySelectorAll("#delButton").forEach(function (item) {
    item.addEventListener("click", galeryDel)
  });
}

function galerySubmitHandler(evt) {
  evt.preventDefault();
  {
    addCard(cardtitle.value, cardlink.value);

    cardlink.value = '';
    cardtitle.value = '';
  }
}

galeryForm.addEventListener('submit', galerySubmitHandler);
galeryForm.addEventListener('submit', function () { popupOpenClose(popupGalery) });



