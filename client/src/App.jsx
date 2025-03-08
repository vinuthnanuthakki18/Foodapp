import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/inside/Dashboard'
import Profile from './components/inside/Profile';
import SecureLogin from './components/SecureLogin';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/logout" element={<SecureLogin/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
