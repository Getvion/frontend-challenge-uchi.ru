import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Favorites, Main } from './pages';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='favorite' element={<Favorites />} />
    </Routes>
  </>
);
