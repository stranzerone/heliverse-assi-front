// Team.js
import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import "./team.css";
import { NavLink } from 'react-router-dom';
import TeamCard from './TeamCard';
const Team = () => {
 
  const userList = useSelector((state) => state.users.userList);
  const [data, setData] = useState(null);
  const [newName, setTeamname] = useState('');

  useEffect(() => {
    setData(userList);
  }, [userList]);

  const team = (e) => {
    e.preventDefault();
    setTeamname(e.target.value);
  };

  return (
    <div className="profile-card-container bg-dark ">
    <div className='d-flex labelBox '>
    <div className='col-8'>
    <label htmlFor='team'>Name Your Team</label>
      <input className='nameInput' name='team' onChange={(e) => team(e)} />

    </div>
    <div className='col-4'>
    <NavLink to='/'><button className='backButton'>back</button></NavLink>

    </div>
   
    </div>
  
      {newName ? (
        <div>
          <h1 className='teamName'>{newName}</h1>
        </div>
      ) : (
        <div>
          <h2 className='teamName'>name your team</h2>
        </div>
      )}
     
      {data ? (
      
      <TeamCard data={userList} />
       ) : (
        <p>Loading...</p>

      )}

    
    </div>
  );
};

export default Team;
