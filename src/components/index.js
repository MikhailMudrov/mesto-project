import '../pages/index.css'; //импорт главного файла стилей
import {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton, profileAvatar,
  profileTitle, profileAbout, galeryCloseButton, imageCloseButton,
  profileForm, galeryContainer, cardTitle, cardLink, validationOptions,
  profileAvatarButton, avatarPopup, avatarCloseButton, avatarSaveButton, avatarLink,
  loadingImage, profileErrorImage
} from './variables.js'
import { openPopup, closePopup } from './modal'
import { submitProfileForm, actualizationForm, submitProfileAvatar } from './profile'
import { clearForm } from './utils';
import { addCard, newCard } from './card'
import { validation } from './validate'
import { getProfileData, getCadrsData } from './api'

//слушатели
//открыть попап аватара
profileAvatarButton.addEventListener('click', function () {
  openPopup(avatarPopup);
})
//закрыть попап аватара
avatarCloseButton.addEventListener('click', function () {
  closePopup(avatarPopup)
})

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
galeryPopup.addEventListener('submit', function (evt) {
  evt.preventDefault();
  galeryContainer.prepend(addCard(cardTitle.value, cardLink.value));

  clearForm(galeryForm)

  closePopup(galeryPopup)
})





//Загрузка данных профиля с сервера
const profileInfo = () => {
  profileAvatar.src = loadingImage;
  profileTitle.textContent = 'Загрузка...';
  profileAbout.textContent = 'В процессе...';
  getProfileData()
    .then((data) => {
      profileAvatar.src = data.avatar;
      profileTitle.textContent = data.name;
      profileAbout.textContent = data.about;
    })
    .catch((err) => {
      profileAvatar.src = profileErrorImage;
      profileTitle.textContent = 'Эээх...';
      profileAbout.textContent = 'Все сломалось =(...';
      console.log(err)
    })
}
profileInfo()

//Загрузка карточек с сервера
const downloadCards = () => {

  getCadrsData()
    .then((data) => {
      data.forEach(newCard)
    })
    .catch((err) => {
      console.log(err)
    })

}
downloadCards()

//Валидация форм
validation(validationOptions);
