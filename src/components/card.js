import {
  imagePopup, imageInPopup,
  imageTextInPopup, galeryTemplate,
  galeryContainer, initialCards
} from './variables'
import { openPopup } from './modal';

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
export function newCard(item) {
  galeryContainer.prepend(addCard(item.name, item.link))
}
/* initialCards.forEach(newCard); */
