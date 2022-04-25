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

//отправляем новый аватар
const changeAvatar = (url) => {
  return fetch(apiUrl + 'users/me/avatar', {
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

// Отправляем изменения профиля
const updateProfileData = (data) => {
  return fetch(apiUrl + 'users/me', {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
}

// постим новую карточку
const postNewCard = (card) => {
  return fetch(apiUrl + 'cards', {
    method: 'POST',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: card.name,
      link: card.link
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
}

// удаляем карточки
export const deleteCard = (id) => {
  return fetch(apiUrl + `cards/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
}

export { getProfileData, getCadrsData, changeAvatar, updateProfileData, postNewCard }
