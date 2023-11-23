import './App.css';
import Team from './Components/Function/Team';
import UserForm from './Components/Function/addUser';
import Home from './Components/Home/Home'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="bg-dark all">
    <Routes>
      <Route path='/'  element={<Home/>} />
      <Route  path='/addUser' element={<UserForm />}  />
      <Route path='/team' element={<Team />} />
    </Routes> 
    </div>
  );
}

export default App;
