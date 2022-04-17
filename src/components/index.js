import '../pages/index.css'; //импорт главного файла стилей
import {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton,
  galeryCloseButton, imageCloseButton, profileForm, galeryContainer,
  cardTitle, cardLink, validationOptions, popup
} from './variables.js'
import { openPopup, closePopup } from './modal'
import { submitFormHandler, actualizationForm, clearForm } from './utils'
import { addCard } from './card'
import { validation } from './validate'


//слушатели
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
//Закрыть попап картинки
imageCloseButton.addEventListener('click', function () { closePopup(imagePopup) });

//Добавление карточки из формы
galeryPopup.addEventListener('submit', function (evt) {
  evt.preventDefault();
  galeryContainer.prepend(addCard(cardTitle.value, cardLink.value));

  clearForm(galeryForm)

  closePopup(galeryPopup)
})

//Валидация форм
validation(validationOptions);




