import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Etalase from "./pages/etalase/Etalase";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {productInputs, userInputs, categoryInputs} from "./formsource";
import {useContext} from "react";
import { AuthContext } from "./context/AuthContext";
import {userColumns, productColumns, categoryColumns} from "./datatablesource";

function App() {

  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login"/>;
  };

  const NotRequireAuth = ({children}) => {
    return currentUser ? <Navigate to="/login"/> : children;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RequireAuth><Home /></RequireAuth>}></Route>
            <Route path="login" element={<NotRequireAuth><Login /></NotRequireAuth>}></Route>
            <Route path="users">
              <Route index element={<RequireAuth><List columns={userColumns}/></RequireAuth>}></Route>
              <Route path=":userId" element={<RequireAuth><Single columns={userColumns} /></RequireAuth>}></Route>
              <Route path="new" 
              element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>}></Route>
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List columns={productColumns} /></RequireAuth>}></Route>
              <Route path=":productId" element={<RequireAuth><Single columns={productColumns}  /></RequireAuth>}></Route>
              <Route path="new" 
              element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>}></Route>
            </Route>
            <Route path="categories">
            <Route index element={<RequireAuth><List columns={categoryColumns} /></RequireAuth>}></Route>
              <Route path=":categoryId" element={<RequireAuth><Single columns={categoryColumns} /></RequireAuth>}></Route>
              <Route path="new" 
              element={<RequireAuth><New inputs={categoryInputs} title="Add New Category" /></RequireAuth>}></Route>
            
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
