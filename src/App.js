import { Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
