import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Sale from "./components/Main/Sale";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Pizza from "./pages/Pizza";
import Sushi from "./pages/Sushi";
import { useState } from "react";
import Modal from "./components/Modal";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Deliver from "./pages/Deliver";


function App() {
  const [openModal, setOpenModal] = useState(false)


  const handleChange = () => {
    setOpenModal(true)
  }

  return (
    <div className="app">
      <div className="asd"></div>
      <div className="container">
        <Modal setOpenModal={setOpenModal} openModal={openModal} />
        <Header handleChange={handleChange}/>
        <Routes>
          <Route path="/" element={<Main/>}/> 
          <Route path="/pizza" element={<Pizza/>}/> 
          <Route path="/sushi" element={<Sushi/>}/>
          <Route path="/sale" element={<Sale/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/deliver" element={<Deliver/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
