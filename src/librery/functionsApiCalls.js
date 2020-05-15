//import { mockInfoProjects, mockInfoTasks, mockInfoUsers } from './mockInfo.js';
function header(){
    return {
        authtoken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3F1YWQzIiwibmFtZSI6IlNxdWFkIDMiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODk0Njg2MDV9.zbr_sqvp9lLAI_LGR5mQCCDUDMtryVqPH3z1wHTbaJk'
    }
}

function getRequestOpt(){
    return {
        method: 'GET',
        headers: header(),
        redirect: 'follow'
        };
}

const projectsInfo = () => {

    return fetch ('https://cubosv2.4040.wtf/api/projects/?=&=', getRequestOpt())
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


const tasksInfo = () => {

   fetch('https://cubosv2.4040.wtf/api/tasks/search', getRequestOpt())
   .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



const userInfo = () =>{

    fetch("https://cubosv2.4040.wtf/api/staffs/1", getRequestOpt())
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export {projectsInfo, tasksInfo, userInfo};
