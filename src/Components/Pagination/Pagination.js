import React from "react";

export default function Pagination({ moviesPerPages, totalMovies, paginate }) {
  console.log(moviesPerPages);
  console.log(totalMovies);

	// console.log(moviesPerPages)
	// console.log(totalMovies)
	
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPages) ; i++){
		// console.log(totalMovies / moviesPerPages)
		if (i < 20) {
			pageNumbers.push(i);
		}
		
	}

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
