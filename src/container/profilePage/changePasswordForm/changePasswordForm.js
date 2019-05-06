import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TextFieldGroup} from '../../../components/common';
import {userActions} from '../../../_actions/userActions';
import {passwordValidation} from '../../../_helper/validations';
import history from '../../../_helper/history';

class ChangePasswordForm extends Component{
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
            currentPassword:'',
            newPassword:'',
            confNewPassword:'',
            isCurrentValid:false,
            errors:{}
        };
        this.onChange=this.onChange.bind(this);
        this.checkCurrentPass=this.checkCurrentPass.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.onCancel=this.onCancel.bind(this);
    }
    onCancel(){
        history.goBack();

    }
    isValid(){
       const {errors, isValid}= passwordValidation(this.state);
       if(!isValid){
           this.setState({errors});
       }
       return isValid;
    }
   
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    checkCurrentPass(e){
        e.preventDefault();



        const currentPassword = this.state.currentPassword;
        console.log('check this pass',currentPassword);
        if(currentPassword){
            const {dispatch , user} = this.props;
            const checkUserWith={pass:currentPassword,id:user.id}
            dispatch(userActions.checkCurrentPass(checkUserWith));
        }

    }

    changePassword(e){
        e.preventDefault();

        if(this.isValid()){
            console.log('valid');
            const {newPassword} = this.state;
            const {user, dispatch}= this.props;
            let changefor={password:newPassword,id:user.id};
            dispatch(userActions.updatePassword(changefor));
        }       

    }
    render(){
        const {currentPassword, newPassword , confNewPassword, errors} = this.state;
        const {currentPassUser,user} = this.props;
        console.log('user',user);

        return(
            <div className="change-password-form rp-shadow-box">
            {!currentPassUser ? <form name="form" onSubmit={this.checkCurrentPass}>
                <TextFieldGroup 
                    name="currentPassword"
                    value={currentPassword}
                    onChange={this.onChange}
                    type="password"
                    label="Current Password"
                    

                />

                <div className="form-group">
                    <button type="submit" className="btn btn-danger btn-lg">Submit</button>
                    <button type="button" className="ml-2 btn btn-default btn-lg" onClick={this.onCancel}>Cancle</button> 
                </div>

            </form> 
            : <form name="form" onSubmit={this.changePassword}>
                    <TextFieldGroup 
                        name="newPassword"
                        value={newPassword}
                        onChange={this.onChange}
                        type="password"
                        label="New Password"
                        error={errors.newPassword}

                    />
                    <TextFieldGroup 
                        name="confNewPassword"
                        value={confNewPassword}
                        onChange={this.onChange}
                        type="password"
                        label="Confirm New Password"
                        error={errors.confNewPassword}

                    />

                    <div className="form-group">
                        <button type="submit" className="btn btn-danger btn-lg">Submit</button>                         
                    </div>

                </form>
            }
            

            </div>
        );
    }
}


const mapStateToProps= (state) =>{
    console.log('state',state);
    const { loggedIn, user } = state.authentication;
    const {currentPassUser} = state.userReducer;
    return {       
       loggedIn,
       currentPassUser,
       user
    };
}
export default connect(mapStateToProps)(ChangePasswordForm);
