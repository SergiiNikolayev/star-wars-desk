import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import PropTypes from 'prop-types';

import {getServerData} from '../store/actions/actionTypes'

const Pages = (props) => {

  let currentLocation = props.history.location.pathname;
  const renderHtml = (
    <div>
      <div>
        <Link to={'/'}>To Main page</Link>
        <h1>{currentLocation}</h1>
        <button onClick={e => props.onGetServerData()}>Click</button>
        <a href={props.toNextPage}>next</a>
        {console.log(props.output)}
      </div>
      <div>
        <ul>
          {
            props.output.map(item => {
              return <ol key={item.name}>{item.name}</ol>
            })
          }
        </ul>
      </div>

    </div>

  );

  switch (currentLocation) {
    case '/planets':
      console.log(currentLocation);
      return (renderHtml);
    case '/spaceships':
      console.log(currentLocation);
      return (renderHtml);
    case '/vehicles':
      console.log(currentLocation);
      return (renderHtml);
    case '/people':
      console.log(currentLocation);
      return (renderHtml);
    case '/films':
      console.log(currentLocation);
      return (renderHtml);
    case '/species':
      console.log(currentLocation);
      return (renderHtml);
  }
  return (
    renderHtml
  );
};
//Pages.propTypes = {};

const mapStateToProps = state => {
  return {
    toNextPage: state.reducerOne.nextPage,
    output: state.reducerOne.serverData
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onGetServerData: () => dispatch(getServerData()),
    //TODO: pass current location to get right info onGetServerData: (currentLoc) => dispatch({getServerData, currentLoc}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
