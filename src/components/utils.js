import { profileTitle, profileAbout, nameInput, aboutInput } from "./variables";

//функфия редактирования формы
export function submitFormHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}
//Функция актуализации формы профиля
export function actualizationForm() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileAbout.textContent;
}
//Функция очистки формы
export function clearForm(formId) {
  formId.reset();
}
