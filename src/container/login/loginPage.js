import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import LoginForm from './loginForm/loginForm';

class LoginPage extends React.Component {
    render() {    
        return (
            <div className="LoginPage">
                <Container>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{size: 6, offset:3}} >
                        <LoginForm title="Login" />             
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


export default connect(mapStateToProps)(LoginPage);
