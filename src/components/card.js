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
/* import { profileInfo } from './profile'; */

function newCard(item) {
  galeryContainer.prepend(item)
}

//Функция создания карточки
function addCard(cardData, userData) {
  const galeryElement = galeryTemplate.cloneNode(true);
  const galeryImage = galeryElement.querySelector('#galeryImage');
  const galeryDelButton = galeryElement.querySelector('.galery__delete-button');
  galeryElement.querySelector('#galeryTitle').textContent = cardData.name;
  galeryImage.setAttribute('src', cardData.link);
  galeryImage.setAttribute('alt', cardData.name);
  galeryImage.setAttribute('data-id', cardData._id)

  //проверить владельца и спрятать кнопку удаления
  checkCardOwner(cardData, userData, galeryDelButton)

  //Подключить лайк
  galeryElement.querySelector('.galery__like').addEventListener('click', likeCard)

  //Удалить карточку
  galeryElement.querySelector('#delButton').addEventListener('click', removeCard)


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


export { newCard, addCard, likeCard, removeCard, checkCardOwner }
//переменная с данными пользователя которая не хочет работать из файла переменных
/* let user; */
//наполняем переменную с данными пользователя
/* export const profileInf = () => {
  getProfileData()
    .then((info) => {
      user = info;
      console.log(user)
    })
    .catch((err) => {
      console.log(err)
    })
}
profileInf() */

/* export function newCard(item) {
  galeryContainer.prepend(addCard(item.name, item.link, item._id));
  const galeryDelButton = document.querySelector('#delButton');
  if (item.owner._id !== user._id) {
    galeryDelButton.classList.add('galery__delete-button_hide')
  }

}
//Загрузка карточек с сервера
export const downloadCards = () => {
  getCadrsData()
    .then((data) => {
      data.forEach(newCard);
    })
    .catch((err) => {
      console.log(err)
    })

}

//обработка формы карточки
export function submitCardForm(evt) {
  evt.preventDefault()
  galeryAddButton.textContent = 'Загрузка...'
  const cardData = {
    name: cardTitle.value,
    link: cardLink.value
  }
  //добавляем новую карточку
  postNewCard(cardData)
    .then(res => {
      galeryContainer.prepend(addCard(res.name, res.link));
      clearForm(galeryForm)
      closePopup(galeryPopup)
    })
    .catch(err => console.log(err))
    .finally(() => galeryAddButton.textContent = 'Добавить')
} */

/* // Обработка удаления карточки
export function requestsDeleteCard(evt) {
  openPopup(deletePopup)

  const card = evt.target.closest('#galeryItem')
  const id = card.getAttribute('data-id')

  deletePopup.setAttribute('data-id', id)
  console.log(id)
} */

// Функция отправки удаления карточки после подтверждения
/* export function deleteCardAccept() {
  const id = deletePopup.getAttribute('data-id')
  const card = document.querySelector(`[data-id='${id}']`)

  deleteCard(id)
    .then(() => {
      card.remove()
      closePopup()
    })
    .catch(err => console.log(err))
} */
