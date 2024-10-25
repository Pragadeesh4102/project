import logo from './logo.svg';
import './App.css';
import Router from './Companents/Router';
import Context from './Companents/Hooks/UseContext';
import { Route, Routes } from 'react-router-dom';
import Get from './Companents/Crud/Get';
import Post from './Companents/Crud/Post';
import Update from './Companents/Crud/Update';
import List from './Companents/Crud1/List';
// import CounterApp from './Companents/Redux/CounterApp/Api';

function App() {
  return (
    <div className="App">
      {/* <Context> */}
       {/* <Router/> */}
       {/* </Context> */}
       {/* <Routes>
        <Route path='/get' element={<Get/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/update/:id' element={<Update/>} ></Route>
       </Routes> */}
       {/* <List/> */}
       {/* <CounterApp /> */}
       {/* <Api/> */}
    </div>
  );
}

export default App;
