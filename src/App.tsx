import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Elements from "./pages/Elements";
import ElementLink from "./pages/ElementLink";

function App() {
  return (
    <div className="" role="application">
      <Router>
        <Layout>
          <Routes>
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
