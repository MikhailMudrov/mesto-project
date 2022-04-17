//Закрытие по Esc
export function closeByEsk(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup)
  }
};

//Закрытие по клику на оверлей
export function closeByOverlayClick(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup')) {
    closePopup(openedPopup)
  }
}

//Функция открыть попап
export function openPopup(popupId) {
  popupId.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsk);
  document.addEventListener('mousedown', closeByOverlayClick)
};

//Функция закрыть попап
export function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsk);
  document.removeEventListener('mousedown', closeByOverlayClick)
};
