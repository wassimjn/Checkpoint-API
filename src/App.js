
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Navb from './components/Nav';
import UserList from './components/UserList';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Navb/>
         <Routes>
          <Route path='/Menu' element={<Menu/>}/>
            <Route path={'/UserList'}element={<UserList/>}/>
            <Route path={'/Details/:guestId'} element={<Details/>}/>
        </Routes> 
    </div>
  );
}

export default App;
