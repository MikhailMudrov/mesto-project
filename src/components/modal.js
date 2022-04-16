//Функция открыть попап
export function openPopup(popupId) {
  popupId.classList.add('popup_opened');
};

//Функция закрыть попап
export function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
};
