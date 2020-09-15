function getUserIdFromURL() {
  const indexOfUserId = 4;
  return window.location.href.split("/")[indexOfUserId];
}

function getUserInfoFromServer() {
  const urlPrefixOfGettingUser = "http://localhost:8080/users/";
  const userId = getUserIdFromURL();
  fetch(urlPrefixOfGettingUser + userId)
    .then((response) => response.json())
    .then((user) => {
      return user;
    });
}

export { getUserIdFromURL, getUserInfoFromServer };
