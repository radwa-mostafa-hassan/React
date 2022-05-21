import Navbar from "./Navbar";

let Error = () => {
  return (
    <div>
      <Navbar />
      <p
        className="text-center text-primary my-5"
        style={{ fontSize: "125px" }}
      >
        Not Found 404
      </p>
    </div>
  );
};

export default Error;