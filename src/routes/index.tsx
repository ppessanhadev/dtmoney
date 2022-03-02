import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { GlobalStyle } from '@styles/global';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<h1>Not found man</h1>}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}