import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import AdminHome from "./components/Home/AdminHome";
import Inventory from "./components/Logistics/Inventory";
import Create from "./components/Logistics/create";
import Edit from "./components/Logistics/edit";
import Footer from "./components/Footer";
import Fcreate from "./components/Feedback/Create";
import Allfeedbacks from "./components/Feedback/Allfeedbacks";
import Fedit from "./components/Feedback/Edit";
import Viewfeedback from "./components/Feedback/Viewfeedback";
import ViewReply from "./components/Feedback/ViewReply";
import BunglowandSafari from "./components/Home/BunglowandSafari";
import AllEvents from "./components/Events/Allevents";
import ECreate from "./components/Events/Create";
import EEdit from "./components/Events/Edit";
import Allsafarijeeps from "./components/Safari/Allsafarijeeps";
import SCreate from "./components/Safari/Create";
import SEdit from "./components/Safari/Edit";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MyAccount from "./components/MyAccount";
import EReport from "./components/Events/Report";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={[<MyAccount />]} />

          {/* Logistics */}
          <Route path="/adminhome" element={[<Header />, <AdminHome />]} />
          <Route path="/create" element={[<Header />, <Create />]} />
          <Route path="/edit/:id" element={[<Header />, <Edit />]} />
          <Route path="/inventory" element={[<Header />, <Inventory />]} />

          {/* Feedback */}
          <Route path="/fcreate" element={[<Fcreate />]} />
          <Route path="/fview" element={[<Header />, <Allfeedbacks />]} />
          <Route path="/fedit/:id" element={[<Header />, <Fedit />]} />
          <Route
            path="/feedback/get/:id"
            element={[<Header />, <Viewfeedback />]}
          />
          <Route path="/frview" element={[<ViewReply />]} />

          {/* Event */}
          <Route path="/event" element={[<Header />, <BunglowandSafari />]} />
          <Route path="/eventdisplay" element={[<Header />, <AllEvents />]} />
          <Route path="/eventcreate" element={[<Header />, <ECreate />]} />
          <Route path="/eventedit/:id" element={[<Header />, <EEdit />]} />
          <Route path="/ereport" element={[<Header />, <EReport />]} />

          {/* Safari */}
          <Route
            path="/safaridisplay"
            element={[<Header />, <Allsafarijeeps />]}
          />
          <Route path="/safaricreate" element={[<Header />, <SCreate />]} />
          <Route path="/safariedit/:id" element={[<Header />, <SEdit />]} />
        </Routes>
        <div>
          <br />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
