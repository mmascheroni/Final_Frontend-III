import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Context from './Components/utils/global.context';

function App() {
  return (
      <div className="App">
        <Context>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dentist/:id' element={<Detail />} />
            <Route path='/favs' element={<Favs />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer/>
        </Context>
      </div>
  );
}

export default App;
