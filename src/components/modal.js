//Закрытие по Esc
function closeByEsk(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
};

//Функция открыть попап
function openPopup(popupId) {
  popupId.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsk);
  /* document.addEventListener('mousedown', closeByOverlayClick) */
};

//Функция закрыть попап
function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsk);
  /*  document.removeEventListener('mousedown', closeByOverlayClick) */
};

//экспоты
export { closeByEsk, openPopup, closePopup }
