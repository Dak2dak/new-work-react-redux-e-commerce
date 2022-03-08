import { Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
      {/* <div class="fixed__button">
        <button className='go__back--btn'>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div> */}
    </div>
  );
}

export default App;
