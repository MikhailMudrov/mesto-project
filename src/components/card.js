import {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton,
  galeryCloseButton, imageCloseButton, profileAvatar, profileAvatarButton,
  profileTitle, profileAbout, profileForm, nameInput, aboutInput,
  imageInPopup, imageTextInPopup, galeryTemplate, galeryContainer, cardTitle, cardLink,
  validationOptions, apiUrl, token, avatarPopup, avatarCloseButton, avatarSaveButton,
  avatarLink, avatarForm, loadingImage, galeryErrorImage, profileErrorImage, galeryAddButton
} from './variables';
import { openPopup, closePopup } from './modal';
import { getCadrsData, postNewCard, getProfileData } from './api';
import { clearForm } from './utils';
/* import { profileInfo } from './profile'; */

//Функция создания карточки
export function addCard(name, link) {
  const galeryElement = galeryTemplate.cloneNode(true);
  const galeryImage = galeryElement.querySelector('#galeryImage');
  galeryElement.querySelector('#galeryTitle').textContent = name;
  galeryImage.setAttribute('src', link);
  galeryImage.setAttribute('alt', name);


  //Подключить лайк
  galeryElement.querySelector('.galery__like').addEventListener('click', likeCard)
  //Удалить карточку
  galeryElement.querySelector('#delButton').addEventListener('click', removeCard)

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
//лайк карточки
export function likeCard(evt) {
  evt.target.classList.toggle('galery__like_active');
}
//удаление карточки
export function removeCard(evt) {
  evt.target.closest('#galeryItem').remove();
}
//добавление карточек из массива
let user;

export const profileInf = () => {

  getProfileData()
    .then((data) => {
      user = data;
      console.log(user)
    })
    .catch((err) => {
      console.log(err)
    })
}
profileInf()
export function newCard(item) {
  galeryContainer.prepend(addCard(item.name, item.link));
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

  postNewCard(cardData)
    .then(res => {
      galeryContainer.prepend(addCard(res.name, res.link));
      clearForm(galeryForm)
      closePopup(galeryPopup)
    })
    .catch(err => console.log(err))
    .finally(() => galeryAddButton.textContent = 'Добавить')
}
/*
// Проверка владельца карточки
export function checkCardOwner(card, user, galeryDelButton) {
  if (card.owner._id !== user._id) {
    galeryDelButton.style.display = 'none';
  }
} */

