import React from 'react';
import PropTypes from 'prop-types';
import "../Card/Card.css";
import { useDispatch, useSelector } from 'react-redux';
import { removeUserFromList } from '../Redux/Main';

const TeamCard = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList);

  const addUser = (userData) => {
    dispatch(removeUserFromList(userData));
  };

  return (
    <div className="box">
      {userList.map((userData) => (
        <div key={userData.id} className="profile-card">
          <img className="avatar" src={userData.avatar} alt="Avatar" />
          <div className="user-info">
            <h2>{userData.first_name} {userData.last_name}</h2>
            <h2>{userData.gender}</h2>
            <p>Email: {userData.email}</p>
            {/* Additional content display based on your data structure */}
            <p className="gender-icon">{/* Your content here */}</p>
          </div>
          <div>
            <button
            key={userData.id}
            className='removeButton'
              onClick={() => addUser(userData)}
              // Assuming addedToTeam is meant to control the button state
              
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

TeamCard.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      gender: PropTypes.string,
      email: PropTypes.string,
      // Add other properties based on your data structure
    })
  ).isRequired,
};

export default TeamCard;
