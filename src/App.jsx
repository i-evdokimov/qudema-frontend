import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QudemaBuddy from './components/QudemaBuddy';

// Страницы
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail'; // ПРОВЕРЬ, ЧТО ФАЙЛ ТАК НАЗЫВАЕТСЯ
import About from './pages/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <div className="flex flex-col min-h-screen font-sans">
          <Navbar />
          <Toaster position="top-right" />
          
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/courses" element={<Courses />} />
              {/* ВОТ ЭТА СТРОКА КРИТИЧЕСКИ ВАЖНА */}
              <Route path="/course/:id" element={<CourseDetail />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          <QudemaBuddy />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;