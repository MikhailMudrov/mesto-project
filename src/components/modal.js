export function closeByEsk(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup)
  }
};

//Функция открыть попап
export function openPopup(popupId) {
  popupId.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsk);
};

//Функция закрыть попап
export function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsk);
};
