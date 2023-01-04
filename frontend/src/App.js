import React from "react";
import './app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./NewCompo/home/Home";
import List from "./NewCompo/list/List";
import Login from "./NewCompo/login/Login";
import New from "./NewCompo/new/New";
import Single from "./NewCompo/single/Single";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AddItems from "./Components/AddItems.js/AddItems";
// import Login from "./Components/Login/Login";
// import NavBar from "./Components/NavBar/NavBar";
// import Register from "./Components/Register/Register";

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       // element: <Login />,
//     },
//     {
//       path: "/add",
//       // element: <Register />,
//     },
//     {
//       path: "/addItem",
//       element: <AddItems />,
//     },
//   ]);
//   return (
//     <div>
//       {/* <NavBar /> */}
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;
