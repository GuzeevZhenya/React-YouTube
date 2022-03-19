import React from 'react';
import { NavLink } from 'react-router-dom';

import './PageNotFound.css'

export default function PageNotFound() {
	return (
		<div className='pagesNotFound'>
			<h2 className='pagesNotFound__title'>Ooops! Page not found.</h2>
			<h1 className='pagesNotFound__error-title'>404</h1>
			<p className='pagesNotFound__info'>We can't find the page you're looking for </p>
			<NavLink to={`/Main`} className="pagesNotFound__button">
          Back main pages
      </NavLink>
		</div>
	)
}
