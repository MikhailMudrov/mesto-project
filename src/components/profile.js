import {
  profileAvatar, profileTitle, profileAbout,
  nameInput, aboutInput, avatarSaveButton,
  avatarLink, avatarForm, loadingImage,
  profileSaveButton, profilePopup
} from "./variables";
import { changeAvatar, updateProfileData } from './api'
import { closePopup } from "./modal";
import { clearForm, disableButton } from "./utils";

//Функция актуализации формы профиля
function fillProfileInputs() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileAbout.textContent;
}

//запись данных в профиль
function updateProfile(avatar, name, about) {
  profileAvatar.src = avatar
  profileTitle.textContent = name
  profileAbout.textContent = about
}

// Обработка формы аватара
function submitProfileAvatar(evt) {
  evt.preventDefault()
  avatarSaveButton.textContent = 'Сохранение...'
  profileAvatar.src = loadingImage
  changeAvatar(avatarLink.value)
    .then(res => {
      profileAvatar.src = res.avatar
      clearForm(avatarForm)
      closePopup(popupAvatar)
      disableButton(avatarSaveButton)
    })
    .catch(err => console.log(err))
    .finally(() => avatarSaveButton.textContent = 'Сохранить')
}

// Обработка формы профиля
function submitProfileForm(evt) {
  evt.preventDefault()
  profileSaveButton.textContent = 'Сохранение...'
  profileTitle.textContent = 'Загрузка...';
  profileAbout.textContent = 'В процессе...';
  const data = {
    name: nameInput.value,
    about: aboutInput.value
  }
  updateProfileData(data)
    .then(res => {
      profileTitle.textContent = res.name;
      profileAbout.textContent = res.about;
      closePopup(profilePopup)
      disableButton(profileSaveButton)
    })
    .catch(err => console.log(err))
    .finally(() => profileSaveButton.textContent = 'Сохранить')
}

//экспорты
export { fillProfileInputs, updateProfile, submitProfileAvatar, submitProfileForm }
