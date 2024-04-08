import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import { Route, Routes } from 'react-router-dom';
import Blogform from './component/Blogform';
import ViewDetails from './component/ViewDetails';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
      <Route path='/b'element={<Blogform/>}/>
      <Route path='/add'element={<ViewDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;
