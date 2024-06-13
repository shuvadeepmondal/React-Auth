import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './components/Form'


function App() {
  
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center '> 
         <Routes>
          <Route path ='Form' element={<Form/>}/>
         </Routes>
      </div>
      <div>

      </div>
    
   
    </div>
  )
}

export default App
