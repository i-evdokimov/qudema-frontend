import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesAPI } from '../services/api';
import { FiCheckCircle, FiPlayCircle, FiClock, FiTarget } from 'react-icons/fi';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await coursesAPI.getById(id).catch(() => null);
        // Если база пустая, подставим фейк для красоты (чтобы ты видел дизайн)
        if (response?.data) {
          setCourse(response.data);
        } else {
          setCourse({
            id: id,
            title: 'Fullstack JavaScript Developer',
            description: 'Стань востребованным разработчиком с нуля. Изучи React, Node.js, базы данных и DevOps. Полное погружение в профессию.',
            price: '5000',
            subject: 'Информатика',
            grade: '11',
            teacher: { name: 'Алексей Петров', bio: 'Tech Lead в Яндексе' },
            syllabus: ['Введение в Web', 'JavaScript Advanced', 'React & Redux', 'Node.js Backend', 'Дипломный проект']
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center">Загрузка...</div>;
  if (!course) return <div className="h-screen flex items-center justify-center">Курс не найден</div>;

  return (
    <div className="bg-white">
      {/* HEADER / HERO */}
      <div className="bg-gray-900 text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-primary-900 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex gap-3 mb-6">
               <span className="bg-primary-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{course.subject}</span>
               <span className="bg-gray-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{course.grade} класс</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{course.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">{course.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary-500/50">
                Записаться за {course.price} ₽
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-gray-700">
                Программа курса
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-8 grid sm:grid-cols-2 gap-6">
               <div className="flex gap-4">
                 <FiPlayCircle className="text-3xl text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="font-bold text-lg">50+ уроков</h4>
                   <p className="text-gray-500 text-sm">В записи и онлайн</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <FiTarget className="text-3xl text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="font-bold text-lg">Домашние задания</h4>
                   <p className="text-gray-500 text-sm">С проверкой куратора</p>
                 </div>
               </div>
            </div>

            {/* Syllabus */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold mb-6">Программа обучения</h2>
              <div className="space-y-4">
                {course.syllabus?.map((topic, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full font-bold text-gray-500 text-sm">{i+1}</span>
                    <span className="font-medium text-gray-900">{topic}</span>
                  </div>
                )) || <p>Программа уточняется</p>}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Sticky Price) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-gray-100">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">{course.price} ₽</div>
              <p className="text-gray-500 mb-6 text-sm">Единоразовый платеж</p>
              
              <button className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors mb-4">
                Купить курс
              </button>
              
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiCheckCircle className="text-green-500" />
                  <span>Доступ навсегда</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiCheckCircle className="text-green-500" />
                  <span>Чат с преподавателем</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;