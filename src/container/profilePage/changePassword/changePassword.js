import React, {Component} from 'react';
import ChangePasswordForm from '../changePasswordForm/changePasswordForm';
import { Container, Row, Col } from 'reactstrap';
class ChangePassword extends Component{
    render(){        
        return(
            <div className="change-password">
                <Container>
                    <Row>
                        <Col sm={{size:6, offset:3}}>
                            <ChangePasswordForm />
                        </Col>
                    </Row>
                </Container>
              
            </div>
        );
    }
}

export default ChangePassword;