import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import FindaCoach from "./pages/findacoach/FIndaCoach";
import ApplyToCoach from "./pages/applytocoach/ApplyToCoach";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/findacoach" replace />} />
          <Route path="/findacoach" element={<FindaCoach />} />
          <Route path="/applytocoach" element={<ApplyToCoach />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
