// получаем данные профиля
const getProfileData = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me', {
    headers: {
      authorization: '216df393-80a6-469f-9917-af68970bf2f0',
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
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getProfileData }
