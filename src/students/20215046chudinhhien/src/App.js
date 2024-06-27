import './App.css';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { Index } from './Pages/Index';
import { Bai1va7 } from './Pages/Bai1va7';
import { Bai2 } from './Pages/Bai2';
import { Bai3va4 } from './Pages/Bai3va4';
import Bai5 from './Pages/Bai5';
import Bai6 from './Pages/Bai6';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', clearLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/bai1_7' element={<Bai1va7 />} />
          <Route path='/bai2' element={<Bai2 />} />
          <Route path='/bai3_4' element={<Bai3va4 />} />
          <Route path='/bai5' element={<Bai5 />} />
          <Route path='/bai6' element={<Bai6 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
