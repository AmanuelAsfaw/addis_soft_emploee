import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from './screens/CreatePage';
import IndexPage from './screens/IndexPage';
import UpdatePage from './screens/UpdatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/update' element={<UpdatePage/>}/>
      </Routes>      
    </Router>
  );
}

export default App;
