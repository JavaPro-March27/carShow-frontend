import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarForm = () => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    color: "",
    registerNumber: "",
    year: "",
    price: "",
    owner:null
  });
  const navigate = useNavigate();

  const handleOnchange = (updatedCar) => {
     setNewCar(updatedCar);
  };

 const createNewCar = async ()=>{
    let token = localStorage.getItem("token");
    let res = await axios( {method:"post", url:"http://localhost:9092/api/v1/car/create", data:{...newCar} ,   headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
        'Access-Control-Allow-Origin':"http://localhost:3000",
    
      },  });

    console.log(res);
    navigate("/cars");
 }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50vw",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "5px",
        }}
      >
        <p>Brand </p>
        <input
          style={{ width: "450px" }}
          value={newCar.brand}
          onChange={(e) => {
            handleOnchange({...newCar, brand: e.target.value});
          }}
        />
      </div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "5px",
        }}
      >
        <p style={{ display: "inline" }}>Model </p>
        <input type="text" style={{ width: "450px" }} value={newCar.model}     onChange={(e) => {
                handleOnchange({...newCar, model: e.target.value});
          }} />
      </div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "5px",
        }}
      >
        <p style={{ display: "inline" }}>Color </p>
        <input style={{ width: "450px" }} value={newCar.color}     onChange={(e) => {
           handleOnchange({...newCar, color: e.target.value});
          }} />
      </div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "5px",
        }}
      >
        <p style={{ display: "inline" }}>Registration Number </p>
        <input style={{ width: "450px" }} value={newCar.registerNumber}     onChange={(e) => {
            handleOnchange({...newCar, registerNumber: e.target.value});
          }}/>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "5px",
        }}
      >
        <p style={{ display: "inline" }}>Year </p>
        <input style={{ width: "450px" }} value={newCar.year}     onChange={(e) => {
            handleOnchange({...newCar, year: e.target.value});
          }}/>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "5px",
        }}
      >
        <p style={{ display: "inline" }}>Price </p>
        <input style={{ width: "450px" }} value={CarForm.price}     onChange={(e) => {
         handleOnchange({...newCar, price: e.target.value});
          }}/>
      </div>
      <div>
        <button style={{ width: "200px", padding: "10px" }} onClick={()=>{createNewCar()}}>
          Create New Car
        </button>
      </div>
    </div>
  );
};

export default CarForm;
