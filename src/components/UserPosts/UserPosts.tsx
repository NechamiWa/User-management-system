import React, { FC, useEffect, useState } from 'react';
import './UserPosts.scss';
import apiService from '../../services/api.service';
import MyModal from '../MyModal/MyModal';
import { useLocation } from 'react-router-dom';

interface UserPostsProps { }

const UserPosts: FC<UserPostsProps> = () => {

  const location = useLocation();

  let userId = location.state;
  const [userPosts, setUserPosts] = useState<any>([]);
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    loadPosts();
  }, []);


  const loadPosts = () => {
    apiService.getPosts().then((res) => {
      console.log(res.data);
      let filtered = res.data.filter((u: any) => u.userId == userId);
      console.log(filtered);
      setUserPosts(filtered);
      console.log(userPosts);
    })
  }

  return <div className="UserPosts ">
    {userPosts.map((post: any, index: number) => {
      return <button className='seeBtn' onClick={() => setIndex(index)}>see post {index+1}</button>
    })}
    {index != -1 ? <MyModal title={"post " + userPosts[index].id + " - " + userPosts[index].title} btnInscription="confirm" funcOnClose={() => setIndex(-1)} funcOnConfirm={() => setIndex(-1)}><p>{userPosts[index].body}</p></MyModal> : ''}
  </div>
};

export default UserPosts;