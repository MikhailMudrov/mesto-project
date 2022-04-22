import { apiUrl, token } from "./variables";

// получаем данные профиля
const getProfileData = () => {
  return fetch(apiUrl + 'users/me', {
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
}

//получаем карточки
const getCadrsData = () => {
  return fetch(apiUrl + 'cards', {
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
}

// Смена аватара
const changeAvatar = (url) => {
  return fetch(apiUrl + '/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ avatar: url })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
}

export { getProfileData, getCadrsData, changeAvatar }
