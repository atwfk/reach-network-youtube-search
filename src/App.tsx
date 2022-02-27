import React from "react";
import type { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./modules/HomePage";

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<h1>Search Page</h1>} />
      </Routes>
    </div>
  );
};

export default App;
