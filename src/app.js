import "./style/index.scss";
import { getUserInfoFromServer } from "./user";
import { getEducationOfUserFromServer } from "./education";

async function addUserAvatar() {
  const user = await getUserInfoFromServer();
  // eslint-disable-next-line no-undef
  $("#avatar").html(`<img 
        src="${user.avatar}" 
        alt="avatar" 
        class="image"/>`);
}

async function addUserInfo() {
  const user = await getUserInfoFromServer();
  // eslint-disable-next-line no-undef
  $("#name").html(`MY NAME IS ${user.name} AND THIS IS MY RESUME/CV`);
}

async function addUserDescription() {
  const user = await getUserInfoFromServer();
  // eslint-disable-next-line no-undef
  $("#description").html(`<p class="text">${user.description}</p>`);
}

async function addEducationList() {
  const educationList = await getEducationOfUserFromServer();
  educationList.forEach((education) => {
    // eslint-disable-next-line no-undef
    $("#education").append(`
        <section class="record">
          <section class="year">
            <p class="year">${education.year}</p>
          </section>
          <section class="experience">
            <h5 class="title">${education.title}</h5>
            <p class="description">${education.description}</p>
          </section>
        </section>`);
  });
}

addUserInfo();
addUserDescription();
addEducationList();
addUserAvatar();
