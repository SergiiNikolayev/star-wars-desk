import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to={'/planets'}><img alt={'planets'} src={require('../assets/img/planets.jpg')}/><p>Planets</p></Link></li>
        <li><Link to={'/spaceships'}><img alt={'spaceships'} src={require('../assets/img/spaceships.jpg')}/><p>Spaceships</p></Link></li>
        <li><Link to={'/vehicles'}><img alt={'vehicles'} src={require('../assets/img/planets.jpg')}/><p>Vehicles</p></Link></li>
        <li><Link to={'/people'}><img alt={'people'} src={require('../assets/img/planets.jpg')}/><p>People</p></Link></li>
        <li><Link to={'/films'}><img alt={'films'} src={require('../assets/img/planets.jpg')}/><p>Films</p></Link></li>
        <li><Link to={'/films'}><img alt={'species'} src={require('../assets/img/planets.jpg')}/><p>Species</p></Link></li>
      </ul>
    </div>
  );
};

export default Home;
