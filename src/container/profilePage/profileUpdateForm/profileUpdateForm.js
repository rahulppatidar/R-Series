import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TextFieldGroup} from '../../../components/common';
import {userActions} from '../../../_actions/userActions';
import {updateProfileValidation} from '../../../_helper/validations';
import history from '../../../_helper/history';

class ProfileUpdateForm extends Component{
    constructor(props){
        super(props);
        if(!this.props.loggedIn){
            history.push(`${process.env.PUBLIC_URL}/login`);
        }
        history.listen((location, action) => {
            // clear set currentpass
            this.props.dispatch(userActions.clearCurrentPassInStore());
        });
        this.state={
            ruser:{
                name:'',
                email:'',
                mobile:''            
            },
            errors:{}
        };
        this.onChange=this.onChange.bind(this);      
        this.updateProfile=this.updateProfile.bind(this);
        this.onCancel=this.onCancel.bind(this);
    }
    isValid(){
       const {errors, isValid}= updateProfileValidation(this.state.ruser);
       if(!isValid){
           this.setState({errors});
       }
       return isValid;
    }
   


    onChange(e){
        const ruser={...this.state.ruser,[e.target.name]:e.target.value}
        this.setState({ruser});
        console.log('onchange',this.state.ruser);
    }    

    updateProfile(e){
        e.preventDefault();

        if(this.isValid()){
            console.log('valid');
            const {ruser} = this.state;
            const {user, dispatch}= this.props;
            let changefor={...ruser,id:user.id};
            dispatch(userActions.updateProfile(changefor))
            .then(res=>{
                setTimeout(()=>{
                history.push(`${process.env.PUBLIC_URL}/user-profile`);
                },1000);
            })
            .catch(err=> console.log("Profile Update Error",err));
        }       

    }

    onCancel(){
        history.goBack();

    }
    componentDidMount(){
        const {name,email,contact_number} = this.props.user;
        const ruser={name,email,mobile:contact_number};
        console.log('ruser',ruser);
        this.setState({ruser});
    }
    render(){
        const {ruser , errors} = this.state;
        const { user } = this.props;
        console.log('user',user);

        return(
            <div className="change-password-form rp-shadow-box">
           
            <form name="form" onSubmit={this.updateProfile}>
                    <TextFieldGroup 
                        name="name"
                        value={ruser.name}
                        onChange={this.onChange}
                        label="Name"
                        error={errors.name}

                    />
                    <TextFieldGroup 
                        name="email"
                        value={ruser.email}
                        onChange={this.onChange}
                        type="email"
                        label="Email"
                        error={errors.email}

                    />

                    <TextFieldGroup 
                        name="mobile"
                        value={ruser.mobile}
                        onChange={this.onChange}
                        label="Mobile"
                        error={errors.mobile}

                    />

                    <div className="form-group">
                        <button type="submit" className="btn btn-danger btn-lg">Update</button>
                        <button type="button" className="ml-2 btn btn-default btn-lg" onClick={this.onCancel}>Cancle</button> 
                    </div>

                </form>

            </div>
        );
    }
}


const mapStateToProps= (state) =>{
    console.log('state',state);
    const { loggedIn } = state.authentication;
    const {currentPassUser} = state.userReducer;
    return {       
       loggedIn,
       currentPassUser,
       user: state.userReducer.user
    };
}
export default connect(mapStateToProps)(ProfileUpdateForm);
