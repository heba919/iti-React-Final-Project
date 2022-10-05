import './App.css';
import { MyNavbar } from './component/MyNavbar';
import { Myfooter } from './component/MyFooter';

import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {MyContact} from './Pages/Contact'
import { OneProduct } from './Pages/OneProduct';
import {ErrorPage} from './Pages/ErrorPage'


import { Navigate, Route, Routes } from "react-router-dom";



function App() {
  return (
    
    <div className="App">
      <MyNavbar />
      
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="about" element={<About />} />
        <Route path="contactus" element={<MyContact />}/>
        <Route path="oneproduct/:id" element={<OneProduct />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    
      <Myfooter />
    </div>
  );
}

export default App;
