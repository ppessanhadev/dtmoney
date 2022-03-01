import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<h1>Not found man</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}