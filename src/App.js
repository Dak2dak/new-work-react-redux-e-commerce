import { Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar';
import './App.css';
import GoBack from './components/layout/GoBack';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
      <GoBack />
    </div>
  );
}

export default App;
