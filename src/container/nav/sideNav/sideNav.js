import React, {Component} from 'react';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom';
import { userActions } from '../../../_actions/userActions';
import './sideNav.css';
import {PUBLIC_URL} from '../../../_helper/appConfig';
class SideNav extends Component {
  render () {
    return (
      <Menu burgerBarClassName={ "fas fa-bars" }  burgerButtonClassName={ "rp-class" } customBurgerIcon={ <i className="fas fa-bars"></i> } >        
        <NavLink to={`${process.env.PUBLIC_URL}/`} className="menu-item" activeClassName="active" exact>Audio</NavLink>
        <NavLink to={`${PUBLIC_URL}/video`} className="menu-item" activeClassName="active">Video</NavLink>
        
        {!this.props.loggedIn && 
              <NavLink to={`${PUBLIC_URL}/login`} className="menu-item" activeClassName="active">Login</NavLink>
        }
        {this.props.loggedIn &&
            <NavLink to={`${PUBLIC_URL}/user-profile`} >Profile</NavLink>
        }
        {this.props.loggedIn && <a href="/logout"  onClick={ (e)=> {e.preventDefault(); this.props.dispatch(userActions.logout()); } }>Logout</a>}
        <a href="/getOnGoogle"><img src={`${PUBLIC_URL}/img/googleplay.png`} alt="GetOnGoogle" className='getongoogle' /></a>  
      </Menu>
    );
  }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
  }
  
  
export default connect(mapStateToProps)(SideNav);
