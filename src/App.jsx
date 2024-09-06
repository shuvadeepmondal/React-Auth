import { Form, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import './App.css'
// import Form from './components/Form'
// import Register from './components/Register'
// import ForgotPass from './components/Forgotpass'


// function App() {
  
//   return (
//     <div className='w-full h-screen'>
//       <div className='w-full flex items-center justify-center '>  
//          <Router>
//           <Routes>
//           <Route path ='/Form' element={<Form/>}/>
//           <Route path ='/Register' element={<Register/>}/>
//           <Route path ='/Forgotpass' element={<ForgotPass/>}/>
//           </Routes>
//         </Router>
//       </div>
   
//     </div>
//   )
// }

// export default App
import Navbar from './components/NavB';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form'  


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Form />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
