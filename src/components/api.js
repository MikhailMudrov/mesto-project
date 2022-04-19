import { url, token } from "./variables";

// получаем данные профиля
const getProfileData = () => {
  return fetch(url + 'users/me', {
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
  return fetch(url + 'cards', {
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
    .then((data) => {
      console.log(data)
      return data;
    })
    .catch((err) => {
      console.log(err)
      return err;
    });
}
export { getProfileData, getCadrsData }
