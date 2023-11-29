import { useContext, useState } from "react";
import { MyContext } from "../../context.jsx";
import HomeDetails from "./HomeDetails.jsx";
import { IoCloseCircleSharp } from "react-icons/io5";

import "./home.scss";
function Home({search}) {
  const { products } = useContext(MyContext);
  const [view, setView] = useState(false);
  const [item, setItem] = useState(false);
  item ? console.log(item) : console.log("no");

  return (
    <div className="home">
      <div className="container">
        {view ? (
          <div className="viewRapid">
            <IoCloseCircleSharp className="close"  onClick={()=>setView(!view)}/>

            <img src={item.img} alt="" />
            <div className="details">
              <h2>{item.title}</h2>
              <p>Reference: {item.reference}</p>
              <p>{item.description}</p>
              <p>{item.price}DT</p>
              <button>Add To Cart</button>
            </div>
          </div>
        ) : null}
        <HomeDetails products={{ products, view, setView, setItem ,search}} />
      </div>
    </div>
  );
}

export default Home;
