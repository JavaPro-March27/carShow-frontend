import { Link } from "react-router-dom";

const CarListItem = ({car}) => {


  return (
    <div
      style={{
        width: "100vw",
        border: "1px solid black",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <ul style={{display:"flex", flexDirection:"row", justifyContent:"space-around", listStyle:"none"}}>
        <li>{car.id}</li>
        <li>{car.brand?.toUpperCase()}</li>
        <li>{car.model?.toUpperCase()}</li>
        <li>{car.color?.toUpperCase()}</li>
        <li>{car.year}</li>
        <li>{car.registerNumber}</li>
        <li>{car.owner ? car.owner?.firstname?.toUpperCase() : <Link to={"/cars/"+ car.id+"/owner/new"}>Add Owner</Link>}</li>
        <li>{car.price + "$"}</li>
      </ul>
    </div>
  );
};

export default CarListItem;
