import "./App.css";
import React from "react";
import Home from "./Home";
import { Category } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./route";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.categories} element={<Category />} />
        <Route path={routePath.invalid} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
