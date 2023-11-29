import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { IoCloseCircleSharp } from "react-icons/io5";

function DetailsProduct({ product, setRefresh }) {
  const [view, setView] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [reference, setReference] = useState(product.reference);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [img, setImg] = useState(null);

  async function deleteProduct() {
    try {
      const response = await axios.delete(
        `http://localhost:8080/admin/products/${product.id}`
      );

      setRefresh();
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  }

  async function updateProduct(e) {
    e.preventDefault();
    try {
      const data = {
        title,
        reference,
        description,
        price,
        img,
      };
      const response = await axios.put(
        `http://localhost:8080/admin/products/${product.id}`,
        data
      );
      clearData();
      setRefresh();
      setView(!view);
    } catch (error) {
      console.log("Error updating product:", error);
    }
  }

  function clearData() {
    setTitle("");
    setReference("");
    setDescription("");
    setPrice("");
    setImg(null);
  }

  return (
    <>
      {view ? (
        <div className="updateDashboard">
          <IoCloseCircleSharp
            className="closeUpdate"
            onClick={() => setView(!view)}
          />

          <form action="" onSubmit={updateProduct}>
            <label htmlFor="img">Image Product</label>
            <input
              type="img"
              onChange={(e) => setImg(e.target.value)}
              name="img"
            />

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

            <button type="submit">Update Product</button>
          </form>
        </div>
      ) : null}

      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.reference}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
          <FaTrash
            style={{ cursor: "pointer" }}
            onClick={() => deleteProduct()}
          />
        </td>
        <td>
          <GrUpdate
            style={{ cursor: "pointer" }}
            onClick={() => setView(!view)}
          />
        </td>
      </tr>
    </>
  );
}

export default DetailsProduct;
