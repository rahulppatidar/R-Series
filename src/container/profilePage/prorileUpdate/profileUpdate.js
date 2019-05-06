import React, {Component} from 'react';
import ProfileUpdateForm from '../profileUpdateForm/profileUpdateForm';
import { Container, Row, Col } from 'reactstrap';
class ProfileUpdate extends Component{
    render(){        
        return(
            <div className="change-password">
                <Container>
                    <Row>
                        <Col sm={{size:6, offset:3}}>
                            <ProfileUpdateForm />
                        </Col>
                    </Row>
                </Container>
              
            </div>
        );
    }
}

export default ProfileUpdate;