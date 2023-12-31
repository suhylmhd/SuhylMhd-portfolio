
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
