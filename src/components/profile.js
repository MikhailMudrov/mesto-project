import {
  profilePopup, galeryPopup, imagePopup, galeryForm,
  profileEditButton, galeryEditButton, profileCloseButton,
  galeryCloseButton, imageCloseButton, profileAvatar, profileAvatarButton,
  profileTitle, profileAbout, profileForm, nameInput, aboutInput,
  imageInPopup, imageTextInPopup, galeryTemplate, galeryContainer, cardTitle, cardLink,
  validationOptions, apiUrl, token, avatarPopup, avatarCloseButton, avatarSaveButton,
  avatarLink, avatarForm, loadingImage, galeryErrorImage, profileErrorImage, profileSaveButton,
  deletePopup
} from "./variables";
import { getProfileData, changeAvatar, updateProfileData } from './api'
import { closePopup } from "./modal";
import { clearForm } from "./utils";



//Функция актуализации формы профиля
export function actualizationForm() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileAbout.textContent;
}
/* export let user;
//Загрузка данных профиля с сервера
export const profileInfo = () => {
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

// Обработка формы аватара
export function submitProfileAvatar(evt) {
  evt.preventDefault()
  avatarSaveButton.textContent = 'Сохранение...'

  changeAvatar(avatarLink.value)
    .then(res => {
      profileAvatar.src = res.avatar
      clearForm(avatarForm)
      closePopup(popupAvatar)
    })
    .catch(err => console.log(err))
    .finally(() => avatarSaveButton.textContent = 'Сохранить')
}



// Обработка формы профиля
export function submitProfileForm(evt) {
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
    })
    .catch(err => console.log(err))
    .finally(() => profileSaveButton.textContent = 'Сохранить')
}
 */
