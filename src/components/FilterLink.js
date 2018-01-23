import React from 'react';
import { Link } from 'react-router5';
// import { NavLink } from 'react-router5';

import PropTypes from 'prop-types';

const FilterLink = ({ filter, children }) => (
  <Link
    routeName="home"
    routeParams={filter === 'all' ? '/' : `/${filter}`}
  >
    {children}
  </Link>
);

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
