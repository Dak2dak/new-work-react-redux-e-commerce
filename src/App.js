import { Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import GoBack from "./components/layout/GoBack";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./actions/products";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GoBack />
    </div>
  );
}

export default App;
