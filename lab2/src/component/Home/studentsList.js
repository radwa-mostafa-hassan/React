import { NavLink } from "react-router-dom";

let studentsList = ({ students }) => {
  let renderStudents = () => {
    return students.map((student) => {
      let uri = "/student/".concat(student.name);
      return (
        <tr>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>
            <NavLink to={uri} value="Details" className="btn btn-info">
              Details
            </NavLink>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container-sm my-5 p-2 border rounded-3 bg-light">
      <table className="table table-striped|sm|bordered|hover|inverse table-inverse table-responsive">
        <thead className="thead-inverse|thead-default">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderStudents()}</tbody>
      </table>
    </div>
  );
};

export default studentsList;