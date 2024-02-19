import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import UserInformation from './components/UserInformation/UserInformation';
import Login from './components/Login/Login';
import UserPosts from './components/UserPosts/UserPosts';
import PageNotFound from './components/PageNotFound/PageNotFound';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const cc = () => { }

  return <div>
    <Router>
      <Routes>
        <Route path='' element={<Login />}></Route>
        <Route path='user-details' element={<UserDetails addNewUser={cc}></UserDetails>}></Route>
        <Route path='/user-list' element={<UserList />}>  </Route>
        <Route path='/user-information' element={<UserInformation />}>
          <Route path='posts' element={<UserPosts />}></Route>
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  </div>
}

export default App;
