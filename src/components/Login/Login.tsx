import React, { FC } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

interface LoginProps { }

const Login: FC<LoginProps> = () => {

  const navigate = useNavigate();

  const goToAddUser = () => {
    navigate('user-details');
  }

  const goToUserList = () => {
    navigate('user-list');
  }

  return <div className="Login">
    <h1 id="title">Users Website</h1>
    <h5>nice to see you:)</h5>
    <button className="btn" onClick={goToAddUser}>Add User</button>
    <button className="btn" onClick={goToUserList}>Users List</button>

  </div>
};

export default Login;
