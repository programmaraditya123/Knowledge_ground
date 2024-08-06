import { Route, Routes } from 'react-router';
import './App.css';
import Homepage from './Pages/User/Homepage';
import Footer from './Pages/User/Footer';
import Dsa from './Pages/Parts/Dsa';
import OperatinSystem from './Pages/Parts/OperatinSystem';
import Math from './Pages/Parts/Math';
import Navbar from './Pages/User/Navbar';
import Python from './Pages/Parts/Python';
//import PublicDashboard from './Pages/User/PublicDashboard';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      {/* <Route path='/' element={<PublicDashboard/>}/> */}
      <Route path='/' element={<Homepage/>}/>
      <Route path='/python' element={<Python/>}/>
      <Route path='/math' element={<Math/>}/>
      <Route path='/dsa' element={<Dsa/>}/>
      <Route path='/operatingsystem' element={<OperatinSystem/>}/>
    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;
