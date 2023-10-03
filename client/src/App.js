import './Store.css';
import Home from './Component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Home/Header'
import WishList from './Component/WishList/WishList';
import Card from './Component/Card/Card';
import Footer from './Component/Home/Footer'


function App() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="WishList" element={ <WishList/> } />
        <Route path="Card" element={ <Card/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
