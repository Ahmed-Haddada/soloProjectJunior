import { useContext, useEffect } from "react";
import { MyContext } from "../../../../context.jsx";
import DetailsProduct from "../ProductLyoutDashboard/productsDetails.jsx";

function UpdateProducts({setRefresh}) {
  const { products } = useContext(MyContext);


  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Reference</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((ele) => (
            <DetailsProduct setRefresh={setRefresh} key={ele.id} product={ele} />
          ))}
      </tbody>
    </table>
  );
}

export default UpdateProducts;
