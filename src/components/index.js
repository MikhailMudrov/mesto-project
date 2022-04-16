import '../pages/index.css'; //импорт главного файла стилей
import {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton,
  galeryCloseButton, imageCloseButton, profileForm
} from './variables.js'
import { openPopup, closePopup } from './modal'
import { submitFormHandler, actualizationForm, clearForm } from './utils'
import { addCard } from './card'


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




