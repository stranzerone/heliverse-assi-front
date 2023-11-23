import React, { useState } from 'react';
import './userPage.css';
import { addUsers } from '../Axios/fetch';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [availability, setAvailability] = useState(false);
  const [domain, setDomain] = useState('');
  const [file, setFile] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.checked);
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    console.log('Submitted:', { firstName, lastName, gender, email, availability, domain });
  };



  const clicked =async()=>{
    try{
      addUsers(firstName,lastName,gender,email,domain,availability)
    }catch(error){
      console.error(error)
    }
  }
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append('image', file);

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </label>

        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange} required>
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>

        <label>
          Availability:
          <input
            type="checkbox"
            checked={availability}
            onChange={handleAvailabilityChange}
          />
        </label>

        <label>
          Domain:
          <select value={domain} onChange={handleDomainChange} required>
            <option value="" disabled>
              Select Domain
            </option>
            <option value="Management">Management</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Business Development">Business Development</option>
            <option value="UI Designing">UI Designing</option>
            <option value="Designing">Designing</option>

          </select>
        </label>
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>

        <button className='addButton' onClick={clicked} type="submit">Add User</button>
      </form>
    
    </div>
  );
};

export default UserForm;
