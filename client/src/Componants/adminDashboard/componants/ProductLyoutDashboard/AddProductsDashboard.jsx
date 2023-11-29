import axios from "axios";
import "../../styleComponants/addProductsDashboard.scss";
import { useEffect, useState } from "react";


function AddProductsDashboard() {

  const [title, setTitle] = useState("");
  const [reference, setReference] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState(null);




  useEffect(() => {
  }, [title]);
  async function addProduct(e) {
    e.preventDefault();
    try {

      const data = {
        title,
        reference,
        description,
        price,
        img,
      };
      console.log(data);
      const response = await axios.post(
        "http://localhost:8080/admin/products",
        data
      );
      console.log(response, "addProduct");
    } catch (error) {
      console.log("offff");
    }
    clearData();
  }

  function clearData() {
    setTitle("");
    setReference("");
    setDescription("");
    setPrice("");
    setImg(null);
  }

  return (
    <div className="addProductsDashboard">
      <form action="" onSubmit={addProduct}>
        <label htmlFor="img">Image Product</label>
        <input type="img" onChange={(e) => setImg(e.target.value)} name="img" />

        <label htmlFor="product">Name Product</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="reference">Reference</label>
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />

        <label htmlFor="description">Descriptions</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>

        <label htmlFor="price">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductsDashboard;
