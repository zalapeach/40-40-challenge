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
  
  const getProjects = () => {
    return fetch(endpoint + "projects/?=&=", getRequestOpt("GET"))
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const getProject = (id) => {
    return fetch(endpoint + "projects/" + id, getRequestOpt("GET"))
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }; 

  const updateProject = (id, data) => {
    return fetch(endpoint + "projects/" + id, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }})
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  export {getProjects, getProject, updateProject};


import React from "react";
import TableRow from "../components/TableRow";
import Navbar from "../components/navigation/Navbar";
// import {
//   getProjects,
//   getProject,
//   updateProject,
// } from "../httpLibrary/projectsRepository";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props: [], tasks: [], task: [] };
  }

  header() {
    return {
      authtoken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3F1YWQzIiwibmFtZSI6IlNxdWFkIDMiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODk0Njg2MDV9.zbr_sqvp9lLAI_LGR5mQCCDUDMtryVqPH3z1wHTbaJk",
    };
  }

  url() {
    return "https://cubosv2.4040.wtf/api/";
  }

  componentDidMount() {
    // fetch(this.url() + "projects/?=&=", {
    //   method: "GET",
    //   headers: this.header(),
    //   redirect: "follow",
    // })
    //   .then((response) => response.json())
    //   .then((projects) => this.setState({ projects: projects }));

    fetch("https://laboratoriamock.free.beeceptor.com/dummy_tasks")
      .then((response) => response.json())
      // .then(response => console.log(response[44].assignees_ids[0]))
      .then((tasks) => {
        console.log(tasks.filter((task) => task.assignees_ids[0] === "3")) ;
      })
    //   .then(task => console.log(task))
      
    //   .then(async (tasks) => {
    //     await Promise.all(
    //       tasks.map((task) => {
    //         return fetch(this.url() + "projects/" + task.project_data.id, {
    //           method: "GET",
    //           headers: this.header(),
    //         })
    //           .then((response) => response.json())
    //           .then((response) => console.log(response));
    //       })
    //     );
    //   });

    // fetch(this.url() + "tasks/search", {
    //   method: "GET",
    //   headers: this.header(),
    //   mode: 'cors'
    // })
    //   .then((response) => response.json(),)
    //   .then(tasks => {
    //         return tasks.filter((task) => task.rel_type === "project");
    //     })
    //   .then(async tasks => {
    //     await Promise.all(tasks.map((task) => {
    //         return fetch(this.url() + "tasks/" + task.id, {
    //                     method: "GET",
    //                     headers: this.header(),
    //                     mode: 'cors'
    //                   })
    //             .then(response => response.json())
    //             .then((response) => console.log(response))
    //     }));
    // });
    fetch(this.url() + "tasks/search", {
          method: "GET",
          headers: this.header(),
          mode: 'cors'
        })
          .then((response) => response.json(),)
          .then((tasks) => this.setState({ tasks: tasks.filter( task => task.rel_type === "project" )}));
  }

  render() {
    if (this.state.tasks.length > 0) {
      return (
        <div>
          <Navbar />
          {/* <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Proyecto</th>
                <th>Tarea</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map((task) => {
                  if(task.rel_type === "project"){
                    return (
                        <TableRow
                          key={task.id}
                          name={task.name}
                          description={task.description}
                          startDate={task.startdate}
                        />
                      );
                  }                
              })}
            </tbody>
          </table> */}
          <div className="container mt-4">
            <div className="row">
              <div className="col-auto mb-3">
                {this.state.tasks.map((task) => {
                  if (task.rel_type === "project") {
                    return (
                      <TableRow
                        key={task.id}
                        name={task.name}
                        description={task.description}
                        startDate={task.startdate}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p className="text-center">Cargando projectos...</p>;
    }
  }
}
export default Projects;
