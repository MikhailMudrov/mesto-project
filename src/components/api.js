import { apiUrl, token, answerCheck } from "./variables";

// получаем данные профиля
const getProfileData = () => {
  return fetch(apiUrl + 'users/me', {
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  })
    .then(answerCheck)
}

//получаем карточки
const getCadrsData = () => {
  return fetch(apiUrl + 'cards', {
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  })
    .then(answerCheck)
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
    .then(answerCheck)
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
    .then(answerCheck)
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
    .then(answerCheck)
}

// удаляем карточки
const deleteCard = (id) => {
  return fetch(apiUrl + `cards/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
  })
    .then(answerCheck)
}

export { getProfileData, getCadrsData, changeAvatar, updateProfileData, postNewCard, deleteCard }
