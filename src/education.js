import { getUserIdFromURL } from "./user";

function getEducationOfUserFromServer() {
  const urlPrefixOfGettingEducation = "http://localhost:8080/users/";
  const urlSuffixOfGettingEducation = "/educations";
  fetch(
    urlPrefixOfGettingEducation +
      getUserIdFromURL() +
      urlSuffixOfGettingEducation
  )
    .then((response) => response.json())
    .then((educationList) => {
      return educationList;
    });
}

export default getEducationOfUserFromServer();
