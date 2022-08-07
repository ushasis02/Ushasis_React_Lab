import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";


import "./App.css";
import ExpenseTracker from "./Components/ExpenseTracker";
import ShowData from "./Components/ShowList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowData />} />
          <Route path="/add" element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
