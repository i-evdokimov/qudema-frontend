import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // <--- ИМПОРТ

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-dark">
      <ScrollToTop />
      
      {/* НАСТРОЙКА УВЕДОМЛЕНИЙ (TOASTS) */}
      <Toaster 
        position="top-center"
        toastOptions={{
          className: '',
          style: {
            border: '3px solid #1e293b', // Черная рамка
            padding: '16px',
            color: '#1e293b',
            fontWeight: 'bold',
            borderRadius: '0px', // Острые углы
            boxShadow: '4px 4px 0px 0px #000', // Тень
            background: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#10b981', // Зеленый
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444', // Красный
              secondary: 'white',
            },
          },
        }}
      />

      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;