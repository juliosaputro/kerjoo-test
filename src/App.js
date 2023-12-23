import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import TestGrid from "./pages/TestGrid";
import TestFlex from "./pages/TestFlex";
import TestSelect from "./pages/TestSelect";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/test-grid" />} />
        <Route exact path="/test-grid" element={<TestGrid />} />
        <Route exact path="/test-flex" element={<TestFlex />} />
        <Route exact path="/test-select" element={<TestSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
