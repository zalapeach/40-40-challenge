function header() {
    return {
      authtoken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3F1YWQzIiwibmFtZSI6IlNxdWFkIDMiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODk0Njg2MDV9.zbr_sqvp9lLAI_LGR5mQCCDUDMtryVqPH3z1wHTbaJk",
    };
  }
  
  function getRequestOpt(httpVerb) {
    return {
      method: httpVerb,
      headers: header(),
      redirect: "follow",
    };
  }
  
  const endpoint = "https://cubosv2.4040.wtf/api/";
  
  const getTasks = () => {
    return fetch(endpoint + "tasks/?=&=", getRequestOpt("GET"))
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const getTask = (id) => {
    return fetch(endpoint + "tasks/" + id, getRequestOpt("GET"))
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }; 

  const updateTask = (id, data) => {
    return fetch(endpoint + "tasks/" + id, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }})
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  export { getTask, getTasks, updateTask};