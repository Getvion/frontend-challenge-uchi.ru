import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Favorites, Main } from './pages';

export const App = () => (
  <>
    <Header />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/favorite' element={<Favorites />} />
      </Routes>
    </div>
  </>
);

// todo подгрузка новых котов
// todo компонент загрузки
// todo мобильный адаптив
