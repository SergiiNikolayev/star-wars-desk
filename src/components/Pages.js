import React from 'react';
import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types';

const Pages = (props) => {
  let currentLink = props.history.location.pathname;
  const renderHtml = (
    <div>
      <Link to={'/'} >To Main page</Link>
      <h1>{currentLink}</h1>
    </div>);
  const unpackData = (<div>Z</div>);

  switch (currentLink) {
    case '/planets':
      console.log(currentLink);
      return (renderHtml);
    case '/spaceships':
      console.log(currentLink);
      return (renderHtml);
    case '/vehicles':
      console.log(currentLink);
      return (renderHtml);
    case '/people':
      console.log(currentLink);
      return (renderHtml);
    case '/films':
      console.log(currentLink);
      return (renderHtml);
    case '/species':
      console.log(currentLink);
      return (renderHtml);
  }
  return (
    currentLink
  );
};
//Pages.propTypes = {};
export default Pages;
