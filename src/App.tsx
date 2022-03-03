import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./modules/HomePage";
import Layout from "./modules/shared/HOC/Layout";
import SearchPage from "./modules/SearchPage";

const App: FC = (): ReactElement => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Layout loading={loading}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/search"
            element={<SearchPage setLoading={setLoading} loading={loading} />}
          />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
