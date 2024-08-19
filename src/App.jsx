//rafce
import React, { useState } from 'react'
//Cấu hình react router dom
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
//Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Homepage from './pages/Homepage';

const App = () => {

  const [state, setState] = useState();

  return (

    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='' element={<Homepage />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App