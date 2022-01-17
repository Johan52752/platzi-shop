import React from "react";
import Layout from "../containers/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecoveryPassword from "../containers/recoveryPassword/RecoveryPassword";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import NewPassword from "../containers/new-password/NewPassword";
import Login from "../pages/login/Login";
import MyAccount from "../pages/myaccount/MyAccount";
import MyOrders from "../pages/myorders/MyOrders";
import MyOrder from "../pages/myorder/MyOrder";
import SendEmail from "../pages/send-email/SendEmail";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route
              exact
              path="/recovery-password"
              element={<RecoveryPassword />}
            />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/my-orders" element={<MyOrders />} />
            <Route exact path="/my-order" element={<MyOrder />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
