import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Admin from "./Componants/authentication/Admin.jsx";
import UserLogin from "./Componants/authentication/User_Login.jsx";
import UserSign from "./Componants/authentication/User_sign.jsx";
import Layout from "./Componants/Layout/Layout.jsx";
import Home from "./Componants/Pages/Home.jsx";
import Products from "./Componants/Pages/Products.jsx";
import About from "./Componants/Pages/About.jsx";
import DashboardLayout from "./Componants/adminDashboard/DashboardLayout.jsx";
import Dashboard from "./Componants/adminDashboard/componants/Dashboard.jsx";
import AddProductsDashboard from "./Componants/adminDashboard/componants/ProductLyoutDashboard/AddProductsDashboard.jsx";
import LayoutDashboardProduct from "./Componants/adminDashboard/componants/ProductLyoutDashboard/NavProduct.jsx";
import UpdateProducts from "./Componants/adminDashboard/componants/ProductLyoutDashboard/UpdateProducts.jsx";
import { MyContext } from "./context.jsx";
import OpsErr from "./Componants/adminDashboard/OpsErr.jsx";
import Signin from "./Componants/adminDashboard/componants/Signin.jsx";
import "./App.scss";
import axios from "axios";

function App() {
  const { setUser, setProducts, products } = useContext(MyContext);
  const [search, setSearch] = useState("");
  const [render, setRender] = useState(false);

  const setRefresh = () => {
    setRender(!render);
    console.log(render);
  };

  // const fetchSearch = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/admin/products/${search}`
  //     );
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error(`Error fetching data from ${url}:`, error);
  //   }
  // };

  // useEffect(()=>{
  //   fetchSearch()
  // },[search])

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user/getAll");
      setUser(response.data);
      // setRender(!render)
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };
  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/products");
      if (!search) {
        setProducts(response.data);
      } else {
        const filteredProducts = response.data.filter((ele) =>
          ele.title.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(filteredProducts);
      }
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };

  useEffect(() => {
    // fetchSearch();
    fetchUsers();
    fetchProduct();
  }, [render, search]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/register" element={<UserSign />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/adminLogin" element={<Admin />} />

        <Route path="admin" element={<DashboardLayout />}>
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="products" element={<LayoutDashboardProduct />}>
            <Route index element={<AddProductsDashboard />} />
            <Route
              path="updateProduct"
              element={<UpdateProducts setRefresh={setRefresh} />}
            />
            <Route path="deleteProduct" element={<AddProductsDashboard />} />
          </Route>
          <Route path="notification" element={<OpsErr />} />
          <Route path="profile" element={<OpsErr />} />
          <Route path="signin" element={<Signin />} />
        </Route>

        <Route path="/" element={<Layout setSearch={setSearch} />}>
          <Route index element={<Home search={search} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
