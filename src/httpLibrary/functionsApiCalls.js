//import { mockInfoProjects, mockInfoTasks, mockInfoUsers } from './mockInfo.js';
function header() {
  return {
    authtoken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3F1YWQzIiwibmFtZSI6IlNxdWFkIDMiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODk0Njg2MDV9.zbr_sqvp9lLAI_LGR5mQCCDUDMtryVqPH3z1wHTbaJk",
  };
}

function getRequestOpt() {
  return {
    method: "GET",
    headers: header(),
    redirect: "follow",
  };
}

const endpoint = "https://cubosv2.4040.wtf/api/";

const projectsInfo = () => {
  return fetch(endpoint + "projects/?=&=", getRequestOpt())
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const tasksInfo = () => {
  fetch(endpoint + "tasks/search", getRequestOpt())
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const userInfo = (id) => {
  fetch(endpoint + "staffs/" + id, getRequestOpt())
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export { projectsInfo, tasksInfo, userInfo };
