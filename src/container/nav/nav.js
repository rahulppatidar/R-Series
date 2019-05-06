import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import {PUBLIC_URL} from '../../_helper/appConfig';
import {
  Collapse,
  Navbar,
  NavbarToggler, 
  Nav,
  NavItem,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Container, Row,Col } from 'reactstrap';
import {userActions} from '../../_actions/userActions';
import './nav.css';
import SearchModal from '../../components/modals/searchModal';
class AppNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {loggedIn} = this.props;
    return (
      <div className="app-nav">
               
        
        <Container>
          <Row>
            <Col xs="12">
            <Navbar color="white" light fixed='top' expand="md">              
              <NavLink className="navbar-brand" to={`${PUBLIC_URL}/`}>
                <img src={`${PUBLIC_URL}/img/logo.jpg`} alt="RSeries" />
              </NavLink>
              <NavbarToggler onClick={this.toggle} className="d-none d-sm-none"/>
              <Collapse isOpen={this.state.isOpen} navbar className="d-none d-sm-none">
                <Nav className="ml-auto pr-5 mr-5" navbar>
                <NavItem className="search-icon">
                <SearchModal buttonLabel={<i className='fas fa-search d-none d-md-inline-block mr-2'></i>}/>
                </NavItem>                  
                  <NavItem>
                  { !loggedIn && <NavLink to={`${PUBLIC_URL}/login`} className="nav-link" >Login</NavLink> }
                  </NavItem>
                  {this.props.loggedIn &&
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        <span className="user-icon"><i className="fas fa-user"></i></span>
                        </DropdownToggle>
                        <DropdownMenu right tag='ul'>
                          <DropdownItem tag='li'>
                          <NavLink to={`${PUBLIC_URL}/user-profile`} className="nav-link" onClick={this.toggle}  >Profile</NavLink>
                          </DropdownItem>          
                          
                          <DropdownItem tag='li'>
                            {this.props.loggedIn && <a href="/logout" className="nav-link"  onClick={ (e)=> {e.preventDefault(); this.props.dispatch(userActions.logout()); this.toggle(); } }>Logout</a>}
                          </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    }                 
                </Nav>
              </Collapse>
            </Navbar>
        
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { loggedIn } = state.authentication;
  return {
      loggedIn
  };
}


export default connect(mapStateToProps)(AppNav);