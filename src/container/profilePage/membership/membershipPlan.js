import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Row, Col, CardHeader, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter } from 'reactstrap';
import {apiBaseUrl} from '../../../_helper/appConfig';
import './membershipPlan.css';

import {membershipPlanAction} from '../../../_actions/membershipActions';
const createMarkup = (data) => {
    return {__html: data};
  }

class MembershipPlan extends Component{

    componentDidMount(){
        this.props.dispatch(membershipPlanAction());
    }
    render(){        
        const {user, membershipPlan} = this.props;
        return(
            <div className=" membership-plan ">
            <Row>
                {
                    membershipPlan.map(mplan => (
                        <Col sm={{size:6}} xl={{size:4}} className="my-3" key={mplan.id}>
                            <Card>
                                <CardHeader tag="h3" className="text-center">{mplan.title}</CardHeader>
                                {/* <CardImg top width="100%" src={apiBaseUrl+'/'+mplan.image} alt={mplan.title} /> */}
                                <CardBody>                                
                                <CardSubtitle></CardSubtitle>
                                <CardText>                                    
                                </CardText>
                                <div className="mplan-detail" dangerouslySetInnerHTML={createMarkup(mplan.details )} />                              
                                
                                </CardBody>
                                <CardFooter className="text-muted mplan-footer">
                                <h4 className="mr-auto w-50">Rs. {mplan.price}</h4>
                                
                               
                                {
                                    mplan.id===user.user_level 
                                ? <Button className="ml-auto my-0 btn-success" disabled>Active</Button>
                                : <Button className="ml-auto my-0 ">Upgrade</Button>
                                }
                                             
                                
                                
                                
                                </CardFooter>
                            </Card>
                        </Col>
                    ))
                }
                
            </Row>
                   
            </div>
        );
    }
}


const mapStateToProps= (state) =>{
    const { user, loggedIn } = state.authentication;
    
    return {       
       loggedIn,
       user,
       membershipPlan: state.membershipReducer.membershipPlan
    };
}
export default connect(mapStateToProps)(MembershipPlan);


