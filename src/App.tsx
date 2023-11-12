import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import ElementLink from "./pages/ElementLink";
import Elements from "./pages/Elements";

function App() {
  return (
    <div className="" role="application">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to={"/elements"} />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/element/:id" element={<ElementLink />} />
          </Routes>
        </Layout>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
