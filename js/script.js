'use strict';
//Открытие закрытие попапа
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');

function popupOpenClose(popupClass) {
  popupClass.classList.toggle('popup_opened');
};

profileEditButton.addEventListener('click', function () { popupOpenClose(popupProfile) });
popupCloseButton.addEventListener('click', function () { popupOpenClose(popupProfile) });



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




