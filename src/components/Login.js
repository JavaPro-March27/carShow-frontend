import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({onLogin}) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleOnChange = (updateLoginDetails) => {
    setLogin({ ...updateLoginDetails });
  };

  const loginEvent = async () => {
    console.log(login);
    let res = await axios({method:"post", url: "http://localhost:9092/api/v1/member/login",    data:{
        "username":login.username,
        "password": login.password
    }});
    let {data} = await res;
    console.log(data);

    localStorage.setItem("token", JSON.stringify("Bearer "+data.token));
    onLogin();
    navigate("/cars")
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50vw",
        margin: "0 auto",
      }}
    >   <h1 style={{alignSelf:"center"}}>Welcome to Car Show Application</h1>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "5px",
        }}
      >
        <p>User Name </p>
        <input type="email"
          style={{ width: "450px" }}
          onChange={(e) => {
            handleOnChange({ ...login, username: e.target.value });
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
        <p>Password </p>
        <input
          type="password"
          style={{ width: "450px" }}
          onChange={(e) => {
            handleOnChange({ ...login, password: e.target.value });
          }}
        />
      </div>
      <div>
        <button
          style={{ width: "200px", padding: "10px" }}
          onClick={() => {
            loginEvent();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
