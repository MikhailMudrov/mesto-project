import { profileTitle, profileAbout, nameInput, aboutInput, avatarLink, avatarForm, profileAvatar } from "./variables";
import { changeAvatar } from "./api";
import { closePopup } from "./modal";
import { clearForm } from "./utils";

//функфия редактирования формы
export function submitProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}
//Функция актуализации формы профиля
export function actualizationForm() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileAbout.textContent;
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


