import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarList from "./pages/CarsList";
import NewCar from "./pages/NewCar";
import EditCar from "./pages/EditCar";
import "./App.css"
import Login from "./components/Login";
import { useEffect, useState } from "react";
import NewOwner from "./pages/NewOwner";

function App() {
  const [loginstate, setLoginState ] = useState(false);
  
  useEffect(()=>{
    let token = localStorage.getItem("token");
    if(token.length > 0){
      setLoginState(true)
    }else{
      setLoginState(false)
    }
  },[])

  return (
    <div className="App">
     <div className="navBarDiv">
      <nav style={{display:"inline"}}>
        <ul className="navList">
          <li className="navListItem"><Link to="/" >HOME</Link> </li>
          <li className="navListItem"><Link to="/cars" >CARS LIST</Link> </li>
         {loginstate && <li className="navListItem"><Link to="/cars/new">CREATE NEW CAR</Link> </li>}
          { loginstate  ? <li className="navListItem"><Link to="/login" onClick={()=>{
            localStorage.setItem("token", "");
            setLoginState(false);
          }} >LOGOUT</Link> </li> :<li className="navListItem"><Link to="/login" >LOGIN</Link> </li> }
          <li className="navListItem"><Link to="/register" >REGISTER</Link> </li>
        </ul>
      </nav>
     </div>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars">
          <Route path="" element={<CarList/>} />
         {
          loginstate && <> <Route path="new" element={<NewCar/>}/>
          <Route path="edit" element={<EditCar/>} />
          
        <Route path=":id/owner/new" element={<NewOwner/>} />
          </>
          
         }
        </Route>
        <Route path="/login" element={<Login onLogin={()=>{setLoginState(true)}}/>} />
      </Routes>

    </div>
  );
}

export default App;
