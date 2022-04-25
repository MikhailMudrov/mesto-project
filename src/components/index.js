import '../pages/index.css'; //импорт главного файла стилей
import {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton, profileAvatar,
  profileTitle, profileAbout, galeryCloseButton, imageCloseButton,
  profileForm, galeryContainer, cardTitle, cardLink, validationOptions,
  profileAvatarButton, avatarPopup, avatarCloseButton, avatarSaveButton, avatarLink,
  loadingImage, profileErrorImage, profileSaveButton, galeryAddButton, galeryDelButton,
  deletePopupClose, deletePopup
} from './variables.js'
import { openPopup, closePopup } from './modal'
import { submitProfileForm, actualizationForm, submitProfileAvatar, profileInfo } from './profile'
import { clearForm } from './utils';
import { addCard, checkCardOwner, newCard } from './card'
import { validation } from './validate'
import { getProfileData, getCadrsData } from './api'
import { downloadCards, submitCardForm } from './card'

//слушатели
//открыть попап аватара
profileAvatarButton.addEventListener('click', function () {
  openPopup(avatarPopup);
});

//закрыть попап аватара
avatarCloseButton.addEventListener('click', function () {
  closePopup(avatarPopup)
});
//закрытие попапа удаления карточки
deletePopupClose.addEventListener('click', function () {
  closePopup(deletePopup)
});

//обновление аватара
avatarForm.addEventListener('submit', submitProfileAvatar)
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
profileForm.addEventListener('submit', submitProfileForm);
//Закрытие формы профиля при сохранении
profileForm.addEventListener('submit', function () { closePopup(popupProfile) });
//Закрыть попап картинки
imageCloseButton.addEventListener('click', function () { closePopup(imagePopup) });

//Добавление карточки из формы
galeryPopup.addEventListener('submit', submitCardForm)
/*
//загружаем данные прлфиля при открытии страницы
profileInfo()

//загружаем данные карточек при открытии страницы
downloadCards()
 */
//Валидация форм
validation(validationOptions);
