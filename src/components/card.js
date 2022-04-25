import {
  galeryPopup, imagePopup, galeryForm, imageInPopup,
  imageTextInPopup, galeryTemplate, galeryContainer,
  cardTitle, cardLink, galeryAddButton, deletePopup
} from './variables';
import { openPopup, closePopup } from './modal';
import { postNewCard, deleteCard, addLike, removeLike } from './api';
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
  const likeCounter = galeryElement.querySelector('.galery__like-counter')
  const galeryLike = galeryElement.querySelector('.galery__like')

  galeryElement.querySelector('#galeryTitle').textContent = cardData.name;
  galeryImage.setAttribute('src', cardData.link);
  galeryImage.setAttribute('alt', cardData.name);
  galeryItem.setAttribute('data-id', cardData._id)

  //проверить владельца и спрятать кнопку удаления
  checkCardOwner(cardData, userData, galeryDelButton)

  //передаем колличество лайков
  if (cardData.likes.length > 0) likeCounter.textContent = cardData.likes.length;

  //проверяем лайк
  if (cardData.likes.some(element => element._id === userData._id)) galeryLike.classList.add('galery__like_active')

  //Подключить лайк
  galeryElement.querySelector('.galery__like').addEventListener('click', evt => likeSwitch(evt, cardData, likeCounter))

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
function likeToggle(evt) {
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

// Удаление карточки после подтверждения
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

// ставим и удаляем лайк
function likeSwitch(evt, cardData, likeCounter) {
  const id = cardData._id
  const activeClass = 'galery__like_active'

  if (evt.target.classList.contains(activeClass)) {
    removeLike(id)
      .then(res => {
        likeToggle(evt)
        if (res.likes.length > 0) likeCounter.textContent = res.likes.length
        else likeCounter.textContent = '0'
      })
  } else {
    addLike(id)
      .then(res => {
        likeCounter.textContent = res.likes.length
        likeToggle(evt)
      })
      .catch(err => console.log(err))
  }
}

//экспорты
export {
  newCard, addCard, likeToggle, removeCard, checkCardOwner,
  submitCardForm, requestsDeleteCard, deleteCardAccept, likeSwitch
}
