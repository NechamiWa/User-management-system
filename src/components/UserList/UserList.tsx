import React, { FC, useEffect, useRef, useState } from 'react';
import './UserList.scss';
import UserModel from '../../models/UserModel';
import apiService from '../../services/api.service';
import Loader from '../Loader/Loader';
import UserDetails from '../UserDetails/UserDetails';
import { Modal } from 'react-bootstrap';
import MyModal from '../MyModal/MyModal';
import { json } from 'stream/consumers';
import { number, string } from 'yup';
import Alert from 'react-bootstrap/Alert';
import { Outlet, useNavigate } from 'react-router-dom';


interface UserListProps { }

const UserList: FC<UserListProps> = () => {

  const searchRef = useRef<any>('');
  const [usersList, setUsersList] = useState<UserModel[]>([]);
  const [filteredUsersList, setFilteredUsersList] = useState<UserModel[]>([]);
  const [isLoaderDisplay, setIsLoaderDisplay] = useState(false);
  const [isModalDisplay, setIsModalDisplay] = useState(false);
  const [userId, setUserId] = useState<number>(0);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteFailed, setDeleteFailed] = useState(false);
  const [userAdded, setUserAdded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadUserList();
  }, [])

  const goToUserInfo = (userId:string) => {
    navigate(`/user-information`,{state:userId});
  }

  const loadUserList = () => {
    setIsLoaderDisplay(true);
    apiService.getUsers().then((res) => {
      let usersData = res.data.map((user: any, index: number) => {
        return (new UserModel(user.id, user.name, user.username, user.email));
      })
      setIsLoaderDisplay(false);
      setUsersList(usersData);
      setFilteredUsersList(usersData);
    })
  }

  const searchUserName = () => {
    let searchValue = searchRef.current.value.toLowerCase();
    console.log(searchValue);
    if (searchValue === '') {
      setFilteredUsersList([...usersList]);
    } else {
      let filtered = usersList.filter((user) => user.name.toLowerCase().startsWith(searchValue));
      setFilteredUsersList(filtered);
    }
  }


  const addNewUser = (user: UserModel) => {
    usersList.push(user);
    setUsersList([...usersList]);
    setFilteredUsersList([...usersList]);
    setUserAdded(true);
    setTimeout(() => {
      setUserAdded(false)
    }, 2000);
  };

  const deleteUserModal = (event: any) => {
    let id = event.target.id;
    setUserId(id);
    setIsModalDisplay(true);
  }

  const findIndexOfUser = (uId: string) => {
    for (let index = 0; index < usersList.length; index++) {
      if (usersList[index].id == uId)
        return index;
    }
    return -1;
  }

  const deleteUser = () => {
    apiService
      .deleteUser(userId)
      .then(res => {
        if (res.status == 200) {
          let index = findIndexOfUser(userId.toString());
          if (index != -1) {
            usersList.splice(index, 1);
            setUsersList([...usersList]);
            setFilteredUsersList([...usersList]);
            setDeleteSuccess(true);
          } else {
            setDeleteFailed(true);
          }
        }
      })
      .catch(err => {
        setDeleteFailed(true);
      })
      .finally(() => {
        setIsModalDisplay(false);
        setTimeout(() => {
          setDeleteSuccess(false);
          setDeleteFailed(false);
        }, 2000);
      });
  };

  const closeModal = () => {
    setIsModalDisplay(false);
  }

  return <div className='UserList'>
    <h1 id="title">Users</h1>
    <br />
    {deleteSuccess ? <Alert variant='success'>User successfully deleted.</Alert> : ''}
    {deleteFailed ? <Alert variant='danger'>Deletion failed</Alert> : ''}

    <br />
    <div className="container-fluid">
      <div className='row'>
        <div className="col-md-6  mt6">
          <UserDetails addNewUser={addNewUser}></UserDetails>
          {userAdded ? <p id="addedP">User added successfully</p> : ''}
          {isModalDisplay ? <MyModal title="Delete User" btnInscription="confirm" funcOnConfirm={deleteUser} funcOnClose={closeModal}><h5>Are you sure you want to delete?</h5></MyModal> : ''}
        </div>
        <br></br>
        <div className='col-md-6'>
          <form className='form-inline'>
            <i className="fas fa-search" aria-hidden="true"></i>
            <input id='search' ref={searchRef} onChange={searchUserName} className='form-control' type='text' placeholder='search' />
          </form>
          <br></br>
          {isLoaderDisplay ? <Loader></Loader> : ''}
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsersList.map((u: UserModel, index: number) => {
                return <tr>
                  <th scope="row">{u.id}</th>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td><button id={u.id} className='btn deleteBtn' onClick={(event) => deleteUserModal(event)}>Delete</button></td>
                  <td><button id={u.id} className='btn deleteBtn' onClick={()=>goToUserInfo(u.id)}>Details</button></td>
                </tr>
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Outlet></Outlet>
  </div>

};

export default UserList;
