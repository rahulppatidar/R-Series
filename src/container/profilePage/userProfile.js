import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col, Card,CardHeader, CardBody,
    CardTitle } from 'reactstrap';
import {apiBaseUrl} from '../../_helper/appConfig';
import MembershipPlan from './membership/membershipPlan';
import {FileUploadField} from '../../components/common';
import {userActions} from '../../_actions/userActions';
import { alertActions } from '../../_actions/alertActions';
import './userProfile.css';
import {NavLink} from 'react-router-dom';


class UserProfile extends Component{
    constructor(props){
        super(props);
        this.onProfileImageFileSelect=this.onProfileImageFileSelect.bind(this);
        this.onLoad=this.onLoad.bind(this);
    }

    onLoad(){
         if(this.props.loggedIn){
             console.log("getting user...");
             const {dispatch} = this.props;
           dispatch(userActions.getSingleUser(this.props.authUser));
         }        
    }

    componentDidMount(){

        if(this.props.loggedIn){
            console.log("getting user didmount...");
            const {dispatch} = this.props;
           dispatch(userActions.getSingleUser(this.props.authUser));
        }   
    }
    onProfileImageFileSelect(e){
        const file=e.target.files[0];
        if(file){
            const user_id= this.props.user.id;        
            const uploadfile={id:user_id,file:file};
            console.log(uploadfile);
            const {dispatch} = this.props;
            dispatch(userActions.updateProfileImage(uploadfile))
            .then(res=> {
                console.log('Back ', res);
                dispatch(alertActions.success(res.message));
            })
            .catch(err=> console.log(err));
     
        }        
        
    }
    render(){
        const {authUser, user, loggedIn } = this.props;
        console.log("loggedIn",loggedIn);     
        console.log("authUser",authUser);
        console.log("user",user);
        return(
            
            <div className=" user-profile " onLoad={this.onLoad}>
                <Container>
                   { user && <Row>
                      <Col md={{size:3}}>
                        <Row>
                            <Col>
                            <div className="profile-image">
                                <img src={ apiBaseUrl+'/'+user.filename} alt={user.name} className="img-thumbnail rounded w-100"/>
                                <div className="profile-image-update-box">
                                    <FileUploadField 
                                        name="profile_picture"
                                        accept="image/x-png,image/jpeg,image/jpg"
                                        onChange={this.onProfileImageFileSelect}
                                        label={'Update'} 
                                    />
                                </div>
                            </div>
                            </Col>
                        </Row>                            
                        <Row>
                        <Col>
                        <Card className="settings">
                        <CardHeader>Settings</CardHeader>                            
                            <CardBody>
                            <CardTitle>
                                <NavLink to={`${process.env.PUBLIC_URL}/change-password`}><i className="fas fa-key mr-2"></i>Change Password</NavLink>
                                <br/><NavLink to={`${process.env.PUBLIC_URL}/update-profile`}><i className="fas fa-user-edit mr-2"></i>Update Profile</NavLink>
                                
                            </CardTitle>                            
                            </CardBody>
                        </Card>
                        </Col>
                        </Row>    
                      </Col>
                      <Col md={{size:9}}>
                      <div className="profile-detail">
                      <table className="table table-borderless">   
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{user.name}</td>                                    
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{user.email}</td>                                    
                                </tr>
                                <tr>
                                    <th>Contact No.</th>
                                    <td>{user.contact_number}</td>                                    
                                </tr>                         

                            </tbody>
                        </table>
                      </div>
                      <h3>Membership Plan</h3>
                      <MembershipPlan />                       
                        
                      </Col>
                   </Row> }
                </Container>
            </div>
           
        );
    }
}


const mapStateToProps= (state) =>{
    const { user , loggedIn } = state.authentication;
    const {updatedProfileImage} =state.userReducer;
    return {       
       loggedIn,
       authUser :user,
       updatedProfileImage,
       user: state.userReducer.user
    };
}
export default connect(mapStateToProps)(UserProfile);


