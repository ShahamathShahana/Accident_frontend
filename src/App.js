import Header from './Components/Layout/Header';
import Login from './Components/Auth/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/DashBoard/Home';
import Register from './Components/AccidentReport/Register';
import ViewReport from './Components/AccidentReport/ViewReport';
import { Auth } from './Components/Auth/Auth';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Auth />} />
        <Route path='/login' element={<Login />}  />
        <Route path='/home' element={<Home />} />
        <Route path='/reportregister' element={ <Register />} />
        <Route path='/viewreport' element={<ViewReport />} />
      </Routes>
      {/* <ViewReport /> */}
    </>
  );
}

export default App;
