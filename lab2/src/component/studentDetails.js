import { useParams } from "react-router-dom";

let StudentDetails = () => {
  let { name } = useParams();

  return (
    <div className="container-sm bg-light my-5 p-5">
      <h3 className="text-center mb-4">Hello</h3>
      <p style={{ fontSize: "20px" }}>
        { name}
      </p>
    </div>
  );
};

export default StudentDetails;