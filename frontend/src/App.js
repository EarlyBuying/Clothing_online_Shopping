import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/MainComponents/Home/Home";
import Add from "./Components/Pages/AddProducts/Add";
import View from "./Components/Pages/ViewProducts/View";
import Update from "./Components/Pages/UpdateProducts/Update";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
