import React, { FC, useEffect, useState } from 'react';
import './UserInformation.scss';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import apiService from '../../services/api.service';

interface UserInformationProps { }

const UserInformation: FC<UserInformationProps> = () => {

  const [userInfo, setUserInfo] = useState<any>({})
  const location = useLocation();
  const userId = location.state;

  useEffect(() => {
    loadInfo();
  }, [userId])

  const navigate = useNavigate();
  const goToUserPosts = () => {
    navigate('posts', { state: userInfo.id })
  }


  const loadInfo = () => {
    apiService.getUserInfo(userId ? userId : '')
      .then((res) => {
        setUserInfo({ ...res.data });
      }).catch((err) => { alert("user info is not exist"); });

  }
  return <div className="UserInformation d-flex justify-content-center align-items-center">
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6 user-details">
          <h5>User Information</h5>
          <ul>
            <li>id: {userInfo.id}</li>
            <li>name: {userInfo.name}</li>
            <li>username: {userInfo.username}</li>
            <li>email: {userInfo.email}</li>
            <li>phone: {userInfo.phone}</li>
            <li>website: {userInfo.website}</li>
            {/* השורות האלה לפעמים עובדות ולפעמים עושות בעיה */}
            {/* <li>address: {userInfo.address.street}{userInfo.address.suite}{userInfo.address.city}</li> 
            <li>company: {userInfo.company.name}</li> */}

            <button className='btn' onClick={goToUserPosts}>Show posts</button>
            <br></br>
            <Link to="/user-list" className='return-link'>return users list</Link>
          </ul>

          <Outlet></Outlet>
        </div>
      </div>
    </div>
  </div>
};

export default UserInformation;
