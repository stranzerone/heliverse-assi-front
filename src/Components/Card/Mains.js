import React, { useEffect, useState } from 'react';
import CardComponent from './Card';
import { fetchedData } from '../Axios/fetch';
import { useParams } from 'react-router-dom';

export default function Products() {
  const [data, setData] = useState([]);
  const [filtered, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { cat } = useParams();

  const itemsPerPage = 20;
  const totalPagesToShow = 5; // Show 5 pagination buttons at a time

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetchedData();
        setData(response);
        // Initialize filtered state with all products
        setFilteredProducts(response);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the category
    const filteredProducts = data.filter((product) => product.category === cat);
    setFilteredProducts(filteredProducts);
    // Reset current page to 1 when the category changes
    setCurrentPage(1);
  }, [data, cat]);

  const totalItems = filtered.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filtered.slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    // Ensure the page is within the valid range
    const newPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(newPage);
  };

  const visiblePages = [];
  const lastVisiblePage = Math.min(currentPage + Math.floor(totalPagesToShow / 2), totalPages);
  const firstVisiblePage = Math.max(lastVisiblePage - totalPagesToShow + 1, 1);

  for (let page = firstVisiblePage; page <= lastVisiblePage; page++) {
    visiblePages.push(page);
  }

  return (
    <div>
      <div>
        <CardComponent data={currentProducts} />
      </div>

      <div className='d-flex pagination'>
        {visiblePages.map((page) => (
          <div
            key={page}
            className={`page ${page === currentPage ? 'active-page' : ''}`}
            onClick={() => handlePageClick(page)}
          >
            <button>{page}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
