import Index from "./sections/Index";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsAndServices from "./sections/TermsAndServices";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Index />} />
          <Route path="/terms-and-services" element={<TermsAndServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;