import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import ProductNav from './Productshop/ProductNav';
import Productshop from './Productshop/Productshop';
import Singleproduct from './Productshop/Singleproduct';
import ProductCart from './Productshop/ProductCart';
import Context from './Createcontext/Createcontext';


function App() {
  return (
    <div className="App">
<Context>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProductNav/>}>
      <Route index element={<Productshop/>}/>
      <Route exact path='/:productId' element={<Singleproduct/>}/>
      <Route path='/Productcart' element={<ProductCart/>}/>
      </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </Context>     
    </div>
  );
}

export default App;
