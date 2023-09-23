import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Favorites, Main } from './pages';

export const App = () => (
  <>
    <Header />
    <div className='container'>
      <Routes>
        <Route path='/frontend-challenge-uchi.ru/main' element={<Main />} />
        <Route path='/frontend-challenge-uchi.ru/favorite' element={<Favorites />} />
      </Routes>
    </div>
  </>
);
