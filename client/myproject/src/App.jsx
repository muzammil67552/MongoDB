import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';  // Assuming you have a Home page component
import About from './pages/About'; // Assuming you have an About page component
import Contact from './pages/Contact'; // Assuming you have a Contact page component
import Register from './pages/Register';
import Login from './pages/Login'; // Assuming you have a Login page component
import Error from './pages/Error';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />  {/* Navbar outside Routes to display on all pages */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />

        </Routes>
        
        <Footer />  {/* Footer outside Routes to display on all pages */}
      </BrowserRouter>
    </>
  )
}

export default App;