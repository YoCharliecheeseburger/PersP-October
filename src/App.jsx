import "./App.css";
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Pages/home";
import { Create } from "./Pages/create";
import { Plan } from "./Pages/plan";
import { Spent } from "./Pages/spent";

function App() {
  const [tableRows, setTableRows] = useState([]);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={<Create tableRows={tableRows} setTableRows={setTableRows} />}
          />
          <Route path="/plan" element={<Plan tableRows={tableRows} />} />
          <Route path="/spent" element={<Spent tableRows={tableRows} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
