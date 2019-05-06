import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {withRouter, NavLink} from 'react-router-dom';
import history from './_helper/history';
import {alertActions} from './_actions/alertActions';
import './App.css';
import AppRoutes from './_helper/appRoutes';
import AppNav from './container/nav/nav';
import RpAlert from './components/alert/alert';
import SideNav from './container/nav/sideNav/sideNav';
import SearchModal from './components/modals/searchModal';

class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}
  render() {
    const {alert} = this.props;
    return (
      <div className="App">
        <header className="App-header"> 
          <AppNav />
          <SideNav />           
        </header>
        <Container fluid>
          <Row>
            <Col md={{size:10}}>
            {alert.message &&  <RpAlert message={alert.message} type={alert.type} /> }
            <div className="main-wrapper">
              {AppRoutes}
            </div>            
            </Col>
            <Col md={{size:2}} className="aid-block">
              <div className="aid">Advertisment</div>
              <div className="aid">Advertisment</div>
              <div className="aid">Advertisment</div>
            </Col>
          </Row>
        </Container>
        
        <footer className="d-md-none">
        <div className="navbar-bottom">
          <NavLink to={`${process.env.PUBLIC_URL}/`} activeClassName="active-link" exact><i className="fas fa-headphones-alt"></i>Audio</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/video`} activeClassName="active-link"><i className="fas fa-video"></i>Video</NavLink>
          <SearchModal buttonLabel={<i className='fas fa-search d-md-none' style={{'color': '#adb5bd'}}></i>}/>                             
                                       
        </div>

        </footer>                 
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}
export default withRouter(connect(mapStateToProps)(App));
//export default connect(mapStateToProps)(App);
