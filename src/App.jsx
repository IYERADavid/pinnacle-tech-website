import Index from "./sections/Index";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;