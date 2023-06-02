import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageAuthorization } from './components/PageAuthorization/PageAuthorization';
import { PageRegistration } from './components/PageRegistration/PageRegistration';
import { MainPage } from './components/MainPage/MainPage';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/auth' element={<PageAuthorization/>}></Route>
        <Route path='/reg' element={<PageRegistration/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
