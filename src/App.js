import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/plugins/animation.css';
import './assets/css/plugins/feature.css';
import './assets/css/plugins/magnify.min.css';
import './assets/css/plugins/slick.css';
import './assets/css/plugins/slick-theme.css';
import './assets/css/plugins/lightbox.css';
import './assets/css/style.css';
import ReceivedEmails from './Pages/ReceivedEmails';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './slices/userSlice';
import { useEffect } from 'react';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';

 

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated, error, isLoading, userData } = useSelector((state) => state.custom2)

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <>
    <Routes>
      
      <Route path="/" element={<div><Home /></div>} />
      <Route path="/loginsecret" element={<Login />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/RefundPolicy" element={<RefundPolicy />} />
      {/* <Route path="/receivedEmails" element={isAuthenticated ? <ReceivedEmails /> : <Navigate to="/" replace />} /> */}
      <Route path="/receivedEmails" element={<ReceivedEmails/>} />
    </Routes>
     <div className="enq-side-btn-icone ">

     <a href='https://wa.me/919358593003?text=I%20am%20Interested%20in%20Gaming%20Software.' target='_blank'  >
       <img style={{ width: "40px" }} src="./whatsapp3.webp.jpg" />
     </a>

   </div>
   </>
  );
}

export default App;
