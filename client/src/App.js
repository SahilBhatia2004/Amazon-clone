import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/Newnavbar/Newnav';
import Maincomp from './components/Home/Maincomp';
import Signin from './components/Sigup_signin/Signin';
import Signup from './components/Sigup_signin/Signup';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
     <Navbar/>
     <Newnav/>
     <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
     </Routes>
     
    </>
  );
}

export default App;
