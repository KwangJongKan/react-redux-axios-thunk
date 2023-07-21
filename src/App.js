
import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './pages/user/UserList'
import UserEdit from './pages/user/UserEdit'
import UserRegist from './pages/user/UserRegist'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >  
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/user/edit/:id" element={<UserEdit />} />
            <Route path="/user/regist" element={<UserRegist />} />
            
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
