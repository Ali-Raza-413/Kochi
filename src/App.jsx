import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import ApplyToCoach from "./pages/applytocoach/ApplyToCoach";
import FindaCoach from "./pages/findacoach/FindaCoach";
import TopCoaches from "./pages/ourdifferences/TopCoaches";
import SignUp from "./pages/join/SignUp";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/findacoach" replace />} />
          <Route path="/findacoach" element={<FindaCoach />} />
          <Route path="/applytocoach" element={<ApplyToCoach />} />
          <Route path="/ourdifferences" element={<TopCoaches />} />
          <Route path="/join" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
