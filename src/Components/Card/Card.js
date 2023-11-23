
import React, { useEffect, useState } from 'react';
import "./Card.css";
import { useDispatch } from 'react-redux';

import { addUserToList } from '../Redux/Main';
import { delUser, fetchedData } from '../Axios/fetch';
const Card = ({users}) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
const [data,setData]=useState([]);
  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
const dispatch = useDispatch();
  // Slice the data array to get the items for the current page
  const currentPageItems = data.slice(startIndex, endIndex);
console.log(currentPageItems);
  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the page numbers to show in pagination
  const visiblePages = [];
  const totalPagesToShow = Math.min(totalPages, 5);
  const lastVisiblePage = Math.min(currentPage + Math.floor(totalPagesToShow / 2), totalPages);
  const firstVisiblePage = Math.max(lastVisiblePage - totalPagesToShow + 1, 1);

  for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
    visiblePages.push(i);
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

const addUser =(user)=>{
  dispatch(addUserToList(user))

}
const fetching=async()=>{
  try{
    const response = await fetchedData()
   if(users.length>0){
    setData(users)

   }else{
    setData(response)
   }

  }catch(error){
    console.error(error);
  }
}



useEffect(()=>{
fetching()
},[users,delUser])

const deleteUser = (id)=>{
  delUser(id)
  console.log(id)
}

return (
    <div className="container ">
      {currentPageItems.map((content, index) => (
        <div key={index} className="box ">
          <div className="profile-card md-col-6   ">
            <img className="avatar" src={content.avatar} alt="Avatar" />
            <div className="user-info">
              <h2>{content.first_name} {content.last_name}</h2>
              <h2>{content.gender}</h2>
              <p>Email: {content.email}</p>
            </div>
            <div className='buttons d-flex '>
              <button className='col-5'  onClick={() => addUser(content)}>Add To Team</button>
              <button onClick={() => deleteUser(content.id)} className='rightButton col-5'>Detete User</button>
            </div>
          </div>
        </div>
      ))}
      <div className="pagination ">
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;