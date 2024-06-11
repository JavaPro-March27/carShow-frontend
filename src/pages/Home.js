import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const navigateCarsList = () => {
    navigate("/cars");
  };


  // -----------------------------------------------------------------
  return (
    <div className="homeContainer">
      <h1>Welcome to our Car show Application</h1>
      <button
        onClick={() => {
          navigateCarsList();
        }}
      >
        Vist Our cars
      </button>
    </div>
  );
};

export default Home;
