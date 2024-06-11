import { useEffect, useState } from "react";
import CarListItem from "../components/CarListItem";
import "./CarsList.css";
import axios from "axios";



const CarList = () => {
  const [cars, setCars] = useState([]);

  const getCarsData = async () => {
    let res = await axios.get("http://localhost:9092/api/v1/car/list");
    let { data } = await res;
    if (data) {
      setCars(data);
    }
  };

  useEffect(() => {
    getCarsData();
  }, []);
 
  const sortbyIDAsc=()=>{
   const updated = cars.sort((car1, car2)=>{
      return car1.id - car2.id;
    });
    console.log(updated);
    setCars([...updated]);
  }
  const sortbyIdDsc=()=>{
   const updated = cars.sort((car1, car2)=>{
      return car2.id - car1.id;
    });
    console.log(updated)
    setCars([...updated]);
  }

  return (
    <div className="carListContainer">
      <button onClick={()=>{
sortbyIdDsc();
      }}>Sort by ID Dsc</button>
          <button onClick={()=>{
sortbyIDAsc();
      }}>Sort by ID Asc</button>
  
      {cars.length > 0
        ? cars.map((car) => <CarListItem key={car.id} car={car} />)
        : "No car to Show"}
    </div>
  );
};

export default CarList;
