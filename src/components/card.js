import {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton,
  galeryCloseButton, imageCloseButton, profileAvatar, profileAvatarButton,
  profileTitle, profileAbout, profileForm, nameInput, aboutInput,
  imageInPopup, imageTextInPopup, galeryTemplate, galeryContainer, cardTitle, cardLink,
  validationOptions, apiUrl, token, avatarPopup, avatarCloseButton, avatarSaveButton,
  avatarLink, avatarForm, loadingImage, galeryErrorImage, profileErrorImage, galeryAddButton,
  deletePopup
} from './variables';
import { openPopup, closePopup } from './modal';
import { getCadrsData, postNewCard, getProfileData, deleteCard } from './api';
import { clearForm } from './utils';
import { user } from './index'

function newCard(item) {
  galeryContainer.prepend(item)
}

//Функция создания карточки
function addCard(cardData, userData) {
  const galeryElement = galeryTemplate.cloneNode(true);
  const galeryImage = galeryElement.querySelector('#galeryImage');
  const galeryDelButton = galeryElement.querySelector('.galery__delete-button');
  const galeryItem = galeryElement.querySelector('.galery__item')
  galeryElement.querySelector('#galeryTitle').textContent = cardData.name;
  galeryImage.setAttribute('src', cardData.link);
  galeryImage.setAttribute('alt', cardData.name);
  galeryItem.setAttribute('data-id', cardData._id)

  //проверить владельца и спрятать кнопку удаления
  checkCardOwner(cardData, userData, galeryDelButton)

  //Подключить лайк
  galeryElement.querySelector('.galery__like').addEventListener('click', likeCard)

  //Удалить карточку
  galeryElement.querySelector('#delButton').addEventListener('click', requestsDeleteCard)


  //Функция добавления картинки в попап галереи
  function addImageToPopup() {
    openPopup(imagePopup);
    imageInPopup.src = cardData.link;
    imageInPopup.alt = cardData.name;
    imageTextInPopup.textContent = cardData.name;
  }

  //Открыть попап галереи
  galeryImage.addEventListener('click', addImageToPopup);
  return galeryElement;
}
//лайк карточки
function likeCard(evt) {
  evt.target.classList.toggle('galery__like_active');
}

//удаление карточки
function removeCard(evt) {
  evt.target.closest('#galeryItem').remove();
}

// Проверка владельца карточки скрытие кнопки удаления
function checkCardOwner(cardData, userData, galeryDelButton) {
  if (cardData.owner._id !== userData._id) {
    galeryDelButton.classList.add('galery__delete-button_hide');
  }
}

//обработка формы карточки
function submitCardForm(evt) {
  evt.preventDefault()
  galeryAddButton.textContent = 'Загрузка...'
  const cardData = {
    name: cardTitle.value,
    link: cardLink.value
  }
  //добавляем новую карточку
  postNewCard(cardData)
    .then(res => {
      galeryContainer.prepend(addCard(res, user));
      clearForm(galeryForm)
      closePopup(galeryPopup)
    })
    .catch(err => console.log(err))
    .finally(() => galeryAddButton.textContent = 'Добавить')
}

// Обработка нажатия удаления карточки
function requestsDeleteCard(evt) {
  openPopup(deletePopup)

  const card = evt.target.closest('.galery__item')
  const id = card.getAttribute('data-id')

  deletePopup.setAttribute('data-id', id)
  console.log(id)
}

// Функция отправки удаления карточки после подтверждения
function deleteCardAccept() {
  const id = deletePopup.getAttribute('data-id')
  const card = document.querySelector(`[data-id='${id}']`)

  deleteCard(id)
    .then(() => {
      card.remove()
      closePopup(deletePopup)
    })
    .catch(err => console.log(err))
}


export { newCard, addCard, likeCard, removeCard, checkCardOwner, submitCardForm, requestsDeleteCard, deleteCardAccept }
