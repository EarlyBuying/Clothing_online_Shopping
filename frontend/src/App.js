import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/MainComponents/Home/Home";
import Add from "./Components/Pages/AddProducts/Add";
import View from "./Components/Pages/ViewProducts/View";
import Update from "./Components/Pages/UpdateProducts/Update";
import Customer from "./Components/Pages/Customer/Customer";
import Orders from "./Components/Pages/Orders/Orders";
import FeedBack from "./Components/Pages/FeedBack/FeedBack";
import Landing from "./Components/Pages/LandingPage/Landing";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Shop from "./Components/Pages/Shop/Shop";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/view" element={<View />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/feedback" element={<FeedBack />} />

            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/shop" element={<Shop />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
