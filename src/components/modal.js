//Закрытие по Esc
function closeByEsk(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup)
  }
};

//Закрытие по клику на оверлей
function closeByOverlayClick(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup')) {
    closePopup(openedPopup)
  }
}

//Функция открыть попап
function openPopup(popupId) {
  popupId.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsk);
  document.addEventListener('mousedown', closeByOverlayClick)
};

//Функция закрыть попап
function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsk);
  document.removeEventListener('mousedown', closeByOverlayClick)
};

//экспоты
export { closeByEsk, closeByOverlayClick, openPopup, closePopup }
