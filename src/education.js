import { getUserIdFromURL } from "./user";

export async function getEducationOfUserFromServer() {
  const urlPrefixOfGettingEducation = "http://localhost:8080/users/";
  const urlSuffixOfGettingEducation = "/educations";
  const response = await fetch(
    urlPrefixOfGettingEducation +
      getUserIdFromURL() +
      urlSuffixOfGettingEducation
  );
  return response.json();
}

export default getEducationOfUserFromServer();
