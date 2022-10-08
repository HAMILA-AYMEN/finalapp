import './App.css';
import Navbar from './components/Navbar'
import AddUser from './pages/AddUser';
import Users from './pages/Users';
import EditUser from './pages/EditUser';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/users' element={<Users />} />
  <Route path='/adduser' element={<AddUser />} />
  <Route path='/edit' element={<EditUser />} />
</Routes>
    </div>
  );
}

export default App;
