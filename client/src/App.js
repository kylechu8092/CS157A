import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Schema from './pages/Schema';
import Query from './pages/Query';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Query/>}/>
        <Route path="/schema" element={<Schema/>}/>
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
