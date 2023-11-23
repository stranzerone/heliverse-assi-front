import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { NavLink } from 'react-router-dom';
import { fetchedData } from '../Axios/fetch';
import Card from '../Card/Card';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    // Use the original data if the input is empty
    const newData = inputValue.trim() === ''
      ? data
      : data.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(inputValue.toLowerCase())
        )
      );

    setFinalData(newData);
  };

  useEffect(() => {
    // Fetch initial data
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchedData();
        setData(response);
        setFinalData(response); // Update finalData with the complete data
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="search-bar d-flex">
        {/* If the Team NavLink is not being used, you can remove it */}
        <div className='col-3'>
        <NavLink to="/team">
          <button >Team</button>
        </NavLink>
        </div>
        <div className='col-6 flex-1'>
        <input
          className='inputSearch md-col-4 col-8'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        </div>
        <div className='col-3'>
          <NavLink to="/addUser">
            <button className='addUserButton'>Add</button>
          </NavLink>
        </div>
      </div>

      {/* Display loading or error messages if needed */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div>
        {/* Send either filtered data or the entire data set to the Card component */}
        <Card users={finalData} />
      </div>
    </div>
  );
};

export default SearchBar;
