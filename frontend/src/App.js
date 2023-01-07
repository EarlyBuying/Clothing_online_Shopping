import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/MainComponents/Home/Home";
import Add from "./Components/Pages/AddProducts/Add";
import View from "./Components/Pages/ViewProducts/View";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="add" element={<Add />} />
            <Route path="view" element={<View />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
