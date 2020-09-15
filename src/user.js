function getUserIdFromURL() {
  const indexOfUserId = 4;
  return window.location.href.split("/")[indexOfUserId];
}

async function getUserInfoFromServer() {
  const urlPrefixOfGettingUser = "http://localhost:8080/users/";
  const userId = getUserIdFromURL();
  const response = await fetch(urlPrefixOfGettingUser + userId);
  return response.json();
}

export { getUserIdFromURL, getUserInfoFromServer };
