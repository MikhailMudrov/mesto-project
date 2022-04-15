import '../pages/index.css'; // добавьте импорт главного файла стилей
import {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton,
  galeryCloseButton, imageCloseButton, profileTitle, profileAbout,
  profileForm, nameInput, aboutInput, imageInPopup, imageTextInPopup,
  galeryTemplate, galeryContainer, cardTitle, cardLink, initialCards
} from './variables.js'

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
const galeryElement = galeryTemplate.cloneNode(true);
const galeryImage = galeryElement.querySelector('#galeryImage');

//Функция создания карточки
function addCard(name, link) {

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
