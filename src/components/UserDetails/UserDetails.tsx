import React, { FC } from 'react';
import './UserDetails.scss';
import UserModel from '../../models/UserModel';
import { useFormik } from 'formik';
import * as Yup from 'yup';


interface UserDetailsProps {
  addNewUser: (user: UserModel) => void;
}

const UserDetails: FC<UserDetailsProps> = (props: UserDetailsProps) => {

  const userForm = useFormik({
    initialValues: new UserModel("", "", "", ""),
    onSubmit: (valueForm: UserModel) => {
      props.addNewUser(valueForm);
      userForm.resetForm();
    },
    validationSchema: Yup.object().shape({
      id: Yup.number().required('ID number is reqired').positive(),
      name: Yup.string().required('name is reqired').test('len', 'Must be minimum 2 characters', val => val.length >= 2),
      username: Yup.string().required('username is reqired').test('len', 'Must be minimum 2 characters', val => val.length >= 2),
      email: Yup.string().required('Email is required').email('Invalid email address')
    })
  }
  )

  return <div className='UserDetails'>
    <div className="container col-sm-6">
      <div className='card'>
        <div className='card-image'>
          <h1 className='card-heading'>ADD USER</h1>

        </div>

        <form onSubmit={userForm.handleSubmit} className='card-form'>

          <div className="input">
            <input type="number" className="input-field" name="id" value={userForm.values.id === null ? '' : userForm.values.id} onChange={userForm.handleChange} />
            <label htmlFor="id" className="input-label">ID number</label>
            {userForm.errors.id ? <small className="error-message">{userForm.errors.id}</small> : ''}
            {/* {userForm.errors.id && <small className="error-message">{userForm.errors.id}</small>} */}
          </div>

          <div className="input">
            <input type="text" className="input-field" name="name" value={userForm.values.name} onChange={userForm.handleChange} />
            <label htmlFor="name" className="input-label">name</label>
            {userForm.errors.name ? <small className="error-message">{userForm.errors.name}</small> : ''}
          </div>

          <div className="input">
            <input type="text" className="input-field" name="username" value={userForm.values.username} onChange={userForm.handleChange} />
            <label htmlFor="username" className="input-label">username</label>
            {userForm.errors.username ? <small className="error-message">{userForm.errors.username}</small> : ''}
          </div>

          <div className="input">
            <input type="email" className="input-field" name='email' value={userForm.values.email} onChange={userForm.handleChange} />
            <label htmlFor="email" className="input-label">Email</label>
            {userForm.errors.email ? <small className="error-message">{userForm.errors.email}</small> : ''}
          </div>
          <div className='action'>
            <button type="submit" className="action-button" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
};

export default UserDetails;
