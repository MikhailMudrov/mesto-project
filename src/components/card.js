import {
  imagePopup, imageInPopup, galeryPopup,
  imageTextInPopup, galeryTemplate,
  galeryContainer, cardTitle, cardLink,
  initialCards
} from './variables'
import { openPopup, closePopup } from './modal';
import { clearForm } from './utils';

//Функция создания карточки
export function addCard(name, link) {
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


//добавление карточек из массива
initialCards.forEach(function (item) { galeryContainer.prepend(addCard(item.name, item.link)) });
