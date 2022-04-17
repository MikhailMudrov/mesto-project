//показать ошибку
const showInputError = (formItem, inputItem, errorMessage, options) => {
  const errorElement = formItem.querySelector(`#${inputItem.id}-error`);
  inputItem.classList.add(options.inputErrorClass);
  errorElement.classList.add(options.errorClass);
  errorElement.textContent = errorMessage;
};
//спрятать ошибку
const hideInputError = (formItem, inputItem, options) => {
  const errorElement = formItem.querySelector(`#${inputItem.id}-error`);
  inputItem.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = '';
};
//проверить валидность, показать или спрятать ошибку
const checkInputValidity = (formItem, inputItem, options) => {
  if (!inputItem.validity.valid) {
    showInputError(formItem, inputItem, inputItem.validationMessage, options);
  } else {
    hideInputError(formItem, inputItem, options);
  }
};
//проверить инпуты
const invalidInput = (inputs) => {
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
//активировать деактивировать кнопку
const toggleButtonState = (inputs, buttonClass, options) => {
  if (invalidInput(inputs)) {
    buttonClass.disabled = true;
    buttonClass.classList.add(options.inactiveButtonClass);
  } else {
    buttonClass.disabled = false;
    buttonClass.classList.remove(options.inactiveButtonClass);
  }
}
//установить слушатели
const setEventListeners = (formItem, options) => {
  const inputs = Array.from(formItem.querySelectorAll(options.inputItem));
  const buttonClass = formItem.querySelector(options.buttonClasss);
  toggleButtonState(inputs, buttonClass, options);
  inputs.forEach((inputItem) => {
    inputItem.addEventListener('keyup', function () {
      checkInputValidity(formItem, inputItem, options);
      toggleButtonState(inputs, buttonClass, options);
    });
  });
};
//валидация
const validation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formItem));
  forms.forEach((formItem) => {
    formItem.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formItem, options);
  });
};

export { showInputError, hideInputError, checkInputValidity, invalidInput, toggleButtonState, setEventListeners, validation }
