import { apiConfig, checkResponse } from "./variables";

// получаем данные профиля
const getProfileData = () => {
  return fetch(`${apiConfig.apiUrl}users/me`, {
    headers: apiConfig.headers
  })
    .then(checkResponse)
}

//получаем карточки
const getCadrsData = () => {
  return fetch(`${apiConfig.apiUrl}cards`, {
    headers: apiConfig.headers
  })
    .then(checkResponse)
}

//отправляем новый аватар
const changeAvatar = (url) => {
  return fetch(`${apiConfig.apiUrl}users/me/avatar`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({ avatar: url })
  })
    .then(checkResponse)
}

// Отправляем изменения профиля
const updateProfileData = (data) => {
  return fetch(`${apiConfig.apiUrl}users/me`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
    .then(checkResponse)
}

// постим новую карточку
const postNewCard = (card) => {
  return fetch(`${apiConfig.apiUrl}cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: card.name,
      link: card.link
    })
  })
    .then(checkResponse)
}

// удаляем карточки
const deleteCard = (id) => {
  return fetch(`${apiConfig.apiUrl}cards/${id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then(checkResponse)
}

// Отправляем лайк карточки
const addLike = (id) => {
  return fetch(`${apiConfig.apiUrl}cards/likes/${id}`, {
    method: 'PUT',
    headers: apiConfig.headers
  })
    .then(checkResponse)
}

const removeLike = (id) => {
  return fetch(`${apiConfig.apiUrl}cards/likes/${id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
    .then(checkResponse)
}

//экспорты
export {
  getProfileData, getCadrsData, changeAvatar, updateProfileData,
  postNewCard, deleteCard, addLike, removeLike
}
