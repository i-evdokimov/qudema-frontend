import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  // Пока проверяем авторизацию, можно показать спиннер или ничего
  if (loading) return <div className="p-10 font-black uppercase">Проверка доступа...</div>;

  // Если юзера нет — кидаем на логин
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Если всё ок — рендерим дочерние роуты (через Outlet)
  return <Outlet />;
};

export default ProtectedRoute;