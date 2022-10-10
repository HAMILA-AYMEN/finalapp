import './App.css';
import Navbar from './components/Navbar'
import AddUser from './pages/AddUser';
import Users from './pages/Users';
import EditUser from './pages/EditUser';
import Home from './pages/Home';
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes,Navigate } from 'react-router-dom';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">

<Routes>
{user && <Route path="/" exact element={<Navbar />} />}
  <Route path="/signup" exact element={<Signup />} />
  <Route path="/login" exact element={<Login />} />
  <Route path='/users' element={<><Navbar /><Users /></>} />
  <Route path='/adduser' element={<><Navbar /><AddUser /></>} />
  <Route path='/edit' element={<><Navbar /><EditUser /></>} />
  <Route path="/" element={<Navigate replace to="/login" />} />
</Routes>
    </div>
  );
}

export default App;
