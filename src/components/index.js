import '../pages/index.css'; //импорт главного файла стилей
import {
  profilePopup, galeryPopup, profileEditButton, galeryEditButton,
  profileForm, validationOptions, profileAvatarButton, avatarPopup, popups
} from './variables.js'
import { openPopup, closePopup } from './modal'
import { submitProfileForm, fillProfileInputs, submitProfileAvatar, updateProfile } from './profile'
import { addCard, newCard, submitCardForm, deleteCardAccept } from './card'
import { validation } from './validate'
import { getProfileData, getCadrsData } from './api'


//одинокая грустная переменная с данными пользователя не желающа работать из файла с переменными
export let user;

// Загружаем данные с сервера, создаем кррточки, заполняем профиль
Promise.all([getCadrsData(), getProfileData()])
  .then(([cards, userData]) => {
    cards.forEach(card => {
      newCard(addCard(card, userData));
    })
    updateProfile(userData.avatar, userData.name, userData.about);
    user = userData;
  })
  .catch(err => console.log(err))

//слушатели
//Закрытие попапов по крестику и оверлею
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

//открыть попап аватара
profileAvatarButton.addEventListener('click', function () {
  openPopup(avatarPopup);
});

//подтверждение удаления карточки
deletePopupButton.addEventListener('click', deleteCardAccept);

//обновление аватара
avatarForm.addEventListener('submit', submitProfileAvatar);

//Открыть попап профиля и заполнить полея
profileEditButton.addEventListener('click', function () {
  fillProfileInputs();
  openPopup(profilePopup);
});

//Открыть попап карточек
galeryEditButton.addEventListener('click', function () { openPopup(galeryPopup) });

//Сохранение формы профиля
profileForm.addEventListener('submit', submitProfileForm);

//Добавление карточки из формы
galeryPopup.addEventListener('submit', submitCardForm);

//Валидация форм
validation(validationOptions);
