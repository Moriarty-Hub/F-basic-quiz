import "./style/index.scss";
import { getUserInfoFromServer } from "./user";
import { getEducationOfUserFromServer } from "./education";

async function addUserAvatar() {
  const user = await getUserInfoFromServer();
  // TODO feedback: 不建议disable eslint，需要想办法解决
  // eslint-disable-next-line no-undef
  // TODO feedback: 建议找到img，然后添加src
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
    // TODO feedback: 在for循环中，每次都要操作DOM，影响性能，不推荐这样做
    // TODO feedback: record用ul li更符合语义
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
