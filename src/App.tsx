import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TwitterAutomationPage from './pages/TwitterAutomationPage';
import EmailAutomationPage from './pages/EmailAutomationPage';
import WebDesignPage from './pages/WebDesignPage';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <>
      <div className="background-overlay" />
      <div className="content-wrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/twitter-automation" element={<TwitterAutomationPage />} />
            <Route path="/services/email-automation" element={<EmailAutomationPage />} />
            <Route path="/services/web-design" element={<WebDesignPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;