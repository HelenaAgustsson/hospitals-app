import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import {
  HospitalsEast,
  HospitalsHC,
  HospitalsMidlands,
  HospitalsLondon,
  HospitalsScotland,
  HospitalsSouth,
  HospitalsSouthWest,
  HospitalsWales,
  HospitalsNorth,
  HospitalsNI,
} from './hospitals';

class Menu extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/" activeStyle={{ color: 'darkblue' }}>
          Hospital Admin
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals" activeStyle={{ color: 'darkblue' }}>
          East
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals-home" activeStyle={{ color: 'darkblue' }}>
          Home Counties
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals-midlands" activeStyle={{ color: 'darkblue' }}>
          Midlands
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals-london" activeStyle={{ color: 'darkblue' }}>
          London
        </NavLink>
        {'  '}
        <NavLink to="/hospitals-south" activeStyle={{ color: 'darkblue' }}>
          South
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals-southwest" activeStyle={{ color: 'darkblue' }}>
          South West
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals-scotland" activeStyle={{ color: 'darkblue' }}>
          Scotland
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals-wales" activeStyle={{ color: 'darkblue' }}>
          Wales
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals-north" activeStyle={{ color: 'darkblue' }}>
          North
        </NavLink>
        {' ｜ '}
        <NavLink to="/hospitals-NI" activeStyle={{ color: 'darkblue' }}>
          Northern Ireland
        </NavLink>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return <div>Welcome to Hospital Admin</div>;
  }
}

ReactDOM.render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/hospitals" component={HospitalsEast} />
      <Route exact path="/hospitals-home" component={HospitalsHC} />
      <Route exact path="/hospitals-midlands" component={HospitalsMidlands} />
      <Route exact path="/hospitals-north" component={HospitalsNorth} />
      <Route exact path="/hospitals-london" component={HospitalsLondon} />
      <Route exact path="/hospitals-south" component={HospitalsSouth} />
      <Route exact path="/hospitals-southwest" component={HospitalsSouthWest} />
      <Route exact path="/hospitals-scotland" component={HospitalsScotland} />
      <Route exact path="/hospitals-wales" component={HospitalsWales} />
      <Route exact path="/hospitals-NI" component={HospitalsNI} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
