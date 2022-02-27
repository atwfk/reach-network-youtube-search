import React from "react";
import type { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./modules/HomePage";
import Layout from "./modules/shared/HOC/Layout";

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<h1>Search Page</h1>} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
