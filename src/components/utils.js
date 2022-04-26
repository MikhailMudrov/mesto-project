//Функция очистки формы
export function clearForm(formId) {
  formId.reset();
}

export function disableButton(element) {
  element.classList.add('popup__button_inactive')
  element.disabled = true
}
