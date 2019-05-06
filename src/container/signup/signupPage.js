import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import SignupForm from './signupForm/signupdForm';

class SignupPage extends Component{
    render(){
        return(
            <div className="signup-page">
                <Container>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{size: 6, offset:3}}>
                            <SignupForm title={'SignUp'}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SignupPage;