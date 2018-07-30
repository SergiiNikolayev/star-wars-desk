import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import PropTypes from 'prop-types';

import {getServerData} from '../store/actions/actionTypes'

const Pages = (props) => {
  {/*console.log("click at " + currentLink + " | got to info from server to be passed")*/}
  let currentLink = props.history.location.pathname;
  const renderHtml = (
    <div>
      <Link to={'/'} >To Main page</Link>
      <h1>{currentLink}</h1>
      <button onClick={e => props.onGetServerData()}>Click</button>
    </div>);

  const unpackData = (whatToUnpack) => (<div>data from the server</div>);

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

const mapStateToProps = state => {
  return {...state}
};
const mapDispatchToProps = dispatch =>{
  return{
    onGetServerData: () => dispatch(getServerData()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
