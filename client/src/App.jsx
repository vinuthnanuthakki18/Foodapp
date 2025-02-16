import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Base from './components/Base'
function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Base/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
