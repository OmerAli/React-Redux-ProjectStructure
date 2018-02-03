import React from 'react';
import { Link } from 'react-router5';
// import { NavLink } from 'react-router5';

import PropTypes from 'prop-types';

// const FilterLink = ({ filter, children }) => {
//   console.log(filter === 'all');
//   console.log(filter === 'all' ? '/' : `/${filter}`);
// };

const FilterLink = ({ filter, children }) => {
  // console.log('123', {{ filter === 'completed' ? '/' : `/${filter}`}} );
  console.log('Selected Filter: ', filter);


  return (
    <Link
      routeName="show"
      routeParams={{ filter: '/' }}
    >
      {children}
    </Link>
  );
};


// <div>
//   <span>{filter}</span>
// </div>;
// <Link
//   to={filter === 'all' ? '' : filter}
//   activeStyle={{
//     textDecoration: 'none',
//     color: 'black'
//   }}
//   href
// >
//   {children}
// </Link>
//
//


// <NavLink
//   exact
//   to={filter === 'all' ? '/' : `/${filter}`}
//   activeStyle={{
//         textDecoration: 'none',
//         color: 'black'
//     }}
// >
//   {children}
// </NavLink>
FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;
