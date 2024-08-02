import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Account from "./Account";

function App() {
  return (
    <>
      <Routes>
		<Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}
export default App;
