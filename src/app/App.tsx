import {Routes, Route} from 'react-router-dom';
import AuthPage from '../features/auth/pages/AuthPage';
import HomePage from '../features/home/pages/HomePage';
import MyAdPage from '../features/ads/pages/MyAdPage';
import ProfilePage from '../features/profile/pages/ProfilePage';
import AdDetailsPage from '../features/ads/pages/AdDetailsPage';
import ProductDetailsPage from '../features/home/pages/ProductDetailsPage';
import MessagePage from '../features/messages/pages/MessagePage';
import ErrorPage from '../features/error/pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />}/>
      <Route path="/" element={<HomePage />}/>
      <Route path="/my-ads" element={< MyAdPage/>}/>
      <Route path="/settings" element={<ProfilePage />}/>
      <Route path="/sell" element={<AdDetailsPage />}/>
      <Route path="/product-details" element={<ProductDetailsPage />}/>
      <Route path="/messages" element={<MessagePage />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
  );
}

export default App;
